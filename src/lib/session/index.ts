// lib/session.ts
import { redis } from "../redis";
import { hmacSHA256, randomId } from "../crypto";
import {ChatThreadData} from "../chat";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

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


// ───────────────────────────────────────────────────────────────────────────────
// Core

/** Get current session. If `autoCreate` is true, create an anonymous session when absent. */
export async function getSession(
    req: NextRequest,
    opts?: { autoCreate?: boolean; initial?: Record<string, unknown> }
): Promise<{ sid: string | null; data: SessionData | null }> {
    // cookies in NextRequest are parsed already
    const signed = req.cookies.get(COOKIE)?.value;

    if (!signed) {
        if (opts?.autoCreate) {
            return createSession(req, { extra: opts.initial }); // ✅ must accept NextRequest
        }
        return { sid: null, data: null };
    }

    const raw = await verify(signed);
    if (!raw) {
        if (opts?.autoCreate) {
            return createSession(req, { extra: opts.initial });
        }
        return { sid: null, data: null };
    }

    const [sid] = raw.split(":");
    const data = await redis.get<SessionData>(key(sid));
    if (!data) {
        if (opts?.autoCreate) {
            return createSession(req, { extra: opts.initial });
        }
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
export async function createSession(
    req: NextRequest,
    opts: { extra?: Record<string, unknown> } = {}
): Promise<{ sid: string; data: SessionData }> {
    const sid = randomId(32); // regenerate to prevent fixation
    const issuedAt = String(nowSec());
    const ua = req.headers.get("user-agent") ?? "na";
    const raw = `${sid}:${issuedAt}:${ua.length}`;

    const base: SessionData = {
        createdAt: nowSec(),
        lastSeen: nowSec(),
    };
    const data: SessionData = opts.extra ? { ...base, ...opts.extra } : base;

    // persist session
    await redis.set(key(sid), data, { ex: TTL });

    // sign + set cookie on the response
    const signed = await sign(raw);
    (await cookies()).set(COOKIE, signed, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: TTL, // seconds
    });

    return { sid, data };
}

export async function mergeSession(
    req: NextRequest,
    opts: { patch: Record<string, unknown> }
): Promise<SessionData | null> {
    const { sid, data } = await getSession(req, { autoCreate: true });
    if (!sid || !data) return null;

    const updated: SessionData = {
        ...data,
        ...opts.patch,
        lastSeen: nowSec(),
    };

    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

/** Set a single key in the session (creates anonymous if none). */
export async function setSessionValue(
    req: NextRequest,
    keyName: string,
    value: unknown
): Promise<unknown | null> {
    const { sid, data } = await getSession(req, { autoCreate: true });
    if (!sid || !data) return null;

    const updated: SessionData = {
        ...data,
        [keyName]: value,
        lastSeen: nowSec(),
    };

    await redis.set(key(sid), updated, { ex: TTL });
    return updated[keyName];
}

/** Read a single key from the session. */
export async function getSessionValue<T = unknown>(
    req: NextRequest,
    keyName: string
): Promise<T | undefined> {
    const { data } = await getSession(req);
    return data?.[keyName] as T | undefined;
}

/** Update session with a function (no auto-create; returns null if no session). */
export async function updateSession(
    req: NextRequest,
    opts: { updater: (d: SessionData) => SessionData }
): Promise<SessionData | null> {
    const { sid, data } = await getSession(req);
    if (!sid || !data) return null;

    const updated = opts.updater({ ...data, lastSeen: nowSec() });
    await redis.set(key(sid), updated, { ex: TTL });
    return updated;
}

/** Destroy current session (if any). */
export async function destroySession(req: NextRequest): Promise<void> {
    const signed = req.cookies.get(COOKIE)?.value;
    if (!signed) return;

    const raw = await verify(signed);
    if (raw) {
        const sid = raw.split(":")[0];
        await redis.del(key(sid));
    }

    // remove cookie
    (await cookies()).set(COOKIE, "", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
}
function threadKey(thread_ts: string) {
    return `thread:${thread_ts}`;
}

/** Set session key and maintain reverse index for thread_ts */
export async function setSessionValueWithThreadIndex(
    req: NextRequest,
    keyName: string,
    value: unknown
): Promise<unknown | null> {
    const { sid, data } = await getSession(req, { autoCreate: true });
    if (!sid || !data) return null;

    const updated: SessionData = { ...data, [keyName]: value, lastSeen: nowSec() };
    await redis.set(key(sid), updated, { ex: TTL });

    // If storing the chat thread, create a reverse index: thread_ts -> sid
    if (
        keyName === "CHAT_THREAD" &&
        value !== null &&
        typeof value === "object" &&
        "thread_ts" in (value as ChatThreadData)
    ) {
        const thread_ts = (value as ChatThreadData).thread_ts ?? "";
        if (thread_ts) {
            await redis.set(threadKey(thread_ts), sid, { ex: TTL });
        }
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
