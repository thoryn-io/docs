import Navigation from "@/components/NavBar/Navigation";
import {UserGroupIcon} from "@heroicons/react/24/outline";

export default function NavBar() {
    return (
        <Navigation menuItems={
            [
                {
                    label: "Products",
                    type: "submenu",
                    subMenu: {
                        type: "duo",
                        left: {
                            items: [
                                {
                                    label: "Oauth-hub",
                                    description: "Simple, secure, compliant access",
                                    imageHref: "/36x36.png",
                                    href: "/oauth"
                                },
                                {
                                    label: "SAML-hub",
                                    description: "Seamless, secure, and compliant federation",
                                    imageHref: "/36x36.png",
                                    href: "/saml"
                                },
                                {
                                    label: "IdP",
                                    description: "Your trusted identity provider for secure, compliant access",
                                    imageHref: "/36x36.png",
                                    href: "/idp"
                                }
                            ]
                        },

                        right: {
                            items: [
                                {
                                    label: "KYC/KYB",
                                    description: "Fast, compliant verification for users and businesses",
                                    imageHref: "/36x36.png",
                                    href: "/kyc-kyb"
                                },
                                {
                                    label: "Login FE",
                                    description: "A seamless, secure front-end experience for user authentication",
                                    imageHref: "/36x36.png",
                                    href: "/login-fe"
                                }
                            ]
                        }
                    }
                },
                {
                    label: "Who are we",
                    type: "submenu",
                    subMenu: {
                        type: "duo",
                        left: {
                            items: [
                                {
                                    href: "/about",
                                    label: "About us",
                                    description: "Thoryn stands for privacy. Always has aways been."
                                },
                                {
                                    href: "/about/team",
                                    label: "Team",
                                    description: "Meet the people building a better internet."

                                },
                                {
                                    href: "/about/impact",
                                    label: "Impact",
                                    description: "Defending freedom through tech is why we exist."
                                }
                            ]
                        },
                        right: {
                            items: [
                                {
                                    description: "We've always been guided by the Thoryn community.",
                                    icon: UserGroupIcon
                                }
                            ]
                        }
                    }
                },
                
            ]
        }/>
    )
}