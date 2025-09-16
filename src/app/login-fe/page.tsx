import Header2Section from "@/components/Sections/Header2Section";
import BasicHeroWithoutImage from "@/components/Heros/BasicHeroWithoutImage";
import ContentWithImageSection from "@/components/Sections/ContentWithImageSection";
import ImageSection from "@/components/Sections/ImageSection";

export default function Home() {
    return (
        <>
            <main>
                <BasicHeroWithoutImage
                    title="We believe a safer digital world starts with trust and secure identity"
                    subTitle="Our platform was created to take the complexity out of IAM and KYB,
                    giving businesses a foundation where privacy, compliance, and security are
                    built in from the start. Born from the need for a better way to manage digital
                    identity, we designed a modular system that makes trust effortless and scalable."
                />
                <ContentWithImageSection
                    heading="It started with digital identity"
                    content={<p>From the moment businesses moved online, verifying who someone is has been essential.
                        But too often, that process comes at the expense of privacy, trust, and user experience.
                        Companies collect vast amounts of personal data, not always to protect users but to fuel
                        business models that put profit first. In some regions, this data is even misused by authorities
                        to restrict freedoms and limit opportunity.</p>}
                    imageURL="/1646x1600.png"
                    imageLocation="left"
                />
                <ContentWithImageSection
                    heading="We created our platform to provide an alternative"
                    content={<>
                        <p>Thowyn was born from the need to build a digital ecosystem that puts trust before complexity, and
                            security before profit. Our goal is to give businesses and users control over their digital
                            identities, while making compliance and verification seamless.</p>
                        <p>In this new model, you can onboard customers and businesses with confidence, protect data and
                            identity without friction, stay compliant without compromise, and safeguard against misuse
                            or cybercrime — all through a foundation of secure, modular IAM and KYB.</p>
                    </>}
                    imageURL="/1646x1600.png"
                    imageLocation="right"
                />
                <Header2Section
                    title="Identity for the people, powered by trust."
                />
                <ImageSection
                    imageURL="/3018x786.png"
                />
            </main>
        </>
    );
}
