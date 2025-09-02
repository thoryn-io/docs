import { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation({ children }: PropsWithChildren) {
    return (
        <div className="sticky top-0 z-50 w-full bg-purple-50 px-16">
            <header>
                <div className="relative flex h-12 items-center justify-between gap-4 text-sm duration-150 ease-linear">
                    <Link href="/">
                        <div className="inline-flex flex-row justify-between h-full w-auto">
                            <Image
                                src="/thoryn_logo.png"   // from /public
                                alt="Thoryn"
                                width={400}
                                height={300}
                                className="h-6 w-auto"
                                priority
                            />

                        </div>
                    </Link>
                    <div className="hidden xl:block xl:flex-grow">
                        <nav>
                            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                {children}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}