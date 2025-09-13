import {MenuItemSubMenu} from "@/components/NavBar/types";
import SingleColumn from "@/components/NavBar/Popovers/SingleColumn";
import MenuCard from "../Cards/MenuCard";
import DuoColumn from "@/components/NavBar/Popovers/DuoColumn";
import ThreeColumn from "@/components/NavBar/Popovers/ThreeColumn";


export default function SubMenu({
                                    label,
                                    subMenu
                                }: MenuItemSubMenu) {
    function renderSubMenu() {
        switch (subMenu.type) {
            case "single":
                return (
                    <SingleColumn
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
                return <DuoColumn
                    label={label}
                    cardsLeft={subMenu.left.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                    cardsRight={subMenu.right.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}

                />;
            case "trio":
                return <ThreeColumn
                    label={label}
                    cardsLeft={subMenu.left.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                    cardsCenter={
                        subMenu.center.items.map((item, index) => (
                            <MenuCard
                                key={index}
                                href={item.href}
                                label={item.label}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))
                    }
                    cardsRight={subMenu.right.items.map((item, index) => (
                        <MenuCard
                            key={index}
                            href={item.href}
                            label={item.label}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}

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
