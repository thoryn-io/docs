import BasicHeroWithoutImage from "@/components/Heros/BasicHeroWithoutImage";
import { cookies, headers } from "next/headers";
const PASS_HDR = "x-csrf-provisioned"; // internal header for this request only
const KEY = "__host.csrf";

export default async function ContactPage() {
    const h = await headers();
    const fromHeader = h.get(PASS_HDR);
    const fromCookie = (await cookies()).get(KEY)?.value;
    const csrfToken = fromHeader ?? fromCookie ?? ""; // header wins on first request    return (
    return (
        <>
            <main>
                <BasicHeroWithoutImage
                    title="CSRF"
                    subTitle={csrfToken}
                />
            </main>
        </>
    );
}
