import {PropsWithChildren, ReactElement} from "react";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import {AllowedCards} from "@/components/NavBar/Popovers/types";


type SingleColumnProps = {
    label: string;
    cardsLeft: AllowedCards[]; // ✅ only DescriptionCard[]
    cardsCenter: AllowedCards[]; // ✅ only DescriptionCard[]
    cardsRight: AllowedCards[]; // ✅ only DescriptionCard[]
};


export default function ThreeColumn({
                                         label, cardsLeft, cardsCenter, cardsRight
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
                          className="z-50 border-0 shadow-s mt-4 max-h-[calc(100vh-6rem)] transform overflow-y-auto bg-white ring-0 ring-black ring-opacity-5 absolute rounded-xl start-0 -ms-10 max-w-xs w-240 from-transparent from-[66.2%] to-gray-50 to-[66.2%] xl:bg-gradient-to-r">
                <div
                    className="-ms-2 items-start gap-6 space-y-8 py-5 xl:ms-0 xl:flex xl:space-y-0 xl:p-6">
                    <div className="flex-1 space-y-6 xl:space-y-7">
                        {cardsLeft.map((card, i) => (
                            <div key={i}>{card}</div>
                        ))}
                    </div>
                    <div className="flex-1 space-y-6 xl:space-y-7">
                        {cardsCenter.map((card, i) => (
                            <div key={i}>{card}</div>
                        ))}

                    </div>
                    <div className="flex-1 space-y-6 xl:space-y-7">
                        {cardsRight.map((card, i) => (
                            <div key={i}>{card}</div>
                        ))}

                    </div>
                </div>

            </PopoverPanel>
        </Popover>

    )
}
