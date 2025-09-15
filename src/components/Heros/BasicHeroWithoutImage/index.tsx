

type BasicHeroWithoutImageProps = {
    title: string;
    subTitle: string;
};

export default function BasicHeroWithoutImage({
                                                  title,
                                                  subTitle
                                              }: BasicHeroWithoutImageProps) {
    return (
        <div className="bg-purple-25 text-purple-800" data-testid="hero-without-image-section">
            <div className="pt-24 pb-24 container">
                <div className="flex justify-center px-8 lg:px-0 bg-purple-25">
                    <div className="max-w-135 lg:max-w-182.5 text-center">
                        <div className="mb-6">
                            <h1 className="text-4xl lg:text-5xl text-current font-serif">
                                <p>{title}</p>
                            </h1>
                        </div>
                        <div className="mb-6 text-lg lg:text-xl text-purple-800">
                            <div>
                                <p>{subTitle}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-x-0 space-y-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}