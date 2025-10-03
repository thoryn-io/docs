// src/lib/csrf.ts
import {setCookie, getCookie} from "@/lib/cookies";
import {randomId} from "@/lib/crypto";
import {getSession, mergeSession} from "@/lib/session";
import {headers as headersFn} from "next/headers";

const CSRF_COOKIE = process.env.CSRF_COOKIE_NAME ?? "__host.csrf";
const TOKEN_HEADER = process.env.CSRF_HEADER_NAME ?? "x-csrf-token";

// Next 14/15 compat: headers() may be sync or async
async function getHeaders(): Promise<Headers> {
    const result = headersFn();
    return await result;
}



/** Ensure session has a CSRF secret; return it and set a non-HttpOnly cookie (double-submit). */
export async function getOrCreateCsrfToken(): Promise<string> {
    const {data} = await getSession({autoCreate: true});
    const cur = (data?.csrf as { secret?: string; issuedAt?: number }) ?? {};
    const secret = cur.secret ?? randomId(32);

    if (!cur.secret) {
        await mergeSession({patch: {csrf: {secret, issuedAt: Date.now()}}});
    }

    // mirror token to a non-HttpOnly cookie (double-submit)
    await setCookie(CSRF_COOKIE, secret, {
        httpOnly: false, // readable by client JS / forms
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60, // 1h cookie; server-side session keeps its own TTL
    });

    return secret;
}

/** Verify CSRF for state-changing methods in App Router route handlers. */
export async function verifyCsrf(): Promise<{ ok: true } | { ok: false; reason: string }> {
    const h = await getHeaders();
    const method = (h.get(":method") || h.get("x-http-method-override") || "").toUpperCase();
    const m = method || "GET";
    if (m === "GET" || m === "HEAD" || m === "OPTIONS") return {ok: true};

    // 1) Same-origin (Origin or Referer host must match Host)
    const origin = h.get("origin") ?? "";
    const referer = h.get("referer") ?? "";
    const host = h.get("host") ?? "";
    const sameOrigin = (origin && origin.endsWith(host)) || (referer && referer.includes(host));
    if (!sameOrigin) return {ok: false, reason: "origin"};

    // 2) Header token must match cookie token (double-submit)
    const headerToken = h.get(TOKEN_HEADER) ?? "";
    const cookieToken = (await getCookie(CSRF_COOKIE)) ?? "";
    if (!headerToken || headerToken !== cookieToken) {
        return {ok: false, reason: "cookie-mismatch"};
    }

    // 3) Session must hold the same secret
    const {data} = await getSession();
    const secret = (data?.csrf as { secret?: string } | undefined)?.secret;
    if (!secret || headerToken !== secret) {
        return {ok: false, reason: "session-mismatch"};
    }

    return {ok: true};
}