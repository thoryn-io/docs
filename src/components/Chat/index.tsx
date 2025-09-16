"use client";
import {PropsWithChildren, useState} from "react";
import { ChatBubbleLeftRightIcon} from "@heroicons/react/24/outline";
import ChatDialog from "@/components/Chat/ChatDialog";

export default function Chat({children}: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}
                    className="fixed z-50  bottom-0 right-0 text-gray-900 bg-purple-300 outline-none hover:text-purple-500 focus-visible:text-purple-500 p-4 m-6 rounded-2xl">
                <span className="sr-only">Open Chat</span>
                <ChatBubbleLeftRightIcon className="h-10 w-10"/>
            </button>

            <ChatDialog open={open} onClose={setOpen} side="right" title="Navigation">
                <nav className="space-y-3">
                    {children}
                </nav>
            </ChatDialog>
        </>
    )
}
