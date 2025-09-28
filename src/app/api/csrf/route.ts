import { NextRequest } from "next/server";
import { getOrCreateCsrfToken, verifyCsrf } from "@/lib/csrf";
export const runtime = "nodejs"; // Edge also fine; avoid Winston on Edge

export async function GET(req: NextRequest) {
    // Send token to the client (store it and send back on POST)
    const token = await getOrCreateCsrfToken(req);
    return Response.json({ csrfToken: token });
}

export async function POST(req: NextRequest) {
    const v = await verifyCsrf(req);
    if (!v.ok) return new Response(`CSRF ${v.reason}`, { status: 403 });
    // ... do your mutation safely ...
    return Response.json({ ok: true });
}