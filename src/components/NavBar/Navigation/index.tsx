import { PropsWithChildren } from "react";

export default function Navigation({ children }: PropsWithChildren) {
    return (
        <div className="sticky top-0 z-50 w-full bg-purple-50 px-16">
            <header>
                <div className="relative flex h-12 items-center justify-between gap-4 text-sm duration-150 ease-linear">
                    {children}
                </div>
            </header>
        </div>
    );
}