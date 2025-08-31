import {PropsWithChildren} from "react";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {HomeIcon, ShieldCheckIcon, ArrowsRightLeftIcon} from "@heroicons/react/24/outline";

type SingleColumnProps = {
    label: string;
};


export default function SingleColumn({
                                         label
                                     }: PropsWithChildren<SingleColumnProps>) {
    return (
        <Popover
            className="relative"
        >
            <PopoverButton
                as="a"
                className="flex items-center gap-1 font-semibold hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500 text-base">{label}</PopoverButton>
            <PopoverBackdrop className="z-over fixed inset-0 bg-black/15" />
            <PopoverPanel anchor="top start"
                          className="z-50 border-0 shadow-s mt-4 max-h-[calc(100vh-6rem)] transform overflow-y-auto bg-white ring-0 ring-black ring-opacity-5 absolute rounded-xl start-0 -ms-10 max-w-xs w-80">
                <div
                    className="-ms-2 space-y-3 py-5 xl:ms-0 xl:grid xl:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] xl:space-y-0 xl:p-6">
                    <DescriptionCard
                        href="/overview"
                        label="Overview"
                        description="Authorization you can trust, with privacy at its core."
                        icon={HomeIcon}
                    />
                    <DescriptionCard
                        href="/security"
                        label="Security"
                        description="Privacy that puts security first."
                        icon={ShieldCheckIcon}
                    />
                    <DescriptionCard
                        href="/kyc-kyb"
                        label="Know your Business"
                        description="Business onboarding that puts compliance first."
                        icon={ArrowsRightLeftIcon}
                    />
                </div>

            </PopoverPanel>
        </Popover>

    )
}
