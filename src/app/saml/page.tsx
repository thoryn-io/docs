import Header2Section from "@/components/Sections/Header2Section";
import BasicHeroWithoutImage from "@/components/Heros/BasicHeroWithoutImage";
import ContentWithImageSection from "@/components/Sections/ContentWithImageSection";
import ImageSection from "@/components/Sections/ImageSection";
import SplitSection from "@/components/Sections/SplitSection";
import ImageSectionDark from "@/components/Sections/ImageSectionDark";

export default function Home() {
    return (
        <>
            <main>
                <BasicHeroWithoutImage
                    title="SAML Hub Federation made simple"
                    subTitle="SAML Hub is your bridge to secure, standards-based federation. Built to connect legacy systems and modern applications alike, it centralizes identity management and makes SAML integration seamless, compliant, and worry-free."
                />

                <ContentWithImageSection
                    heading="Why SAML Hub?"
                    content={
                        <>
                            <p>
                                With SAML Hub, identity federation becomes effortless. Compliance is built in from the
                                ground up, helping you meet regulatory requirements while reducing operational risk.
                                Security is handled centrally through proven assertions and policies, giving both users
                                and businesses confidence that data and identities are protected.
                            </p>

                            <p>
                                As your ecosystem expands, SAML Hub scales alongside it. Adding new partners, cloud
                                services, or on-prem systems is seamless, with no need to re-engineer your foundations.
                                Whether you’re bridging older infrastructure or integrating new platforms, SAML Hub adapts
                                to your needs.
                            </p>

                            <p>
                                Put simply, SAML Hub makes federation simple, compliant, and built for growth — so you can
                                focus on delivering value while we handle the heavy lifting of identity integration.
                            </p>
                        </>
                    }
                    imageURL="/1646x1600.png"
                    imageLocation="left"
                />

                <ImageSection imageURL="/3072x1397.png" />

                <Header2Section title="Key Features" />
                <SplitSection
                    left={
                        <>
                            <p>
                                At the core of SAML Hub is a centralized federation service that simplifies secure
                                integration across your applications and partners. Instead of managing scattered and
                                brittle connections, you gain one foundation to handle SAML assertions and trust at scale.
                            </p>
                            <p>
                                Onboarding new partners and applications is fast and straightforward, with minimal
                                configuration required. This reduces complexity for your teams and keeps all connections
                                aligned under a single, secure identity layer.
                            </p>
                        </>
                    }
                    right={
                        <>
                            <p>
                                Access is enforced through granular policies that align with compliance frameworks. Whether
                                you operate under GDPR, financial regulations, or industry-specific standards, SAML Hub
                                ensures that every federation exchange is both secure and compliant.
                            </p>
                            <p>
                                For organizations modernizing their ecosystems, SAML Hub bridges the gap between legacy
                                systems and modern identity solutions. Combined with modular add-ons like progressive trust
                                and passkeys, it evolves with your business and secures the path to the future.
                            </p>
                        </>
                    }
                />

                <ImageSectionDark
                    heading="Seamless Federation, Lasting Trust"
                    content={
                        <>
                            <p>
                                SAML Hub makes integration painless. Connect legacy apps, modern services, and external
                                partners with ease, and let the platform manage secure assertions and identity exchange.
                                Users gain smooth sign-on experiences, while your team avoids the overhead of complex,
                                custom setups.
                            </p>
                            <p>
                                From there, access is governed by centralized policies that keep compliance simple and
                                security consistent. As your business grows, SAML Hub scales with you — ensuring that trust
                                and federation never become bottlenecks.
                            </p>
                        </>
                    }
                    imageURL="/1646x1600.png"
                    cta={{ href: "/about/contact", text: "Contact us" }}
                />

                <Header2Section title="Trusted identity, empowering people and businesses" />
                <ImageSection imageURL="/3018x786.png" />
            </main>
        </>
    );
}