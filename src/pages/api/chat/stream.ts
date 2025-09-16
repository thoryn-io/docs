import type { NextApiRequest, NextApiResponse } from "next";
import { Subscribers } from "../slack/events";

export const config = { api: { bodyParser: false } } as const; // streaming

type Listener = (payload: unknown) => void;

function getSubscriberSet(sessionId: string): Set<Listener> {
    let set = Subscribers.get(sessionId);
    if (!set) {
        set = new Set<Listener>();
        Subscribers.set(sessionId, set);
    }
    return set;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const sessionIdParam = req.query.sessionId;
    const sessionId =
        typeof sessionIdParam === "string" ? sessionIdParam : Array.isArray(sessionIdParam) ? sessionIdParam[0] : "";

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

    const send: Listener = (payload: unknown) => {
        // stringify safely
        let data = "";
        try {
            data = JSON.stringify(payload ?? {});
        } catch {
            data = JSON.stringify({ error: "non-serializable payload" });
        }
        res.write(`data: ${data}\n\n`);
    };

    const subs = getSubscriberSet(sessionId);
    subs.add(send);

    // heartbeat to keep the connection alive (some proxies time out otherwise)
    const ping = setInterval(() => {
        res.write(":\n\n");
    }, 15_000);

    const cleanup = () => {
        clearInterval(ping);
        subs.delete(send);
        // End only if not already finished
        if (!res.writableEnded) res.end();
    };

    req.on("close", cleanup);
    req.on("aborted", cleanup);
    req.on("error", cleanup);
}