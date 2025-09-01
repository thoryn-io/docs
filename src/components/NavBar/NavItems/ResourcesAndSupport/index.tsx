import SingleColumn from "@/components/NavBar/Popovers/SingleColumn";
import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon} from "@heroicons/react/24/outline";
import ThreeColumn from "@/components/NavBar/Popovers/ThreeColumn";
import {HeaderCard} from "@/components/NavBar/Cards";

export default function ResourcesAndSupport() {
    return (
        <ThreeColumn
            label="Resources and support"
            cardsLeft={
                [
                    <HeaderCard title="Help"/>,
                    <DescriptionCard
                        href="/switch"
                        label="Switch to Thoryn"
                        description="Move to Thoryn in just a few clicks with Easy Switch."
                    />,
                    <DescriptionCard
                        href="/help-support"
                        label="Help and support"
                        description="Guides and customer support for Thorwyn products."
                    />,
                    <DescriptionCard
                        href="/help-support"
                        label="Help and support"
                        description="Guides and customer support for Thorwyn products."
                    />
                ]
            }
            cardsCenter={
                [
                    <HeaderCard title="Blog"/>,

                    <DescriptionCard
                        href="/news"
                        label="News"
                        description="Latest news on privacy and the Internet."
                    />,
                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        href="/thorwyn-news"
                        label="Thorwyn news"
                    />,
                    <DescriptionCard
                        href="/privacy-guides"
                        label="Privacy guides"
                    />,

                ]
            }
            cardsRight={
                [
                    <HeaderCard title="Download the apps"/>,

                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        href="/product-updates"
                        label="Product updates"
                    />,
                ]
            }

        />
    )
}
