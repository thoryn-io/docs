import Navigation from "@/components/NavBar/Navigation";
import {Features, WhoWeAre, ResourcesAndSupport} from "@/components/NavBar/NavItems";

export default function Example() {
    return (
        <Navigation>
            <li><Features/></li>
            <li><WhoWeAre/></li>
            <li><ResourcesAndSupport/></li>
        </Navigation>
    )
}