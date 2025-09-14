import Image from "next/image";
import BasicHero from "@/components/Heros/BasicHero";
import Header2Section from "../components/Sections/Header2Section";
import ButtonLink from "@/components/Links/ButtonLink";
import OutlineButtonLink from "@/components/Links/OutlineButtonLink";
import Header3Section from "@/components/Sections/Header3Section";
import SplitSection from "@/components/Sections/SplitSection";

export default function Home() {
    return (
        <>
            <main>

                <BasicHero
                    title="Worry Free and modular approach to IAM & KYB"
                    subTitle="Solving IAM can be a hassle. Lots of detail and regulation compliance to deal with. Get the battle tested solution."
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
                <Header3Section
                    title="Worry-Free, Modular IAM & KYB"
                />
                <SplitSection

                />
                <Header2Section
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
