import {NextResponse, NextRequest} from "next/server";
import {getOrCreateCsrfToken} from "@/lib/csrf";

export const config = {matcher: ["/:path*"]};
const PASS_HDR = "x-csrf-provisioned"; // internal header for this request only

export async function middleware(req: NextRequest) {
    // visible proof when you hit /contact/
    if (req.nextUrl.pathname === "/contact/") {
        const requestHeaders = new Headers(req.headers);

        // const res = NextResponse.redirect(new URL(req.nextUrl.pathname + "?_csrfx=1", req.nextUrl));
        const token = await getOrCreateCsrfToken()
        requestHeaders.set(PASS_HDR, token);

        return NextResponse.next({request: {headers: requestHeaders}});
    }

    // add a header for anything under /contact/*
    const res = NextResponse.next();
    res.headers.set("x-hello", "world");
    return res;
}

