import DescriptionCard from "@/components/NavBar/Cards/DescriptionCard";
import ThreeColumn from "@/components/NavBar/Popovers/ThreeColumn";
import {HeaderCard} from "@/components/NavBar/Cards";

export default function ResourcesAndSupport() {
    return (
        <ThreeColumn
            label="Resources and support"
            cardsLeft={
                [
                    <HeaderCard key={0} title="Help"/>,
                    <DescriptionCard
                        key={1}
                        href="/switch"
                        label="Switch to Thoryn"
                        description="Move to Thoryn in just a few clicks with Easy Switch."
                    />,
                    <DescriptionCard
                        key={2}
                        href="/help-support"
                        label="Help and support"
                        description="Guides and customer support for Thorwyn products."
                    />,
                    <DescriptionCard
                        key={3}
                        href="/help-support"
                        label="Help and support"
                        description="Guides and customer support for Thorwyn products."
                    />
                ]
            }
            cardsCenter={
                [
                    <HeaderCard
                        key={0}
                        title="Blog"/>,

                    <DescriptionCard
                        key={1}
                        href="/news"
                        label="News"
                        description="Latest news on privacy and the Internet."
                    />,
                    <DescriptionCard
                        key={2}
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        key={3}
                        href="/thorwyn-news"
                        label="Thorwyn news"
                    />,
                    <DescriptionCard
                        key={4}
                        href="/privacy-guides"
                        label="Privacy guides"
                    />,

                ]
            }
            cardsRight={
                [
                    <HeaderCard
                        key={0}
                        title="Download the apps"/>,

                    <DescriptionCard
                        key={1}
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        key={2}
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        key={3}
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        key={4}
                        href="/product-updates"
                        label="Product updates"
                    />,
                    <DescriptionCard
                        key={5}
                        href="/product-updates"
                        label="Product updates"
                    />,
                ]
            }

        />
    )
}
