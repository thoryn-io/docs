
interface NavigationProps {
    menuItems: MenuItem[];
}
interface BaseMenuItem {
    label: string,
    type: "simple" | "submenu";
}
interface MenuItemSimple extends BaseMenuItem{
    href: string
    type: "simple";
}
export interface MenuItemSubMenu extends BaseMenuItem{
    subMenu: SubMenu
    type: "submenu";
}

type IconType = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

interface BaseSubMenu {
    type: "single" | "duo" | "trio";
}


interface SubMenuSingle extends BaseSubMenu {
    plane: SubMenuPlane,
    type: "single"
}

interface SubMenuDuo extends BaseSubMenu {
    left: SubMenuPlane,
    right: SubMenuPlane,
    type: "duo"
}

interface SubMenuTrio extends BaseSubMenu {
    left: SubMenuPlane,
    center: SubMenuPlane,
    right: SubMenuPlane,
    type: "trio"
}

interface SubMenuItem {
    icon?: IconType;
    label?: string,
    description?: string,
    href?: string,
}

interface SubMenuPlane {
    items: SubMenuItem[]
}

type MenuItem = MenuItemSimple | MenuItemSubMenu;
type SubMenu = SubMenuSingle | SubMenuDuo | SubMenuTrio;
