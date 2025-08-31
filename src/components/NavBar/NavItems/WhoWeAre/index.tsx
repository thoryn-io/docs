import SingleColumn from "@/components/NavBar/Popovers/SingleColumn";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";

export default function WhoWeAre() {
    return (
        <SingleColumn label="Who we are" cards={
            [
                <DescriptionCard
                    href="/overview"
                    label="Overview"
                    description="Authorization you can trust, with privacy at its core."
                    icon={HomeIcon}
                />,
                <DescriptionCard
                    href="/security"
                    label="Security"
                    description="Privacy that puts security first."
                    icon={ShieldCheckIcon}
                />,
                <DescriptionCard
                    href="/kyc-kyb"
                    label="Know your Business"
                    description="Business onboarding that puts compliance first."
                    icon={ArrowsRightLeftIcon}
                />
            ]
        }/>
    )
}
