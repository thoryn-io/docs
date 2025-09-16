import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { LeadMemory } from "../leads/session";

/** Disable body parsing: we need the raw body to verify Slack signatures */
export const config = {
    api: { bodyParser: false },
};

function getRawBody(req: NextApiRequest): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        req.on("data", (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
        req.on("end", () => resolve(Buffer.concat(chunks)));
        req.on("error", reject);
    });
}

function verifySlackSignature(req: NextApiRequest, rawBody: Buffer): boolean {
    const timestamp = req.headers["x-slack-request-timestamp"] as string;
    const signature = req.headers["x-slack-signature"] as string;
    if (!timestamp || !signature) return false;

    const basestring = `v0:${timestamp}:${rawBody.toString("utf8")}`;
    const hmac = crypto
        .createHmac("sha256", process.env.SLACK_SIGNING_SECRET as string)
        .update(basestring)
        .digest("hex");
    const expected = `v0=${hmac}`;
    try {
        return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    } catch {
        return false;
    }
}

/** Simple in-memory subscribers for SSE (MVP) */
type Listener = (payload: any) => void;
export const Subscribers = new Map<string, Set<Listener>>();

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }

    const raw = await getRawBody(req);

    // 1) URL verification (no signature needed by Slack, but safe either way)
    try {
        const probe = JSON.parse(raw.toString("utf8"));
        if (probe.type === "url_verification" && probe.challenge) {
            res.setHeader("Content-Type", "text/plain");
            res.status(200).send(probe.challenge); // plaintext
            return;
        }
    } catch {
        // fallthrough
    }

    // 2) Verify signatures for real events
    if (!verifySlackSignature(req, raw)) {
        res.status(401).end("Bad signature");
        return;
    }

    const body = JSON.parse(raw.toString("utf8"));
    const ev = body.event;

    // Only process regular user messages in threads inside your leads channel
    if (
        ev?.type === "message" &&
        ev.subtype == null &&
        ev.thread_ts &&
        ev.channel === process.env.SLACK_LEADS_CHANNEL_ID
    ) {
        const sessionId = LeadMemory.reverse.get(ev.thread_ts);
        if (sessionId) {
            // Relay only Slack user messages (skip your bot echoes)
            const fromAgent = !!ev.user && !ev.bot_id;
            if (fromAgent) {
                const set = Subscribers.get(sessionId);
                if (set) set.forEach((fn) => fn({ from: "agent", text: ev.text, ts: ev.ts }));
            }
        }
    }

    // Acknowledge fast
    res.status(200).end("ok");
}