// lib/session.ts
import { cookies, headers } from "next/headers";
import { redis } from "../redis";
import { hmacSHA256, randomId } from "../crypto";
import {ChatThreadData} from "@/lib/chat";

const COOKIE = process.env.SESSION_COOKIE_NAME ?? "__host.sid";
const SECRET = process.env.SESSION_SECRET!;
const TTL = parseInt(process.env.SESSION_TTL_SECONDS ?? "1209600", 10); // 14 days

// ── Flexible session data: userId is optional, arbitrary K/V allowed
export type SessionData = {
    createdAt: number; // epoch seconds
    lastSeen: number;  // epoch seconds
} & Record<string, unknown>;

function nowSec() { return Math.floor(Date.now() / 1000); }
function key(sid: string) { return `sess:${sid}`; }

async function sign(v: string) { return `${v}.${await hmacSHA256(SECRET, v)}`; }
async function verify(signed: string): Promise<string | null> {
    const i = signed.lastIndexOf(".");
    if (i < 0) return null;
    const raw = signed.slice(0, i);
    const mac = signed.slice(i + 1);
    const expect = await hmacSHA256(SECRET, raw);
    return mac === expect ? raw : null;
}

function cookieBase(maxAge?: number) {
    return {
        name: COOKIE, value: "",
        httpOnly: true, secure: true, sameSite: "lax" as const, path: "/",
        maxAge,
    };
}

// ───────────────────────────────────────────────────────────────────────────────
// Core

/** Get current session. If `autoCreate` is true, create an anonymous session when absent. */
export async function getSession(opts?: { autoCreate?: boolean; initial?: Record<string, unknown> }) {
    const jar = await cookies();
    const signed = jar.get(COOKIE)?.value;

    if (!signed) {
        if (opts?.autoCreate) {
            return createSession(opts.initial); // anonymous
        }
        return { sid: null as string | null, data: null as SessionData | null };
    }

    const raw = await verify(signed);
    if (!raw) {
        if (opts?.autoCreate) return createSession(opts.initial);
        return { sid: null, data: null };
    }

    const [sid] = raw.split(":");
    const data = await redis.get<SessionData>(key(sid));
    if (!data) {
        if (opts?.autoCreate) return createSession(opts.initial);
        return { sid: null, data: null };
    }

    // rolling TTL
    await redis.expire(key(sid), TTL);
    return { sid, data };
}

/**
 * Create a session.
 * - Pass a `userId` to create an authenticated session.
 * - Pass `null` (or omit) for an **anonymous** session.
 * - `extra` lets you add arbitrary key/values to the SessionData.
 */
export async function createSession(extra?: Record<string, unknown>) {
    const sid = randomId(32); // regenerate to prevent fixation
    const issuedAt = String(nowSec());
    const ua = (await headers()).get("user-agent") ?? "na";
    const raw = `${sid}:${issuedAt}:${ua.length}`;

    const base: SessionData = {
        createdAt: nowSec(),
        lastSeen: nowSec(),
    };
    const data: SessionData = extra ? { ...base, ...extra } : base;

    await redis.set(key(sid), data, { ex: TTL });
    const signed = await sign(raw);
    (await cookies()).set({ ...cookieBase(TTL), value: signed });

    return { sid, data };
}

/** Merge arbitrary fields into the current session (creates anonymous if none). */
export async function mergeSession(patch: Record<string, unknown>) {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;
    const updated: SessionData = { ...data, ...patch, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

/** Set a single key in the session (creates anonymous if none). */
export async function setSessionValue(keyName: string, value: unknown) {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;
    const updated: SessionData = { ...data, [keyName]: value, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });
    return updated[keyName];
}

/** Read a single key from the session. */
export async function getSessionValue<T = unknown>(keyName: string): Promise<T | undefined> {
    const { data } = await getSession();
    return (data?.[keyName] as T | undefined);
}

/** Update with a function (no auto-create; returns null if no session). */
export async function updateSession(updater: (d: SessionData) => SessionData) {
    const { sid, data } = await getSession();
    if (!sid || !data) return null;
    const updated = updater({ ...data, lastSeen: nowSec() });
    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

/** Destroy current session (if any). */
export async function destroySession() {
    const jar = await cookies();
    const signed = jar.get(COOKIE)?.value;
    if (signed) {
        const raw = await verify(signed);
        if (raw) {
            const sid = raw.split(":")[0];
            await redis.del(key(sid));
        }
    }
    jar.set({ ...cookieBase(0), value: "", maxAge: 0 });
}
function threadKey(thread_ts: string) {
    return `thread:${thread_ts}`;
}

/** Set session key and maintain reverse index for thread_ts */
export async function setSessionValueWithThreadIndex(
    keyName: string,
    value: unknown
) {
    const { sid, data } = await getSession({ autoCreate: true });
    if (!sid || !data) return null;

    const updated: SessionData = { ...data, [keyName]: value, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });

    // if value contains thread_ts → create reverse mapping
    if (
        keyName === "CHAT_THREAD" &&
        typeof value === "object" &&
        value &&
        "thread_ts" in (value as ChatThreadData)
    ) {
        const thread_ts = (value as ChatThreadData)?.thread_ts ?? "";
        await redis.set(threadKey(thread_ts), sid, { ex: TTL });
    }

    return updated[keyName];
}

/** Lookup session data by Slack thread_ts */
export async function getSessionByThread(thread_ts: string) {
    const sid = await redis.get<string>(threadKey(thread_ts));
    if (!sid) return null;
    const data = await redis.get<SessionData>(key(sid));
    return { sid, data };
}