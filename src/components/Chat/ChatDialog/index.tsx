"use client";

import {useEffect, useRef} from "react";
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import LeadsChat from "@/components/Chat/LeadsChat";

type DrawerProps = {
    open: boolean;
    onClose: (open: boolean) => void;
    side?: "right" | "left";
    title?: string;
    children: React.ReactNode;
};

export default function ChatDialog({
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
        <Dialog open={open} onClose={onClose} className="relative z-50" initialFocus={closeBtnRef} transition>
            {/* Backdrop */}
            <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity duration-300 data-[closed]:opacity-0" />

            {/* Panel wrapper controls left/right placement */}
            <div className={`fixed inset-0 flex ${positionClass}`}>
                <DialogPanel
                    className={[
                        "fixed bottom-20 z-50",
                        "bg-white shadow-xl outline-none flex flex-col transition-transform duration-300 h-96",
                        "w-full max-w-full right-0 rounded-2xl",        // default → mobile = full width, no margin
                        "sm:w-96 sm:max-w-md sm:mr-20",
                        slideClass,
                    ].join(" ")}
                >
                    <LeadsChat/>
                </DialogPanel>
            </div>
        </Dialog>
    );
}