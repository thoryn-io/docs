import BasicHero from "@/components/Heros/BasicHero";
import Header2Section from "../components/Sections/Header2Section";
import ButtonLink from "@/components/Links/ButtonLink";
import OutlineButtonLink from "@/components/Links/OutlineButtonLink";
import Header3Section from "@/components/Sections/Header3Section";
import SplitSection from "@/components/Sections/SplitSection";
import ImageSection from "@/components/Sections/ImageSection";

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
                    left={
                        <>
                            <p>Identity and access management should be a catalyst for growth, not a roadblock. In
                                practice, however, it often turns into friction — endless compliance requirements to
                                meet, security risks that evolve daily, and regulations that shift faster than most
                                teams can adapt. What begins as a technical necessity quickly drains resources and
                                focus. Building and maintaining IAM in-house isn’t just a hassle; it demands constant
                                investment, specialized expertise, and attention that pulls you away from your core
                                mission. Instead of empowering the business, it risks slowing you down and distracting
                                from what matters most: serving customers and driving growth.</p>
                        </>
                    }
                    right={<>
                        <p>That’s why we created a platform that takes the pain out of IAM and KYB.
                            Battle-tested in demanding environments, it’s built to give you confidence from day
                            one. With our modular approach, you only add what you need — whether that’s secure
                            authentication, progressive trust, or streamlined Know Your Business (KYB)
                            verification. The result? A future-proof identity foundation that adapts as you
                            scale, keeps you compliant without the headache, and protects both your users and
                            your reputation. All without the unnecessary overhead of doing it yourself.</p>
                    </>}
                />
                <Header2Section
                    title="Stop wasting time reinventing IAM & KYB. Let us show you how simple, secure, and scalable it can be."
                    primaryButton={
                        <ButtonLink
                            href="#"
                            label="Book a demo"
                        />}
                />
                <ImageSection
                    heading="Effortless Compliance, Built for Growth"
                    content={<>
                        <p>With our solution, you no longer need to wrestle with the constant pressure of
                            compliance or the complexity of ever-changing regulations. We make compliance
                            effortless and keep your business future-proof, so you can focus on delivering value
                            to your customers. Our modular, plug-and-play architecture ensures you can scale
                            seamlessly, adding or adjusting components as your needs evolve without disrupting
                            your existing systems.
                        </p>
                        <p>
                            Security is built in from the start, protecting both your users and your business with
                            battle-tested practices that have been proven in demanding environments. While we handle the
                            heavy lifting of IAM and KYB behind the scenes, you stay free to concentrate on what matters
                            most — driving growth and building trust.
                        </p>
                    </>}
                    imageURL="/850x750.png"
                    cta={
                        {href: "", text: "Contact us"}
                    }
                />
            </main>
        </>
    );
}
