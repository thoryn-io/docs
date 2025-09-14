import { PropsWithChildren } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

type SingleColumnProps = {
    label: string;
};

export default function DrawerDisclosure({ label, children }: PropsWithChildren<SingleColumnProps>) {
    return (
        <Disclosure>
            <DisclosureButton
                as="button"
                className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-purple-800 outline-none hover:text-purple-500 focus-visible:text-purple-500"
            >
                {label}
                <ChevronRightIcon className="h-8 w-8" />
            </DisclosureButton>

            <DisclosurePanel
                transition
                // Drawer shell (right side), full height, flex column
                className="
          fixed inset-y-0 right-0 z-60 w-112 max-w-md bg-white
          flex flex-col
          origin-right transition duration-200 ease-out
          data-[closed]:translate-x-112
          p-0
          mt-12
          overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]
        "
            >
                {/* Header stays visible */}
                <div className="top-0 z-10 bg-white p-4 pl-8">
                    <DisclosureButton
                        as="button"
                        className="inline-flex items-center gap-2 text-lg text-purple-800"
                    >
                        <ArrowLeftIcon className="h-8 w-8" />
                        Back / <span className="text-gray-400">{label}</span>
                    </DisclosureButton>
                </div>

                {/* Scrollable content area */}
                <div
                    className="
            flex-1
            p-4 pl-8
          "
                >
                    <div className="xl:grid xl:grid-cols-[3fr_1fr] xl:gap-12">
                        {children}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}