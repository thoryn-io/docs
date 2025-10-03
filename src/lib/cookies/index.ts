import { cookies as cookiesFn } from "next/headers";

// Next 14/15 compatibility: cookies() may be sync or async

async function getCookieJar(): Promise<ReturnType<typeof cookiesFn>> {
    const result = cookiesFn();
    return await result; // Next.js 15 (async)
}

export type SetCookieOptions = {
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: "lax" | "strict" | "none";
    path?: string;
    maxAge?: number; // seconds
};

/** Read a cookie value from an incoming request (App Router). */
export async function readCookieFromRequest(name: string): Promise<string | undefined> {
    return (await cookiesFn()).get(name)?.value;
}

/** Read a cookie value from the current request scope (App Router). */
export async function getCookie(name: string): Promise<string | undefined> {
    const jar = await getCookieJar();
    return jar.get(name)?.value;
}
/** Set a cookie on the outgoing response (App Router route handlers / server actions). */
export async function setCookie(name: string, value: string, opts: SetCookieOptions = {}) {
    const jar = await getCookieJar();
    jar.set({
        name,
        value,
        httpOnly: opts.httpOnly ?? true,
        secure: opts.secure ?? true,
        sameSite: opts.sameSite ?? "lax",
        path: opts.path ?? "/",
        maxAge: opts.maxAge,
    });
}

/** Delete a cookie on the outgoing response (sets Max-Age=0). */
export async function deleteCookie(name: string) {
    const jar = await getCookieJar();
    jar.set({
        name,
        value: "",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
}