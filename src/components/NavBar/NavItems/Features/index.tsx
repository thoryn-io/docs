import SingleColumn from "@/components/NavBar/Popovers/SingleColumn";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";

export default function Features() {
    return (
        <SingleColumn label="Features" cards={
            [
                <DescriptionCard
                    key={0}
                    href="/overview"
                    label="Overview"
                    description="Authorization you can trust, with privacy at its core."
                    icon={HomeIcon}
                />,
                <DescriptionCard
                    key={1}
                    href="/security"
                    label="Security"
                    description="Privacy that puts security first."
                    icon={ShieldCheckIcon}
                />,
                <DescriptionCard
                    key={2}
                    href="/kyc-kyb"
                    label="Know your Business"
                    description="Business onboarding that puts compliance first."
                    icon={ArrowsRightLeftIcon}
                />
            ]
        }/>
    )
}
