import { getSession, setSessionValueWithThreadIndex, getSessionByThread } from "@/lib/session";
import { logger } from "@/lib/logs";
import { WebClient } from "@slack/web-api";
import { NextRequest } from "next/server";

const CHAT_THREAD = "CHAT_THREAD";
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export type ChatThreadData = {
    channel: string;
    thread_ts: string;
};

async function initChatOrReconnect(req: NextRequest): Promise<ChatThreadData> {
    const { sid, data } = await getSession(req, { autoCreate: true });

    if (!sid) {
        logger.warn("A session ID is expected but not found");
        throw new Error("A session ID is expected but not found");
    }
    if (!data) {
        logger.warn("No session data found");
        throw new Error("No session data found");
    }

    const sessionId = sid;
    const chatThread = data[CHAT_THREAD] as ChatThreadData | undefined;

    if (!chatThread) {
        logger.debug("User started a new chat session");

        const result = await slack.chat.postMessage({
            channel: process.env.SLACK_LEADS_CHANNEL_ID as string,
            text: `🆕 New website visitor started a chat\nSession: ${sessionId}`,
        });
        logger.debug("Init thread response", result);

        const thread_ts = result.ts as string;
        const channel = result.channel as string;
        const newChatThread: ChatThreadData = { channel, thread_ts };

        await setSessionValueWithThreadIndex(req, CHAT_THREAD, newChatThread);
        return newChatThread;
    }

    return chatThread;
}

export async function sendMessage(req: NextRequest, opts: { message: string }) {
    const chatThread = await initChatOrReconnect(req);

    const response = await slack.chat.postMessage({
        channel: chatThread.channel,
        thread_ts: chatThread.thread_ts,
        text: opts.message,
    });

    logger.debug("Send message in thread response", response);
}

export async function findSessionId(threadId: string) {
    const thread = await getSessionByThread(threadId);

    if (!thread) {
        logger.warn(`No session found for the provided thread ID ${threadId}`);
        return;
    }

    logger.warn(
        `Session ${thread.sid} ${JSON.stringify(thread.data)} found for the provided thread ID ${threadId}`
    );
    return thread.sid;
}