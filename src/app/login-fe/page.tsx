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
                    title="Login FE — Custom IdP Frontend, your brand first"
                    subTitle="A fully customizable, secure front-end for your Identity Provider. Ship beautiful, on-brand login, registration, and recovery flows without rebuilding core auth. Built for accessibility, performance, and trust — compatible with passkeys, MFA, and your design system."
                />

                <ContentWithImageSection
                    heading="Why Login FE?"
                    content={
                        <>
                            <p>
                                Authentication shouldn’t force design compromises. Login FE gives you full visual control — typography,
                                color, spacing, states — while preserving security best practices out of the box. Keep your CX
                                consistent and your users confident from the very first pixel.
                            </p>

                            <p>
                                Developers get a component-driven toolkit that drops into modern stacks (Next.js, React, Web
                                Components), supports i18n, RTL, and dynamic content, and integrates cleanly with your IdP policies and
                                sessions. From passkeys/WebAuthn to step-up MFA and device trust, it scales with your roadmap instead of
                                blocking it.
                            </p>

                            <p>
                                Put simply, Login FE lets you deliver a premium, compliant sign-in experience — fast — while we handle
                                the heavy lifting of secure UX, edge cases, and orchestration.
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
                                <strong>Design-first components.</strong> Theme with tokens, CSS variables, or Tailwind; align with your
                                brand and DS primitives. All common states covered: loading, errors, validation, rate-limit banners,
                                recovery hints, and contextual help.
                            </p>
                            <p>
                                <strong>International by default.</strong> i18n/locale packs, pluralization, RTL support, and date/number
                                formatting. Content slots to localize legal copy, consent, and progressive disclosure.
                            </p>
                        </>
                    }
                    right={
                        <>
                            <p>
                                <strong>Secure by design.</strong> Passkeys/WebAuthn, TOTP/SMS/Email MFA, CSRF protection, anti-automation
                                hooks, device trust prompts, and privacy-by-default telemetry. Works with adaptive/step-up policies from
                                your IdP.
                            </p>
                            <p>
                                <strong>Headless or prebuilt.</strong> Use our headless hooks for full control or drop in pre-styled
                                widgets. Analytics events, A/B test IDs, and audit breadcrumbs included for product and compliance teams.
                            </p>
                        </>
                    }
                />

                <ImageSectionDark
                    heading="Simple Integration, Branded Results"
                    content={
                        <>
                            <p>
                                Install via npm and mount in minutes. Works SSR/CSR with Next.js, supports route-based flows (login,
                                signup, recovery, verify email/phone), and exposes lifecycle callbacks for telemetry and risk engines.
                            </p>
                            <p>
                                Update copy, fields, and steps with config — not rewrites. As requirements evolve, adjust policies in the
                                IdP and the UI adapts automatically. No re-engineering, no visual drift.
                            </p>
                        </>
                    }
                    imageURL="/1646x1600.png"
                    cta={{ href: "/about/contact", text: "Contact us" }}
                />

                <Header2Section title="Trusted identity, in your own look & feel" />
                <ImageSection imageURL="/img/pexels/pexels-quang-nguyen-vinh-222549-2176593-small.png"/>
            </main>
        </>
    );
}