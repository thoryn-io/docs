import type { NextApiRequest, NextApiResponse } from "next";
import { WebClient } from "@slack/web-api";
import { LeadMemory } from "../leads/session";

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const { sessionId, text } = req.body ?? {};
    if (!sessionId || !text) {
        res.status(400).end("Missing sessionId or text");
        return;
    }

    const record = LeadMemory.map.get(sessionId);
    if (!record) {
        res.status(404).end("Unknown session");
        return;
    }

    await slack.chat.postMessage({
        channel: record.channel,
        thread_ts: record.thread_ts,
        text: `💬 Visitor: ${text}`,
    });

    res.status(200).end("ok");
}