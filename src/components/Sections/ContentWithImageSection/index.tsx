import Image from "next/image";

type ContentWithImageSectionProps = {
    heading: string,
    content: React.ReactNode;
    imageURL: string;
    imageLocation: 'left' | 'right'
};

export default function ContentWithImageSection({
                                                    content,
                                                    heading,
                                                    imageURL,
                                                    imageLocation
                                                }: ContentWithImageSectionProps) {
    return (
        <div className="bg-purple-25 text-purple-800" data-testid="content-with-img">
            <div className="pt-6 lg:pt-12 pb-6 lg:pb-12">
                <div className="container relative flex flex-col lg:flex-row lg:px-0">
                    <div className={`flex w-full flex-col justify-center overflow-hidden lg:w-1/2 px-0 ${
                        imageLocation === "left" ? "lg:order-2 rounded-l-2xl" : "lg:order-1 rounded-r-2xl"
                    }`}>
                        <Image
                            src={imageURL}   // from /public
                            alt=""
                            width={100}
                            height={100}
                            className="
                                    h-auto w-full
                                    h-auto w-full opacity-0 transition-opacity opacity-100"
                            priority
                        />
                    </div>
                    <div
                        className={`flex w-full flex-col items-start justify-center pb-6 pt-6 text-left lg:w-1/2 lg:pb-0 lg:pt-0 xl:pr-24 xl:pl-16 lg:px-12 ${
                            imageLocation === "left" ? "lg:order-1" : "lg:order-2"
                        }`}>
                        <div className="max-w-135 lg:max-w-150 my-3 lg:px-0"><h2
                            className="text-3xl lg:text-4xl text-purple-800 font-serif">{heading}</h2></div>
                        <div
                            className="text-purple-800 max-w-135 lg:max-w-150 my-3 space-y-4 text-base lg:mr-20 lg:px-0 lg:text-lg list-style list-style-type-check list-style-size-7 list-style-color-purple500">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}