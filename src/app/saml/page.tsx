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
                    title="OAuth Hub Secure access, simplified"
                    subTitle="OAuth Hub is your identity backbone — the central place where all your authentication and authorization flows come together. Built on battle-tested standards like OAuth2 and OpenID Connect, it makes managing access across apps, APIs, and partners seamless, compliant, and worry-free."
                />

                <ContentWithImageSection
                    heading="Why OAuth Hub?"
                    content={<><p>With OAuth Hub, access management becomes worry-free. Compliance is baked in from the
                        start, helping you stay ahead of regulations like GDPR while reducing operational risk. Security
                        is handled centrally through proven token and session management, giving both users and
                        businesses the confidence that data and identities are protected.</p>

                        <p>As your ecosystem expands, OAuth Hub scales with you. Adding new apps, services, or partners
                            is seamless, with no need to re-engineer your foundations. From advanced features like PAR
                            and token exchange to progressive trust and KYB integration, OAuth Hub adapts to whatever
                            your future requires.</p>

                        <p>Put simply, OAuth Hub makes secure access simple, compliant, and built for growth — so you
                            can focus on delivering value, while we handle the heavy lifting of identity.</p>
                    </>}
                    imageURL="/1646x1600.png"
                    imageLocation="left"
                />
                <ImageSection
                    imageURL="/3072x1397.png"
                />
                <Header2Section title="Key Features"/>
                <SplitSection left={
                    <>
                        <p>At the core of OAuth Hub is a centralized token service that simplifies OAuth2 and OpenID
                            Connect,
                            ensuring secure and reliable access across all your applications and APIs. Instead of
                            managing
                            scattered integrations, you get one foundation to handle authentication and authorization at
                            scale.
                        </p>
                        <p>
                            Onboarding new clients and APIs is fast and straightforward, with minimal configuration
                            required.
                            This makes it easier for teams to connect services without delays or heavy technical
                            overhead,
                            while
                            keeping everything aligned under a single, secure identity layer.
                        </p>
                    </>
                } right={<>
                    <p>
                        Access is controlled through granular policies that are designed to meet modern compliance
                        frameworks. Whether you’re working under GDPR, financial regulations, or industry-specific
                        requirements, OAuth Hub ensures that every access decision is both secure and compliant.
                    </p>
                    <p>
                        For organizations with advanced needs, OAuth Hub supports features such as PAR, JAR, RAR, and
                        token
                        exchange, making it fully compatible with next-generation authorization flows. And because no
                        two
                        ecosystems are the same, the platform offers modular add-ons like progressive trust, KYB, and
                        passkeys, so you can adapt the solution to your business as it evolves.
                    </p></>}/>

                <ImageSectionDark
                    heading="Simple Integration, Secure Growth"
                    content={<>
                        <p>
                            OAuth Hub makes integration effortless. Connect your apps, APIs, and partners with ease, and
                            let the platform manage authentication through trusted OAuth2 and OIDC standards. Users and
                            services log in securely, while your team avoids the overhead of complex setups.
                        </p>
                        <p>
                            From there, access is authorized with centralized policies that keep compliance simple and
                            security consistent. As your business grows, OAuth Hub grows with you — scaling seamlessly
                            without re-engineering, so you can focus on innovation instead of identity plumbing.
                        </p>
                    </>}
                    imageURL="/1646x1600.png"
                    cta={
                        {href: "/about/contact", text: "Contact us"}
                    }
                />
                <Header2Section
                    title="Trusted identity, empowering people and businesses"
                />
                <ImageSection
                    imageURL="/3018x786.png"
                />
            </main>
        </>
    );
}
