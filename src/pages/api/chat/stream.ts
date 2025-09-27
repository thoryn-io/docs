import type { NextApiRequest, NextApiResponse } from "next";
import { Subscribers } from "../slack/events";
import {getSession} from "@/lib/session";

export const config = { api: { bodyParser: false } }; // SSE is streaming, no parsing
type ChatMessage = {
    from: "agent" | "visitor";
    text?: string;
    ts?: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const {sid} = await getSession(req, res);
    if (!sid) {
        res.status(400).end("Missing sid");
        return;
    }

    // SSE headers
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
    });


    const send = (payload: ChatMessage): void => {
        res.write(`data: ${JSON.stringify(payload)}\n\n`);
    };
    if (!Subscribers.has(sid)) Subscribers.set(sid, new Set());
    Subscribers.get(sid)!.add(send);

    // heartbeat
    const ping = setInterval(() => res.write(":\n\n"), 15000);

    req.on("close", () => {
        clearInterval(ping);
        Subscribers.get(sid)?.delete(send);
        res.end();
    });
}