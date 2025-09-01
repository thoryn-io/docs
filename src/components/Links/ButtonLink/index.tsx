import {PropsWithChildren} from "react";

type DescriptionCardProps = {
    href: string;
    label: string;
};

export default function ButtonLink({
                                            href,
                                            label,
                                        }: PropsWithChildren<DescriptionCardProps>) {
    return (
        <a rel="noopener noreferrer"
           href={href}
           aria-disabled="false"
           className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-colors duration-150 ease-out bg-purple-500 text-white ring-purple-800 ring-offset-white hover:bg-purple-700 hover:text-white no-underline ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-3 px-5 text-base gap-2 max-sm:w-full">
            {label}
        </a>
    );
}