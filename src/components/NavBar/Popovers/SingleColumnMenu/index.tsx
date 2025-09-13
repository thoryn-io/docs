import {PropsWithChildren} from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import {AllowedCards} from "@/components/NavBar/Popovers/types";
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/16/solid";


type SingleColumnProps = {
    label: string;
    cards: AllowedCards[]; // ✅ only DescriptionCard[]
};


export default function SingleColumnMenu({
                                         label, cards
                                     }: PropsWithChildren<SingleColumnProps>) {
    return (
        <Disclosure>
            <DisclosureButton
                as="button"
                className="w-full py-4 font-semibold text-left flex items-center justify-between text-lg outline-none text-purple-800 hover:text-purple-500 focus-visible:text-purple-500">{label} <ChevronRightIcon className="h-8 w-8"/></DisclosureButton>
            <DisclosurePanel
                transition
                          className="z-60 mt-12 fixed bg-white bottom-0 right-0 top-0 bg-white w-112 origin-right transition duration-200 ease-out data-closed:translate-x-112 p-4 pl-8">

                <DisclosureButton
                    as="button"
                    className="mb-2 inline-flex items-center gap-2 text-lg text-purple-800">
                    <ArrowLeftIcon className="h-8 w-8"/> Back / <span className="text-gray-400">{label}</span>
                </DisclosureButton>

                <div
                    className="-ms-4 py-6 xl:ms-0 xl:px-6 gap-12 from-transparent from-[73%] to-gray-50 to-[73%] xl:grid xl:grid-cols-[3fr_1fr] xl:bg-gradient-to-r">

                    {cards.map((card, i) => (
                        <div key={i}>{card}</div>
                    ))}
                </div>

            </DisclosurePanel>
        </Disclosure>

    )
}
