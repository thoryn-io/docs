type SplitSectionProps = {
    left: React.ReactNode;
    right: React.ReactNode;
};

export default function SplitSection({left, right}: SplitSectionProps) {
    return (
        <div className="pb-16 md:pb-20 xl:pb-24 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                {left}
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                {right}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}