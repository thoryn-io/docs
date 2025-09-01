import {PropsWithChildren} from "react";

type DescriptionCardProps = {
    description: string;
    icon: React.ElementType; // 👈 this lets you pass any icon component
};

export default function TextCard({
                                     description,
                                     icon: Icon,
                                 }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <div className="text-body flex flex-row flex-nowrap items-center gap-4 p-4 xl:ms-0">
            <div
                className="hidden p-2 h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12 xl:flex">

                <Icon/>
            </div>
            <p className="xl:text-sm">{description}</p></div>
    );
}