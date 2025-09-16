import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return; // <- return void, not the response object
    }
    const { type, challenge } = req.body || {};

    if (type === "url_verification" && challenge) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(challenge);
    }

    // Acknowledge other events quickly
    return res.status(200).send("ok");
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") return res.status(405).end();
//
//     const { type, challenge } = req.body || {};
//
//     if (type === "url_verification" && challenge) {
//         res.setHeader("Content-Type", "text/plain");
//         return res.status(200).send(challenge);
//     }
//
//     // Acknowledge other events quickly
//     return res.status(200).send("ok");
// }