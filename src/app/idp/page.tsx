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
                    title="IdP — One trusted identity, everywhere"
                    subTitle="Our Identity Provider is your single source of truth for authentication and federation. Centralize users, policies, and sessions to deliver seamless SSO across apps and partners — secure, compliant, and worry-free."
                />

                <ContentWithImageSection
                    heading="Why an IdP?"
                    content={
                        <>
                            <p>
                                With a dedicated IdP, identity becomes a strength, not a bottleneck. Compliance is built in from the
                                start, helping you stay ahead of regulations like GDPR while reducing operational risk. Authentication,
                                MFA, and session management are handled centrally with proven practices — giving users and businesses
                                confidence that identities and data are protected.
                            </p>

                            <p>
                                As your ecosystem grows, the IdP scales with you. Add apps, directories, and partner federations
                                without re-engineering your foundations. From modern sign-in (passkeys, WebAuthn) to legacy federation
                                (SAML) and standards like OIDC, the IdP adapts to whatever your future requires.
                            </p>

                            <p>
                                Put simply, the IdP makes secure access simple, compliant, and built for growth — so you can focus on
                                delivering value while we handle the heavy lifting of identity.
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
                                At the core is centralized authentication and SSO across all your applications and APIs. Instead of
                                managing scattered logins and brittle integrations, you gain one foundation to issue credentials,
                                enforce MFA, and maintain sessions at scale.
                            </p>
                            <p>
                                Onboarding apps and directories is fast and straightforward, with minimal configuration required.
                                Connect OIDC and SAML clients, sync users from external sources, and keep everything aligned under a
                                single, secure identity layer.
                            </p>
                        </>
                    }
                    right={
                        <>
                            <p>
                                Access is governed by granular policies aligned to compliance frameworks. Whether you operate under
                                GDPR, financial regulations, or industry standards, the IdP ensures every authentication and
                                authorization decision is secure and auditable.
                            </p>
                            <p>
                                For advanced needs, enable progressive trust, adaptive MFA, passkeys/WebAuthn, just-in-time user
                                provisioning, and seamless federation with SAML and OIDC. Because no two ecosystems are the same, the
                                platform evolves with your business.
                            </p>
                        </>
                    }
                />

                <ImageSectionDark
                    heading="Simple Integration, Secure Growth"
                    content={
                        <>
                            <p>
                                Integrate once, sign in everywhere. Connect apps and partners with ease, and let the IdP handle secure
                                authentication, session lifecycle, and federation handshakes. Users enjoy frictionless access; teams
                                avoid custom glue code.
                            </p>
                            <p>
                                From there, centralized policies keep compliance simple and security consistent. As you scale, the IdP
                                scales with you — no re-engineering required — so you can focus on innovation instead of identity
                                plumbing.
                            </p>
                        </>
                    }
                    imageURL="/1646x1600.png"
                    cta={{ href: "/about/contact", text: "Contact us" }}
                />

                <Header2Section title="Trusted identity, empowering people and businesses" />
                <ImageSection imageURL="/img/pexels/pexels-quang-nguyen-vinh-222549-2176593-small.png"/>
            </main>
        </>
    );
}