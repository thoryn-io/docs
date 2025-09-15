"use client";
import {PropsWithChildren, useState} from "react";
import DrawerMenu from "../Drawer/DrawerMenu";
import {Bars3Icon} from "@heroicons/react/24/outline";

export default function Drawer({children}: PropsWithChildren) {
    const [open, setOpen] = useState(false);
    return (
        <>

            <button onClick={() => setOpen(true)} className="text-gray-900 outline-none hover:text-purple-500 focus-visible:text-purple-500 xl:hidden">
                <span className="sr-only">Open Menu</span>
                <Bars3Icon className="h-7 w-7"/>
            </button>

            <DrawerMenu open={open} onClose={setOpen} side="right" title="Navigation">
                <nav className="space-y-3">
                    {children}
                </nav>
            </DrawerMenu>
        </>
    )
}
