import Image from "next/image";
import Link from "next/link";
import SubMenu from "@/components/NavBar/SubMenu";
import SideMenu from "@/components/NavBar/NavItems/SideMenu";


export default function Navigation({menuItems}: NavigationProps) {
    return (
        <div className="sticky top-0 z-50 w-full bg-purple-50 px-1">
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
                                {menuItems.map((item, index) => {
                                    switch (item.type) {
                                        case "simple":
                                            return <a key={index} href={item.href}>{item.label}</a>;
                                        case "submenu":
                                            return <li key={index}>
                                                <SubMenu  {...item}/>
                                            </li>;
                                    }
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="ms-auto flex shrink-0 items-center gap-4">
                        <div className="hidden xl:block">
                            <div data-headlessui-state="">
                                <div className="relative">
                                    <button
                                        className="flex items-center gap-1 font-semibold text-purple-800 hover:text-purple-500 focus-visible:text-purple-500 aria-current-page:text-purple-500"
                                        type="button" aria-expanded="false" data-headlessui-state=""
                                        id="headlessui-popover-button-«r30Rr9l6»"
                                        aria-controls="headlessui-popover-panel-«r30R1r9l6»">
                                        <span>Discover Proton</span>

                                    </button>
                                </div>
                            </div>
                        </div>
                        <span
                            className="h-auto w-0 flex-none border-r border-purple-200 max-[88em]:hidden my-1 self-stretch"></span>
                        <div className="hidden sm:block"><a rel="noopener noreferrer"
                                                            href="https://account.proton.me/mail/signup?ref=pme_lp_b2c_mail_menu"
                                                            className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-out bg-purple-500 text-white ring-purple-800 ring-offset-white hocus:bg-purple-700 hocus:text-white no-underline ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-1 px-3 text-sm gap-1 max-sm:w-full">Get
                            Proton Mail</a></div>
                        <div className="hidden md:block"><a rel="noopener noreferrer"
                                                            href="https://account.proton.me/mail"
                                                            className="inline-flex shrink-0 items-center justify-center rounded-full text-center font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-150 ease-out text-purple-500 ring-purple-800 ring-offset-white hocus:bg-purple-700 hocus:text-white bg-transparent no-underline ring-offset-2 focus-visible:ring motion-safe:active:translate-y-px py-1 px-3 text-sm gap-1 max-sm:w-full">Sign
                            in</a></div>
                    </div>
                    <SideMenu/>
                </div>
            </header>

        </div>
    );
}