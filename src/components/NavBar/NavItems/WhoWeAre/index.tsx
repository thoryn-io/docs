import SingleColumn from "@/components/NavBar/Popovers/SingleColumn";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import DuoColumn from "@/components/NavBar/Popovers/DuoColumn";
import {TextCard} from "@/components/NavBar/Cards";

export default function WhoWeAre() {
    return (
        <DuoColumn
            label="Who we are"
            cardsLeft={
                [
                    <DescriptionCard
                        href="/about"
                        label="About us"
                        description="Thoryn stands for privacy. Always has aways been."
                    />,
                    <DescriptionCard
                        href="/team"
                        label="Team"
                        description="Meet the people building a better internet."
                    />,
                    <DescriptionCard
                        href="/impact"
                        label="Impact"
                        description="Defending freedom through tech is why we exist."
                    />
                ]
            }
            cardsRight={
                [
                    <TextCard
                        description="We've always been guided by the Thoryn community."
                        icon={UserGroupIcon}
                    />,
                    <DescriptionCard
                        href="/community"
                        label="Community"
                        description="Join the fight to make the internet a better place."
                    />,
                    <DescriptionCard
                        href="/opensource"
                        label="Open source"
                        description="Everyone is welcome to inspect our code. We are open."
                    />
                ]
            }/>
    )
}
