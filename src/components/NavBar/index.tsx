import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Navigation from "@/components/NavBar/Navigation";
import { Features } from "@/components/NavBar/NavItems";

export default function Example() {
    return (
        <Navigation>
            <Features/>
        </Navigation>
    )
}