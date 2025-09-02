import {PropsWithChildren} from "react";

type DescriptionCardProps = {
    href: string;
    label: string;
};

export default function OutlineButtonLink({
                                            href,
                                            label,
                                        }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <a href={href} aria-disabled="false"
           className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-colors duration-150 ease-out text-purple-500 shadow-purple-500 ring-purple-800 ring-offset-white hover:bg-purple-700 hover:text-white bg-transparent shadow-[inset_0_0_0_2px] no-underline hocus:shadow-transparent ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-3 px-5 text-base gap-2 max-sm:w-full">
            {label}
        </a>
    );
}