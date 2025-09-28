import { NextRequest } from "next/server";
import { sendMessage } from "@/lib/chat";

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => null);
    const { text } = body ?? {};

    if (!text) {
        return new Response("Missing text", { status: 400 });
    }

    await sendMessage(req, { message: text });

    return new Response("ok", { status: 200 });
}

export async function GET() {
    return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "POST" },
    });
}