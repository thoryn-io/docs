import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {UserGroupIcon} from "@heroicons/react/24/outline";
import DuoColumn from "@/components/NavBar/Popovers/DuoColumn";
import {TextCard} from "@/components/NavBar/Cards";

export default function WhoWeAre() {
    return (
        <DuoColumn
            label="Who we are"
            cardsLeft={
                [
                    <DescriptionCard
                        key={0}
                        href="/about"
                        label="About us"
                        description="Thoryn stands for privacy. Always has aways been."
                    />,
                    <DescriptionCard
                        key={1}
                        href="/team"
                        label="Team"
                        description="Meet the people building a better internet."
                    />,
                    <DescriptionCard
                        key={2}
                        href="/impact"
                        label="Impact"
                        description="Defending freedom through tech is why we exist."
                    />
                ]
            }
            cardsRight={
                [
                    <TextCard
                        key={0}
                        description="We've always been guided by the Thoryn community."
                        icon={UserGroupIcon}
                    />,
                    <DescriptionCard
                        key={1}
                        href="/community"
                        label="Community"
                        description="Join the fight to make the internet a better place."
                    />,
                    <DescriptionCard
                        key={2}
                        href="/opensource"
                        label="Open source"
                        description="Everyone is welcome to inspect our code. We are open."
                    />
                ]
            }/>
    )
}
