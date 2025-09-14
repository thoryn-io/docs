
export default function SplitSection() {
    return (
        <div className="pb-16 md:pb-20 xl:pb-24 px-4 md:px-8 xl:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                <p>Identity and access management shouldn’t slow you down. Between compliance requirements, security risks, and constant regulation changes, building IAM in-house is a hassle.</p>

                                <p>That’s why we’ve created a battle-tested platform designed to take the complexity out of IAM and KYB. Our modular approach means you get exactly what you need — from secure authentication and progressive trust, to Know Your Business (KYB) verification — without unnecessary overhead.</p>

                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col items-stretch gap-y-8 items-start text-left">
                            <div className="text-base font-sans rich-text">
                                <p>With our solution, you can:</p>
                                <br/>
                                <ul>
                                    <li>- Stay ahead of compliance requirements without drowning in details</li>
                                    <li>- Scale seamlessly with a plug-and-play modular architecture</li>
                                    <li>- Protect users and businesses with proven security practices</li>
                                    <li>- Focus on growth while we handle the heavy lifting of IAM & KYB</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}