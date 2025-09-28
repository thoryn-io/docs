import { NextRequest } from "next/server";
import { Subscribers } from "@/app/api/slack/events/route"; // adjust path
import { getSession } from "@/lib/session/routes";

type ChatMessage = {
    from: "agent" | "visitor";
    text?: string;
    ts?: string;
};

export const runtime = "nodejs"; // SSE doesn’t work on edge runtime

export async function GET(req: NextRequest) {
    const { sid } = await getSession(req); // ⚠️ must adjust getSession to accept NextRequest
    if (!sid) {
        return new Response("Missing sid", { status: 400 });
    }

    const stream = new ReadableStream({
        start(controller) {
            const encoder = new TextEncoder();

            const send = (payload: ChatMessage) => {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
            };

            if (!Subscribers.has(sid)) {
                Subscribers.set(sid, new Set());
            }
            Subscribers.get(sid)!.add(send);

            // heartbeat
            const ping = setInterval(() => {
                controller.enqueue(encoder.encode(":\n\n"));
            }, 15000);

            const close = () => {
                clearInterval(ping);
                Subscribers.get(sid)?.delete(send);
                controller.close();
            };

            // AbortSignal fires when client disconnects
            req.signal.addEventListener("abort", close);
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
            "X-Accel-Buffering": "no",
        },
    });
}