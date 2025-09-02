
export default function SplitSection() {
    return (
        <div className="pb-16 md:pb-20 xl:pb-24 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                <p>Proton was started in 2014 by
                                scientists who met at CERN and shared a vision of an internet that defends freedom and
                                puts people first.</p>
                                <p>Our transparency, open-source software, and rigorous encryption
                                have earned Proton millions of users around the world — and the recommendation of the
                                United Nations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                <p>Tech companies like Google or Apple
                                define privacy as “nobody can exploit your data, except for us.” We believe nobody
                                should exploit your data, period.</p>
                                <p>Our technology and business are based upon this
                                fundamentally stronger definition of privacy, backed also by Swiss privacy laws.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}