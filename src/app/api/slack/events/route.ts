// app/api/slack/events/route.ts
import { NextRequest } from "next/server";
import crypto from "crypto";
import { findSessionId } from "@/lib/chat";
import { logger } from "@/lib/logs";

type ChatMessage = {
    from: "agent" | "visitor";
    text?: string;
    ts?: string;
};

/** Simple in-memory subscribers for SSE (MVP) */
type Listener = (payload: ChatMessage) => void;
export const Subscribers = new Map<string, Set<Listener>>();

export const runtime = "nodejs"; // we use Node's crypto + want stable raw-body handling

function verifySlackSignature(req: NextRequest, rawBody: string): boolean {
    const timestamp = req.headers.get("x-slack-request-timestamp");
    const signature = req.headers.get("x-slack-signature");
    if (!timestamp || !signature) return false;

    const baseString = `v0:${timestamp}:${rawBody}`;
    const hmac = crypto
        .createHmac("sha256", process.env.SLACK_SIGNING_SECRET as string)
        .update(baseString)
        .digest("hex");
    const expected = `v0=${hmac}`;

    try {
        return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    // Read raw body once; Slack signature must be computed over the exact raw payload
    const raw = await req.text();

    logger.info("Incoming Slack event", Object.fromEntries(req.headers.entries()), raw);

    // 1) URL verification (Slack sends this during setup)
    try {
        const probe = JSON.parse(raw);
        if (probe?.type === "url_verification" && probe?.challenge) {
            return new Response(probe.challenge as string, {
                status: 200,
                headers: { "Content-Type": "text/plain" },
            });
        }
    } catch {
        // fallthrough to signature verification
    }

    // 2) Verify signatures for real events
    if (!verifySlackSignature(req, raw)) {
        return new Response("Bad signature", { status: 401 });
    }

    // 3) Parse and handle the event
    const body = JSON.parse(raw);
    const ev = body?.event;

    // Only process regular user messages in threads inside your leads channel
    if (
        ev?.type === "message" &&
        ev.subtype == null &&
        ev.thread_ts &&
        ev.channel === process.env.SLACK_LEADS_CHANNEL_ID
    ) {
        const sessionId = await findSessionId(ev.thread_ts);
        if (sessionId) {
            // Relay only Slack user messages (skip your bot echoes)
            const fromAgent = !!ev.user && !ev.bot_id;
            if (fromAgent) {
                const set = Subscribers.get(sessionId);
                if (!set) {
                    logger.warn(`No listeners found ${sessionId}`);
                } else {
                    logger.warn(`Found ${set.size} listeners for ${sessionId}`);
                    set.forEach((fn) => fn({ from: "agent", text: ev.text, ts: ev.ts }));
                }
            }
        }
    }

    // 4) Acknowledge fast
    return new Response("ok", { status: 200 });
}

export async function GET() {
    return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "POST" },
    });
}