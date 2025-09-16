import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { LeadMemory } from "../leads/session";

/** Streaming/raw body needed for Slack signature verification */
export const config = { api: { bodyParser: false } } as const;

/* ========= Types ========= */

type SlackUrlVerification = {
    type: "url_verification";
    challenge: string;
    token?: string;
};

type SlackEventEnvelope<T = unknown> = {
    token?: string;
    team_id?: string;
    api_app_id?: string;
    type: "event_callback";
    event: T;
    event_id?: string;
    event_time?: number;
};

type SlackMessageEvent = {
    type: "message";
    channel: string;
    user?: string;
    bot_id?: string;
    text?: string;
    thread_ts?: string;
    subtype?: string; // undefined for normal user messages
};

/** Listener type for SSE relays */
type Listener = (payload: { from: "agent"; text?: string; ts?: string }) => void;

/** Simple in-memory subscribers for SSE (MVP only) */
export const Subscribers = new Map<string, Set<Listener>>();

/* ========= Utils ========= */

function getRawBody(req: NextApiRequest): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        req.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
        req.on("end", () => resolve(Buffer.concat(chunks)));
        req.on("error", reject);
    });
}

function getHeader(req: NextApiRequest, name: string): string | undefined {
    const h = req.headers[name.toLowerCase()];
    if (!h) return undefined;
    return Array.isArray(h) ? h[0] : h;
}

function verifySlackSignature(req: NextApiRequest, rawBody: Buffer): boolean {
    const timestamp = getHeader(req, "x-slack-request-timestamp");
    const signature = getHeader(req, "x-slack-signature");
    const signingSecret = process.env.SLACK_SIGNING_SECRET;

    if (!timestamp || !signature || !signingSecret) return false;

    // Optional: prevent replay attacks (5 min window)
    const fiveMinutes = 60 * 5;
    const skew = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
    if (Number.isFinite(skew) && skew > fiveMinutes) return false;

    const basestring = `v0:${timestamp}:${rawBody.toString("utf8")}`;
    const hmac = crypto.createHmac("sha256", signingSecret).update(basestring).digest("hex");
    const expected = `v0=${hmac}`;

    try {
        return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    } catch {
        return false;
    }
}

function getSubscribers(sessionId: string): Set<Listener> {
    let set = Subscribers.get(sessionId);
    if (!set) {
        set = new Set<Listener>();
        Subscribers.set(sessionId, set);
    }
    return set;
}

/* ========= Handler ========= */

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const raw = await getRawBody(req);
    const text = raw.toString("utf8");

    // 1) Handle Slack URL verification (no signature required by Slack, safe to short-circuit)
    try {
        const probe = JSON.parse(text) as SlackUrlVerification | SlackEventEnvelope;
        if ((probe as SlackUrlVerification).type === "url_verification") {
            const { challenge } = probe as SlackUrlVerification;
            if (challenge) {
                res.setHeader("Content-Type", "text/plain");
                res.status(200).send(challenge); // plaintext echo
                return;
            }
        }
    } catch {
        // fall through to signature verification / error
    }

    // 2) Verify signature for real events
    if (!verifySlackSignature(req, raw)) {
        res.status(401).end("Bad signature");
        return;
    }

    // 3) Parse the event
    let envelope: SlackEventEnvelope<SlackMessageEvent>;
    try {
        envelope = JSON.parse(text) as SlackEventEnvelope<SlackMessageEvent>;
    } catch {
        res.status(400).end("Invalid JSON");
        return;
    }

    const ev = envelope.event;

    // 4) Only process regular user messages in threads inside the configured leads channel
    const leadsChannel = process.env.SLACK_LEADS_CHANNEL_ID;
    if (
        ev?.type === "message" &&
        !ev.subtype &&
        typeof ev.thread_ts === "string" &&
        ev.channel === leadsChannel
    ) {
        const sessionId = LeadMemory.reverse.get(ev.thread_ts);
        if (sessionId) {
            const fromAgent = Boolean(ev.user) && !ev.bot_id; // only human replies
            if (fromAgent) {
                const subs = getSubscribers(sessionId);
                const payload = { from: "agent" as const, text: ev.text, ts: ev.thread_ts ?? undefined };
                subs.forEach((fn) => fn(payload));
            }
        }
    }

    // 5) Ack quickly
    res.status(200).end("ok");
}