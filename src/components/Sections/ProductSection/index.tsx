import Image from "next/image";
import {ArrowDownRightIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {ChevronRightIcon} from "@heroicons/react/16/solid";

type ProductSectionProps = {
    items: {
        header: string;
        text: string;
        imageHref: string;
        iconHref: string;
        href: string;
    }[]
};

export default function ProductSection({items}: ProductSectionProps) {
    return (
        <>
            <div className="px-4 md:px-8 xl:px-16 bg-white">
                <div className="max-w-8xl mx-auto">
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {items.map((item, index) => {
                            return <div key={index} className="overflow-hidden rounded-3xl bg-gray-75 relative group"
                                        data-showmore-item="">
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.iconHref}   // from /public
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="
                                    h-full w-full max-md:hidden object-cover object-center
                                    h-full w-full max-md:hidden object-cover object-center opacity-0 transition-opacity opacity-100r"
                                        priority
                                    />
                                </div>
                                <div
                                    className="absolute inset-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 max-md:hidden">
                                    <Image
                                        src={item.imageHref}   // from /public
                                        alt=""
                                        width={100}
                                        height={100}
                                        className="
                                    h-full w-full object-cover object-center
                                    h-full w-full object-cover object-center transition-opacity opacity-100"
                                        priority
                                    />
                                </div>
                                <div
                                    className="relative z-10 @container/highlight flex h-full flex-col md:min-h-[37.5rem] items-start text-left">
                                    <div
                                        className="flex h-full flex-col gap-y-8 flex-grow @sm/highlight:p-8 @md/highlight:p-10 @lg/highlight:p-12 @xl/highlight:p-14 @2xl/highlight:p-16 p-6">
                                        <div className="flex items-center gap-4 justify-start">
                                            <div className="flex-shrink-0">
                                                <div className="h-8 md:h-12">
                                                    <div
                                                        className="inline-flex items-center justify-center rounded-[25%] p-1/5 w-auto h-full bg-white shadow-[0_0_0_1px_rgb(0_0_0_/_0.1)]">
                                                        <Image
                                                            src={item.iconHref}   // from /public
                                                            alt=""
                                                            width={100}
                                                            height={100}
                                                            className="
                                   inline-flex w-auto h-full
                                    inline-flex w-auto h-full opacity-0 transition-opacity opacity-100"
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="text-base text-gray-600 font-sans">{item.header}</h2></div>
                                        <div className="mt-auto flex items-end gap-4">
                                            <div className="flex-grow space-y-4">
                                                <div className="text-2xl text-purple-800 font-serif rich-text">
                                                    <p>{item.text}</p></div>
                                            </div>
                                            <div>
                                                <div className="space-y-3">
                                                    <div className="flex flex-wrap gap-2 justify-start">
                                                        <a href={item.href}
                                                           aria-disabled="false"
                                                           className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-out text-purple-500 shadow-purple-500 ring-purple-800 ring-offset-white hocus:bg-purple-700 hocus:text-white bg-transparent shadow-[inset_0_0_0_2px] no-underline hocus:shadow-transparent ring-offset-2 focus-visible:ring  p-3 before:absolute before:inset-0"
                                                           title={item.header}>
                                                            <ChevronRightIcon className="w-8 h-8"/>
                                                            <span className="sr-only">{item.header}</span>
                                                        </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}