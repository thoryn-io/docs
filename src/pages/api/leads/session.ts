import type { NextApiRequest, NextApiResponse } from "next";
import { WebClient } from "@slack/web-api";
import { nanoid } from "nanoid";

// TODO: replace with Redis/DB. For a quick MVP, keep it in-memory.
const memory = {
    map: new Map<string, { channel: string; thread_ts: string }>(),
    reverse: new Map<string, string>(), // thread_ts -> sessionId
};

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const sessionId = nanoid();

    const result = await slack.chat.postMessage({
        channel: process.env.SLACK_LEADS_CHANNEL_ID as string,
        text: `🆕 New website visitor started a chat\nSession: ${sessionId}`,
    });

    const thread_ts = result.ts as string;
    const channel = result.channel as string;

    memory.map.set(sessionId, { channel, thread_ts });
    memory.reverse.set(thread_ts, sessionId);

    res.status(200).json({ sessionId });
}

// Export for other routes to reuse (MVP only)
export const LeadMemory = memory;