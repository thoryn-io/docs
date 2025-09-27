import {getSession, setSessionValueWithThreadIndex, getSessionByThread} from "@/lib/session";
import {logger} from "@/lib/logs";
import { WebClient } from "@slack/web-api";


const CHAT_THREAD = "CHAT_THREAD"
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
export type ChatThreadData = {
    channel: string;
    thread_ts: string;
};

async function initChatOrReconnect(): Promise<ChatThreadData> {
    const {sid, data} = await getSession({
        autoCreate: true
    })
    if (!sid) {
        logger.warn("A session ID is expected but not found")
        throw Error("A session ID is expected but not found")
    }
    if (!data) {
        logger.warn("No session data found")
        throw Error("No session data found")
    }
    const sessionId = sid
    const chatThread = data[CHAT_THREAD] as ChatThreadData

    if (!chatThread) {
        logger.debug("User started a new chat session")

        const result = await slack.chat.postMessage({
            channel: process.env.SLACK_LEADS_CHANNEL_ID as string,
            text: `🆕 New website visitor started a chat\nSession: ${sessionId}`,
        });
        logger.debug("Init thread response", result)

        const thread_ts = result.ts as string;
        const channel = result.channel as string;
        const chatThread: ChatThreadData = {
            channel: channel,
            thread_ts: thread_ts
        };
        setSessionValueWithThreadIndex(CHAT_THREAD, chatThread)
        return chatThread
    }
    return chatThread
}

export async function sendMessage(message: string) {
    const chatThread = await initChatOrReconnect();
    const response =await slack.chat.postMessage({
        channel: chatThread.channel,
        thread_ts: chatThread.thread_ts,
        text: message
    });
    logger.debug("Send message in thread response", response)
}


export async function findSessionId(threadId: string) {

    const thread = await getSessionByThread(threadId)
    if (!thread) {
        logger.warn("No session found for the provided thread ID");
        return
    }
    return thread.sid;
}
