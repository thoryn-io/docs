import {PropsWithChildren} from "react";
import {CallToActionLink, SecondaryCallToActionLink} from "@/components/Heros/types";

type DescriptionCardProps = {
    title: string;
    subTitle: string;
    primaryButton?: CallToActionLink;
    secondaryButton?: SecondaryCallToActionLink;
};

export default function BasicHero({
                                      title,
                                      subTitle,
                                      primaryButton: PrimaryButton,
                                      secondaryButton: SecondaryButton
                                  }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <div
            className="pb-24 md:pb-32 xl:pb-44 px-4 md:px-8 xl:px-16 bg-gradient-to-b from-0% from-purple-25 to-100% to-white"
            id="hero">
            <div className="max-w-6xl mx-auto">
                <div className="">
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-center text-center">
                            <div className="space-y-2"><h1
                                className="lg:text-7xl text-5xl text-purple-800 font-serif">{title}</h1>
                            </div>
                            <div className="lg:text-2xl text-base text-purple-800 font-sans rich-text">
                                {subTitle}
                            </div>

                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {PrimaryButton}
                                    {SecondaryButton}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}