import BasicHero from "@/components/Heros/BasicHero";
import Header2Section from "../components/Sections/Header2Section";
import ButtonLink from "@/components/Links/ButtonLink";
import OutlineButtonLink from "@/components/Links/OutlineButtonLink";
import Header3Section from "@/components/Sections/Header3Section";
import SplitSection from "@/components/Sections/SplitSection";
import ImageContentSection from "../components/Sections/ImageContentSection";
import ImageSectionDark from "@/components/Sections/ImageSectionDark";
import EcoSystemSection from "@/components/Sections/EcoSystemSection";
import ProductSection from "@/components/Sections/ProductSection";

export default function Home() {
    return (
        <>
            <main>
                <EcoSystemSection items={
                    [
                        {
                            text: "Oauth-hub",
                            imageHref: "/img/products/oauth_hub_icon_32x32.png"
                        },
                        {
                            text: "SAML-hub",
                            imageHref: "/img/products/saml_hub_icon_32x32.png"
                        },
                        {
                            text: "IdP",
                            imageHref: "/img/products/idp_icon_32x32.png"
                        },
                        {
                            text: "KYC/KYB",
                            imageHref: "/img/products/kyc_kyb_icon_32x32.png"
                        },
                        {
                            text: "Login FE",
                            imageHref: "/img/products/login_fe_icon_32x32.png"
                        },
                    ]}/>
                <BasicHero
                    title="Worry free IAM and KYB solutions"
                    subTitle="Figuring out al the complexity and compliance for IAM and KYB is stressful and easy to mess up. Get the battle tested solution and benefit from industry lessons."
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
                <ProductSection items={[
                    {
                        header: "Oauth-hub",
                        text: "OAuth Hub: Simple, secure, compliant access",
                        iconHref: "/img/products/oauth_hub_icon_32x32.png",
                        imageHref: "/img/products/oauth_hub_bg_1000x1200.png",
                        href: "/oauth"
                    },
                    {
                        header: "SAML-hub",
                        text: "SAML Hub: Seamless, secure, and compliant federation",
                        iconHref: "/img/products/saml_hub_icon_32x32.png",
                        imageHref: "/img/products/saml_hub_bg_1000x1200.png",
                        href: "/saml"
                    },
                    {
                        header: "IdP",
                        text: "IdP: Your trusted identity provider for secure, compliant access",
                        iconHref: "/img/products/idp_icon_32x32.png",
                        imageHref: "/img/products/idp_bg_1000x1200.png",
                        href: "/idp"
                    },
                    {
                        header: "KYC/KYB",
                        text: "KYC/KYB: Fast, compliant verification for users and businesses",
                        iconHref: "/img/products/kyc_kyb_icon_32x32.png",
                        imageHref: "/img/products/kyc_kyb_bg_1000x1200.png",
                        href: "/kyc-kyb"
                    },
                    {
                        header: "Login FE",
                        text: "Login FE: A seamless, secure front-end experience for user authentication",
                        iconHref: "/img/products/login_fe_icon_32x32.png",
                        imageHref: "/img/products/login_fe_bg_1000x1200.png",
                        href: "/login-fe"
                    }]}/>
                <Header2Section
                    title="Stop wasting time reinventing IAM & KYB. Let us show you how simple, secure, and scalable it can be."
                    primaryButton={
                        <ButtonLink
                            href="#"
                            label="Book a demo"
                        />}
                />
                <ImageContentSection
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
                <ImageSectionDark
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
