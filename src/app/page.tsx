import Image from "next/image";
import BasicHero from "@/components/Heros/BasicHero";
import CallToActionSection from "@/components/Sections/CallToActionSection";
import ButtonLink from "@/components/Links/ButtonLink";
import OutlineButtonLink from "@/components/Links/OutlineButtonLink";

export default function Home() {
    return (
        <>
            <main>

                <BasicHero
                    title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    subTitle="Lorem ipsum dolor sit amet consectetur adipiscing elit quisque."
                    primaryButton={
                        <ButtonLink
                            href="#"
                            label="Create a free account"
                        />}
                    secondaryButton={
                        <OutlineButtonLink
                            href="#"
                            label="Create a free account"
                        />}
                />
                <CallToActionSection
                    title="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    primaryButton={
                        <ButtonLink
                            href="#"
                            label="Create a free account"
                        />}
                />

            </main>
            <footer className=" row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </>
    );
}
