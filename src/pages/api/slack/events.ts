import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        // If you implement signature verification later, set bodyParser:false
        // to access the raw body. For just URL verification, default is fine.
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).end();

    const { type, challenge } = req.body || {};

    if (type === "url_verification" && challenge) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(challenge);
    }

    // Acknowledge other events quickly
    return res.status(200).send("ok");
}