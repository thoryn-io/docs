import Image from "next/image";

type EcoSystemSectionProps = {
    items: {
        text: string;
        imageHref: string;
    }[]
};

export default function EcoSystemSection({items}: EcoSystemSectionProps) {
    return (
        <>
            <div className="pt-16 md:pt-20 xl:pt-24 pb-4 md:pb-6 xl:pb-8 px-4 md:px-8 xl:px-16" id="ecosystem">
                <div className="dtc-max-w-8xl mx-auto">
                    <div className="flex text-center sm:justify-center">
                        <div
                            className="flex flex-wrap justify-center gap-y-6 max-sm:flex-1 max-sm:flex-col md:rounded-full md:border md:border-gray-300/40 md:p-4 max-w-full">
                            <ul className="flex divide-x divide-gray-300/40 max-sm:justify-between max-w-full max-sm:overflow-auto">
                                {items.map((item, index) => {
                                    return <li key={index}
                                               className="flex items-center shrink-0 gap-2 px-2 xs:px-4 max-sm:flex-1 max-sm:first:ps-0 max-sm:last:pe-0 max-lg:flex-col md:py-2">
                                            <span className="block h-6 shrink-0">
                                                <Image
                                                    className="inline-flex w-auto h-full inline-flex w-auto h-full opacity-0 transition-opacity opacity-100"
                                                    src={item.imageHref}
                                                    alt={item.text}
                                                    width={36}
                                                    height={36}
                                                    loading="lazy"
                                                />
                                            </span>
                                        <span className="max-xs:text-sm">{item.text}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}