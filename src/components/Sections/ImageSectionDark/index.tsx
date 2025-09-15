import Image from "next/image";

type ImageSectionProps = {
    heading: string,
    content: React.ReactNode;
    imageURL: string;
    cta?: {
        text: string;
        href: string;
    }
};

export default function ImageSectionDark({content, heading, imageURL, cta}: ImageSectionProps) {
    return (
        <>
            <div
                className="pb-24 md:pb-32 xl:pb-44 px-4 md:px-8 xl:px-16 bg-gradient-to-b from-40% from-white to-75% to-purple-25">
                <div
                    className="max-w-8xl mx-auto pt-4 md:pt-6 xl:pt-8 px-4 md:px-8 xl:px-16 bg-gradient-to-br from-80% from-purple-900 to-100% to-cyan-800 rounded-3xl overflow-hidden">
                    <div className="max-w-full mx-auto">
                        <div className="">
                            <div className="" data-showmore-item="">
                                <div className="grid grid-cols-1 gap-x-24 gap-y-6 lg:grid-cols-2">
                                    <div
                                        className="flex flex-col items-stretch justify-center gap-y-8 py-4 items-start text-left">

                                        <div className="space-y-2"><h2
                                            className="text-5xl text-white font-serif">{heading}</h2>
                                        </div>
                                        <div className="text-base text-white font-sans rich-text">
                                            {content}
                                        </div>
                                        {cta != undefined && <div className="space-y-3">
                                            <div className="flex flex-wrap gap-2 justify-start"><a href={cta.href}
                                                                                                   aria-disabled="false"
                                                                                                   className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-out bg-cyan-300 text-purple-900 ring-cyan-50 ring-offset-black hocus:bg-cyan-100 hocus:text-purple-900 no-underline ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-3 px-5 text-base gap-2 max-sm:w-full">
                                                {cta.text}</a></div>
                                        </div>
                                        }

                                    </div>
                                    <div className="-mx-4 md:-mx-8 lg:-me-8 lg:ms-0 xl:-me-16">

                                        <Image
                                            src={imageURL}   // from /public
                                            alt=""
                                            width={100}
                                            height={100}
                                            className="
                                    h-full w-full object-contain object-center md:object-contain md:object-center
                                    h-full w-full object-contain object-center md:object-contain md:object-center opacity-0 transition-opacity opacity-100"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}