import {MenuItemSubMenu, SubMenuPlane} from "@/components/NavBar/types";
import MenuCard from "../Cards/MenuCard";
import DrawerDisclosure from "@/components/NavBar/Drawer/DrawerDisclosure";

export default function SubSideMenu({
                                        label,
                                        subMenu
                                    }: MenuItemSubMenu) {
    const renderMenu = (menu : SubMenuPlane) => {
        return menu.items.map((item, index) => (
            <MenuCard
                key={index}
                href={item.href}
                label={item.label}
                description={item.description}
                icon={item.icon}
            />
        ))
    };

    function renderSubMenu() {
        switch (subMenu.type) {
            case "single":
                return (
                    <DrawerDisclosure label={label}>
                        {renderMenu(subMenu.plane)}
                    </DrawerDisclosure>
                );
            case "duo":
                return <DrawerDisclosure label={label}>
                    {renderMenu(subMenu.left)}
                    <hr className="m-4 xl:mx-0 xl:my-6 xl:hidden"/>
                    {renderMenu(subMenu.right)}
                </DrawerDisclosure>;
            case "trio":
                return <DrawerDisclosure label={label}>
                    {renderMenu(subMenu.left)}
                    <hr className="m-4 xl:mx-0 xl:my-6 xl:hidden"/>
                    {renderMenu(subMenu.center)}
                    <hr className="m-4 xl:mx-0 xl:my-6 xl:hidden"/>
                    {renderMenu(subMenu.right)}
                </DrawerDisclosure>;
            default:
                return null;
        }
    }

    return (
        <>
            {renderSubMenu()}
        </>
    )
}
