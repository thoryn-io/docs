import type {NextApiRequest, NextApiResponse} from "next";
import {WebClient} from "@slack/web-api";
import {sendMessage} from "@/lib/chat";

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
        return;
    }


    const {text} = req.body ?? {};
    if (!text) {
        res.status(400).end("Missing text");
        return;
    }

    await sendMessage(text)

    res.status(200).end("ok");
}