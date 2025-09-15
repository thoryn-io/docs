import Image from "next/image";

type ImageContentSectionProps = {
    heading: string,
    content: React.ReactNode;
    imageURL: string;
    cta?: {
        text: string;
        href: string;
    }
};

export default function ImageContentSection({content, heading, imageURL, cta}: ImageContentSectionProps) {
    return (
        <div className="pb-24 md:pb-32 xl:pb-44 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-8xl mx-auto">
                <div className="">
                    <div className="" data-showmore-item="">
                        <div className="grid grid-cols-1 gap-x-24 gap-y-6 lg:grid-cols-2">
                            <div
                                className="flex flex-col items-stretch justify-center gap-y-8 py-4 items-start text-left">
                                <div className="space-y-2"><h3
                                    className="lg:text-5xl text-3xl text-purple-800 font-serif">{heading}</h3></div>
                                <div className="text-base font-sans rich-text">
                                    {content}
                                </div>

                                {cta != undefined && <div className="space-y-3">
                                    <div className="flex flex-wrap gap-2 justify-start"><a href={cta.href}
                                                                                           target="_self"
                                                                                           aria-disabled="false"
                                                                                           className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-out text-purple-500 shadow-purple-500 ring-purple-800 ring-offset-white hocus:bg-purple-700 hocus:text-white bg-transparent shadow-[inset_0_0_0_2px] no-underline hocus:shadow-transparent ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-3 px-5 text-base gap-2 max-sm:w-full">
                                        {cta.text}
                                    </a>
                                    </div>
                                </div>


                                }
                            </div>
                            <div className="-mx-4 md:-mx-8 lg:order-first lg:-ms-8 lg:me-0 xl:-ms-16">
                                <Image
                                    src={imageURL}   // from /public
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="
                                    h-full w-full object-contain object-center
                                    h-full w-full object-contain object-center opacity-0 transition-opacity opacity-100"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}