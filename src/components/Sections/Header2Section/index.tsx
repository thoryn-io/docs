import {PropsWithChildren} from "react";
import {CallToActionLink} from "@/components/Heros/types";

type DescriptionCardProps = {
    title: string;
    primaryButton?: CallToActionLink;
};

export default function Header2Section({
                                      title,
                                      primaryButton: PrimaryButton,
                                  }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <div className="pt-24 md:pt-32 xl:pt-44 pb-24 md:pb-32 xl:pb-44 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-full mx-auto pt-4 pb-4">
                <div className="max-w-4xl mx-auto">
                    <div className="">
                        <div className="">
                            <div className="flex flex-col items-stretch gap-y-8 items-center text-center">
                                <div className="space-y-2"><h2
                                    className="lg:text-6xl text-4xl text-purple-800 font-serif">{title}</h2></div>

                                <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {PrimaryButton}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}