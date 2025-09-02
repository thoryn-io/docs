import {PropsWithChildren} from "react";

type DescriptionCardProps = {
    title: string;
};

export default function Header3Section({
                                           title,
                                       }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <div className="pb-4 md:pb-8 xl:pb-12 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="">
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="space-y-2">
                                <h3
                                    className="lg:text-5xl text-3xl text-purple-800 font-serif">
                                    {title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}