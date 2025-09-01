import {PropsWithChildren} from "react";

type DescriptionCardProps = {
    href: string;
    label: string;
    description?: string;
    icon?: React.ElementType; // 👈 this lets you pass any icon component
};

export default function DescriptionCard({
                                            href,
                                            label,
                                            description,
                                            icon: Icon,
                                        }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <a
            href={href}
            className="block rounded-lg p-4 hover:text-purple-500 focus-visible:text-purple-500 hover:bg-purple-25 focus-visible:bg-purple-25"
        >
            <div className="flex items-center justify-start gap-2">
                {Icon != undefined && <>
                        <div
                            className="flex-none shrink-0 rounded-[25%] bg-white p-2 shadow-[0_0_0_1px_rgb(0_0_0_/_0.1)]">
                            <div
                                className="flex shrink-0 items-center justify-center w-5 h-5 [&_svg]:h-full [&_svg]:w-full">
                                <Icon/>
                            </div>
                        </div>
                    </>
                }

                <div className="text-base font-semibold">{label}</div>
            </div>
            {description !== undefined && <>
                <p className="text-body mt-2 text-sm">{description}</p>
            </>}
        </a>
    );
}