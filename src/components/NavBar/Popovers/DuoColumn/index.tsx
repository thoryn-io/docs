import {PropsWithChildren, ReactElement} from "react";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {HomeIcon, ShieldCheckIcon, ArrowsRightLeftIcon} from "@heroicons/react/24/outline";
import {TextCard} from "@/components/NavBar/Cards";
import {AllowedCards} from "@/components/NavBar/Popovers/types";


type SingleColumnProps = {
    label: string;
    cardsLeft: AllowedCards[]; // ✅ only DescriptionCard[]
    cardsRight: AllowedCards[]; // ✅ only DescriptionCard[]
};


export default function DuoColumn({
                                         label, cardsLeft, cardsRight
                                     }: PropsWithChildren<SingleColumnProps>) {
    return (
        <Popover
            className="relative"
        >
            <PopoverButton
                as="button"
                className="flex items-center gap-1 font-semibold cursor-pointer hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500 text-base">{label}</PopoverButton>
            <PopoverBackdrop className="z-over fixed inset-0 bg-black/15" />
            <PopoverPanel anchor="top start"
                          className="z-50 border-0 shadow-s mt-4 max-h-[calc(100vh-6rem)] transform overflow-y-auto bg-white ring-0 ring-black ring-opacity-5 absolute rounded-xl start-0 -ms-10 max-w-xs w-160">
                <div
                    className="-ms-4 gap-12 from-transparent from-50% to-gray-50 to-50% py-6 xl:ms-0 xl:grid xl:grid-cols-2 xl:items-stretch xl:bg-gradient-to-r xl:px-6">
                    <div>
                        {cardsLeft.map((card, i) => (
                            <div key={i}>{card}</div>
                        ))}
                    </div>
                    <div>
                        {cardsRight.map((card, i) => (
                            <div key={i}>{card}</div>
                        ))}

                    </div>
                </div>

            </PopoverPanel>
        </Popover>

    )
}
