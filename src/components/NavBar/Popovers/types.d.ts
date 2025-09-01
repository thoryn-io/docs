import {ReactElement} from "react";
import {TextCard, HeaderCard, DescriptionCard} from "@/components/NavBar/Cards";

type AllowedCards = ReactElement<typeof DescriptionCard> | ReactElement<typeof TextCard> | ReactElement<typeof HeaderCard>;
