// src/lib/session.ts
import { redis } from "../redis";
import { hmacSHA256, randomId } from "../crypto";
import type { ChatThreadData } from "../chat";
import { readCookieFromRequest, setCookie, deleteCookie } from "../cookies";

const COOKIE = process.env.SESSION_COOKIE_NAME ?? "__host.sid";
const SECRET = process.env.SESSION_SECRET!;
const TTL = parseInt(process.env.SESSION_TTL_SECONDS ?? "1209600", 10); // 14 days

export type SessionData = {
    createdAt: number;
    lastSeen: number;
} & Record<string, unknown>;

const nowSec = () => Math.floor(Date.now() / 1000);
const key = (sid: string) => `sess:${sid}`;
const threadKey = (thread_ts: string) => `thread:${thread_ts}`;

async function sign(v: string) { return `${v}.${await hmacSHA256(SECRET, v)}`; }
async function verify(signed: string): Promise<string | null> {
    const i = signed.lastIndexOf(".");
    if (i < 0) return null;
    const raw = signed.slice(0, i);
    const mac = signed.slice(i + 1);
    const expect = await hmacSHA256(SECRET, raw);
    return mac === expect ? raw : null;
}

/** Get current session. If `autoCreate` is true, create an anonymous session when absent. */
export async function getSession(
    opts?: { autoCreate?: boolean; initial?: Record<string, unknown> }
): Promise<{ sid: string | null; data: SessionData | null }> {
    const signed = await readCookieFromRequest(COOKIE);

    if (!signed) {
        if (opts?.autoCreate) return createSession({ extra: opts.initial });
        return { sid: null, data: null };
    }

    const raw = await verify(signed);
    if (!raw) {
        if (opts?.autoCreate) return createSession({ extra: opts.initial });
        return { sid: null, data: null };
    }

    const [sid] = raw.split(":");
    const data = await redis.get<SessionData>(key(sid));
    if (!data) {
        if (opts?.autoCreate) return createSession({ extra: opts.initial });
        return { sid: null, data: null };
    }

    await redis.expire(key(sid), TTL); // rolling TTL
    return { sid, data };
}

/** Create an (anonymous) session; pass `extra` to seed arbitrary key/values. */
export async function createSession(
    opts: { extra?: Record<string, unknown> } = {}
): Promise<{ sid: string; data: SessionData }> {
    const sid = randomId(32); // prevent fixation
    const issuedAt = String(nowSec());
    const raw = `${sid}:${issuedAt}`;

    const base: SessionData = { createdAt: nowSec(), lastSeen: nowSec() };
    const data: SessionData = opts.extra ? { ...base, ...opts.extra } : base;

    await redis.set(key(sid), data, { ex: TTL });
    const signed = await sign(raw);

    await setCookie(COOKIE, signed, { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: TTL });
    return { sid, data };
}

export async function mergeSession(
    opts: { patch: Record<string, unknown> }
): Promise<SessionData | null> {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;
    const updated: SessionData = { ...data, ...opts.patch, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

export async function setSessionValue(
    keyName: string,
    value: unknown
): Promise<unknown | null> {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;
    const updated: SessionData = { ...data, [keyName]: value, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });
    return updated[keyName];
}

export async function getSessionValue<T = unknown>(
    keyName: string
): Promise<T | undefined> {
    const { data } = await getSession();
    return data?.[keyName] as T | undefined;
}

export async function updateSession(
    opts: { updater: (d: SessionData) => SessionData }
): Promise<SessionData | null> {
    const { sid, data } = await getSession();
    if (!sid || !data) return null;
    const updated = opts.updater({ ...data, lastSeen: nowSec() });
    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

export async function destroySession(): Promise<void> {
    const signed = await readCookieFromRequest(COOKIE);
    if (signed) {
        const raw = await verify(signed);
        if (raw) {
            const sid = raw.split(":")[0];
            await redis.del(key(sid));
        }
    }
    await deleteCookie(COOKIE);
}

/** Set session key and maintain reverse index for thread_ts */
export async function setSessionValueWithThreadIndex(
    keyName: string,
    value: unknown
): Promise<unknown | null> {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;

    const updated: SessionData = { ...data, [keyName]: value, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });

    if (
        keyName === "CHAT_THREAD" &&
        value &&
        typeof value === "object" &&
        "thread_ts" in (value as ChatThreadData)
    ) {
        const thread_ts = (value as ChatThreadData).thread_ts ?? "";
        if (thread_ts) await redis.set(threadKey(thread_ts), sid, { ex: TTL });
    }
    return updated[keyName];
}

export async function getSessionByThread(thread_ts: string) {
    const sid = await redis.get<string>(threadKey(thread_ts));
    if (!sid) return null;
    const data = await redis.get<SessionData>(key(sid));
    return { sid, data };
}