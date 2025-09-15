import Image from "next/image";

type ImageSectionProps = {
    heading: string,
    imageURL: string;
};

export default function ImageSection({
                                         heading,
                                         imageURL,
                                     }: ImageSectionProps) {
    return (
        <div className="bg-purple-25 text-purple-800" data-testid="image-section">
            <div className="pt-0 pb-0">
                <div className="container">
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
            </div>
        </div>
    );
}