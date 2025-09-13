
import Menu from "@/components/NavBar/Popovers/Menu";
import {NavigationProps} from "@/components/NavBar/types";

export default function SideMenu({menuItems}: NavigationProps) {
    return (
        <Menu menuItems={menuItems}/>
    )
}
