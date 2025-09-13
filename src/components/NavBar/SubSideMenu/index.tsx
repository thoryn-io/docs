import {MenuItemSubMenu} from "@/components/NavBar/types";
import MenuCard from "../Cards/MenuCard";
import SingleColumnMenu from "@/components/NavBar/Popovers/SingleColumnMenu";
import TrioColumnMenu from "@/components/NavBar/Popovers/TrioColumnMenu";


export default function SubSideMenu({
                                        label,
                                        subMenu
                                    }: MenuItemSubMenu) {
    function renderSubMenu() {
        switch (subMenu.type) {
            case "single":
                return (
                    <SingleColumnMenu
                        label={label}
                        cards={subMenu.plane.items.map((item, index) => (
                            <MenuCard
                                key={index}
                                href={item.href}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    />
                );
            case "duo":
                return <SingleColumnMenu
                    label={label}
                    cards={[
                        ...subMenu.left.items.map((item, index) => (
                            <MenuCard
                                key={index}
                                href={item.href}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        )),
                        ...subMenu.right.items.map((item, index) => (
                            <MenuCard
                                key={index}
                                href={item.href}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))
                    ]}

                />;
            case "trio":
                return <TrioColumnMenu
                    label={label}
                    cardsLeft={[
                        ...subMenu.left.items.map((item, index) => (
                            <MenuCard
                                key={index}
                                href={item.href}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        )),
                    ]}
                    cardsCenter={[...subMenu.center.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))]}
                    cardsRight={[...subMenu.right.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))
                    ]}

                />;
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
