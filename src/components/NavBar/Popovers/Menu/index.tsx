import {PropsWithChildren} from "react";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";


type SingleColumnProps = {
    label: string;
};


export default function Menu({
                                 label
                             }: PropsWithChildren<SingleColumnProps>) {
    return (
        <Popover
            className="flex items-center xl:hidden"
        >
            <PopoverButton
                as="button"
                className="text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                <span className="sr-only">{label}</span>
                <Bars3Icon className="h-7 w-7"/>
            </PopoverButton>
            <PopoverBackdrop className="z-over fixed inset-0 bg-black/15"/>
            <PopoverPanel anchor="top start">
                <div
                    className="z-50 z-menu fixed bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-white w-112 ">
                    <div
                        className="flex h-12 items-center justify-between border-b border-gray-200 pe-4 ps-8 md:pe-8 xl:pe-16">
                        <a href="/mail" aria-current="page" className="flex h-7 flex-none mb-1">
                            <div className="inline-flex flex-row items-center justify-between w-auto h-full">
                                <picture className="inline-flex w-auto h-full">
                                    <source sizes="(min-width: 36px) 36px, 100vw"
                                            srcSet="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg"
                                            height="36" width="36"/>
                                    <img alt="" loading="eager" decoding="async" className="inline-flex w-auto h-full"
                                         src="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg"/>
                                </picture>
                                <div className="relative top-[10%] flex h-[62%] justify-center">
                                    <div className="inline-flex flex-row justify-between h-full w-auto">
                                        <picture className="w-auto h-full">
                                            <source sizes="(min-width: 98px) 98px, 100vw"
                                                    srcSet="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"
                                                    height="32" width="98"/>
                                            <img alt="Proton" loading="eager" decoding="async" className="w-auto h-full"
                                                 src="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"/>
                                        </picture>
                                        <picture className="w-auto h-full">
                                            <source sizes="(min-width: 62px) 62px, 100vw"
                                                    srcSet="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg"
                                                    height="32" width="62"/>
                                            <img alt="Mail" loading="eager" decoding="async" className="w-auto h-full"
                                                 src="https://pmecdn.protonweb.com/image-transformation/?s=c&amp;image=image%2Fupload%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg"/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <PopoverButton
                            as="button"
                            className="block text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-7 w-7"/>
                        </PopoverButton>

                    </div>
                </div>

            </PopoverPanel>
        </Popover>

    )
}
