import {DescriptionCard, HeaderCard, TextCard} from "@/components/NavBar/Cards";

export default function MenuCard({
                                     href,
                                     label,
                                     description,
                                     icon: Icon,
                                 }: SubMenuItem) {
    function renderCard() {
        if (href != undefined && label != undefined) {
            return <DescriptionCard href={href} label={label} description={description} icon={Icon}/>
        } else if (description != undefined && Icon != undefined) {
            return <TextCard description={description} icon={Icon}/>
        } else if (label != undefined) {
            return <HeaderCard title={label}/>
        }
    }

    return (
        <>
            {renderCard()}
        </>
    );
}