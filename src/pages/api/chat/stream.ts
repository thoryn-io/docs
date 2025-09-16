import type { NextApiRequest, NextApiResponse } from "next";
import { Subscribers } from "../slack/events";

export const config = { api: { bodyParser: false } }; // SSE is streaming, no parsing

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const sessionId = (req.query.sessionId as string) || "";
    if (!sessionId) {
        res.status(400).end("Missing sessionId");
        return;
    }

    // SSE headers
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
    });

    const send = (payload: any) => res.write(`data: ${JSON.stringify(payload)}\n\n`);

    if (!Subscribers.has(sessionId)) Subscribers.set(sessionId, new Set());
    Subscribers.get(sessionId)!.add(send);

    // heartbeat
    const ping = setInterval(() => res.write(":\n\n"), 15000);

    req.on("close", () => {
        clearInterval(ping);
        Subscribers.get(sessionId)?.delete(send);
        res.end();
    });
}