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
                            label="Book a demo"
                        />}
                    secondaryButton={
                        <OutlineButtonLink
                            href="#"
                            label="Contact us"
                        />}
                />
                <Header3Section
                    title="Worry-Free, Modular IAM & KYB"
                />
                <SplitSection

                />
                <Header2Section
                    title="Stop wasting time reinventing IAM & KYB. Let us show you how simple, secure, and scalable it can be."
                    primaryButton={
                        <ButtonLink
                            href="#"
                            label="Book a demo"
                        />}
                />

            </main>
        </>
    );
}
