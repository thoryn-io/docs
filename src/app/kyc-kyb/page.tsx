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
                    title="KYC/KYB — Fast, compliant verification"
                    subTitle="Our KYC/KYB module streamlines identity and business verification end-to-end. From document capture and liveness to registry lookups and sanctions screening, it centralizes compliance so you can onboard customers and partners quickly, securely, and with confidence."
                />

                <ContentWithImageSection
                    heading="Why KYC/KYB?"
                    content={
                        <>
                            <p>
                                Verification shouldn’t slow your growth. With our KYC/KYB module, onboarding becomes fast and
                                friction-light while keeping compliance front and center. Built-in controls for GDPR, AML/CFT, and
                                financial regulations reduce operational risk and make audits straightforward.
                            </p>

                            <p>
                                As your ecosystem expands, the module scales with you. Add new markets, products, or partner channels
                                without re-engineering your flows. From progressive trust and adaptive step-ups to ongoing monitoring,
                                the verification stack adapts as risk and requirements evolve.
                            </p>

                            <p>
                                Put simply, our KYC/KYB module makes verification simple, compliant, and built for growth — so you can
                                focus on customer experience while we handle the heavy lifting of compliance.
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
                                End-to-end identity and business verification with minimal configuration: document capture, OCR, and
                                liveness for KYC; registry lookups, UBO discovery, and company data enrichment for KYB. Plug into major
                                data sources with a single API and unify decisioning across channels.
                            </p>
                            <p>
                                Onboarding flows are configurable and developer-friendly. Define steps per risk tier, jurisdiction, or
                                product line, and ship changes rapidly without breaking existing integrations — all aligned to a single,
                                secure policy layer.
                            </p>
                        </>
                    }
                    right={
                        <>
                            <p>
                                Granular policies and audit-ready trails keep you aligned with AML/CFT, GDPR, and industry standards.
                                Run sanctions/PEP screening, adverse media checks, and ongoing monitoring with clear outcomes, reasons,
                                and evidence preserved for reviewers.
                            </p>
                            <p>
                                Advanced capabilities include progressive trust, adaptive step-ups, device and fraud signals, and
                                webhook/case-management integrations. Because no two ecosystems are the same, the module evolves with
                                your business and regulatory landscape.
                            </p>
                        </>
                    }
                />

                <ImageSectionDark
                    heading="Simple Integration, Compliant Growth"
                    content={
                        <>
                            <p>
                                Integrate once and verify everywhere. Use our APIs and web components to launch friction-light KYC/KYB
                                with secure capture, orchestration, and decisioning. Your users move forward quickly; your teams avoid
                                custom glue code and fragmented tools.
                            </p>
                            <p>
                                Centralized policies keep compliance consistent while you scale into new markets. As requirements
                                change, update workflows and data sources — no re-engineering required — and keep innovation moving
                                without compromising on trust.
                            </p>
                        </>
                    }
                    imageURL="/1646x1600.png"
                    cta={{ href: "/about/contact", text: "Contact us" }}
                />

                <Header2Section title="Trusted verification, empowering people and businesses" />
                <ImageSection imageURL="/3018x786.png" />
            </main>
        </>
    );
}