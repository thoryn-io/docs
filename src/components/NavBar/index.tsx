import Navigation from "@/components/NavBar/Navigation";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon, UserGroupIcon} from "@heroicons/react/24/outline";

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
                {
                    label: "Resources and support",
                    type: "submenu",
                    subMenu: {
                        type: "trio",
                        left: {
                            items: [
                                {
                                    label: "Help"
                                },
                                {
                                    href: "/switch",
                                    label: "Switch to Thoryn",
                                    description: "Move to Thoryn in just a few clicks with Easy Switch."
                                },
                                {
                                    href: "/help-support",
                                    label: "Help and support",
                                    description: "Guides and customer support for Thorwyn products."

                                },
                                {
                                    href: "/help-support",
                                    label: "Help and support",
                                    description: "Guides and customer support for Thorwyn products."
                                }
                            ]
                        },
                        center: {
                            items: [
                                {
                                    label: "Blog"
                                },
                                {
                                    href: "/news",
                                    label: "News",
                                    description: "Latest news on privacy and the Internet."
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates",
                                },
                                {
                                    href: "/thorwyn-news",
                                    label: "Thorwyn news"
                                },
                                {
                                    href: "/privacy-guides",
                                    label: "Privacy guides"
                                }
                            ]
                        },

                        right: {
                            items: [
                                {
                                    label: "Download the apps",
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates"
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates"
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates"
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates"
                                },
                                {
                                    href: "/product-updates",
                                    label: "Product updates"
                                }
                            ]
                        }
                    }
                }
            ]
        }/>
    )
}