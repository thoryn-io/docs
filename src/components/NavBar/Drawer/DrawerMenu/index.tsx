"use client";

import {useEffect, useRef} from "react";
import {Dialog, DialogBackdrop, DialogPanel, PopoverButton} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

type DrawerProps = {
    open: boolean;
    onClose: (open: boolean) => void;
    side?: "right" | "left";
    title?: string;
    children: React.ReactNode;
};

export default function MenuDrawer({
                                       open,
                                       onClose,
                                       side = "right",
                                       title = "Menu",
                                       children,
                                   }: DrawerProps) {
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    // Body scroll lock (iOS-safe enough for drawers)
    useEffect(() => {
        if (!open) return;
        const y = window.scrollY;
        const { style } = document.body;
        const prev = { position: style.position, top: style.top, width: style.width, overflow: style.overflow };

        style.position = "fixed";
        style.top = `-${y}px`;
        style.width = "100%";
        style.overflow = "hidden";

        return () => {
            style.position = prev.position;
            style.top = prev.top;
            style.width = prev.width;
            style.overflow = prev.overflow;
            window.scrollTo(0, y);
        };
    }, [open]);

    const isRight = side === "right";
    const slideClass = isRight
        ? "data-[closed]:translate-x-full"
        : "data-[closed]:-translate-x-full";
    const positionClass = isRight ? "justify-end" : "justify-start";

    return (
        <Dialog open={open} onClose={onClose} className="relative z-50 xl:hidden" initialFocus={closeBtnRef} transition>
            {/* Backdrop */}
            <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity duration-300 data-[closed]:opacity-0" />

            {/* Panel wrapper controls left/right placement */}
            <div className={`fixed inset-0 flex ${positionClass}`}>
                <DialogPanel
                    className={[
                        "h-full w-full max-w-md bg-white shadow-xl outline-none",
                        "flex flex-col transition-transform duration-300",
                        slideClass,
                    ].join(" ")}
                >
                    {/* Header sticks; content below scrolls */}
                    <header className="flex h-12 items-center justify-between border-b border-gray-200 pe-4 ps-8 md:pe-8 xl:pe-16">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <button
                            ref={closeBtnRef}
                            onClick={() => onClose(false)}
                            className="block text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500"
                            aria-label="Close menu"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-7 w-7"/>
                        </button>
                    </header>

                    {/* Scrollable content area */}
                    <div className="flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] p-4">
                        {children}
                    </div>

                    {/* Optional footer */}
                     <footer className="shrink-0 p-4 border-t">Footer content</footer>
                </DialogPanel>
            </div>
        </Dialog>
    );
}