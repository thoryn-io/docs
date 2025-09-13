import Navigation from "@/components/NavBar/Navigation";
import {ArrowsRightLeftIcon, HomeIcon, ShieldCheckIcon, UserGroupIcon} from "@heroicons/react/24/outline";

export default function NavBar() {
    return (
        <Navigation menuItems={
            [
                {
                    label: "Features",
                    type: "submenu",
                    subMenu: {
                        type: "single",
                        plane: {
                            items: [
                                {
                                    href: "/overview",
                                    label: "Overview",
                                    description: "Authorization you can trust, with privacy at its core.",
                                    icon: HomeIcon
                                },
                                {
                                    href: "/security",
                                    label: "Security",
                                    description: "Privacy that puts security first.",
                                    icon: ShieldCheckIcon

                                },
                                {
                                    href: "/kyc-kyb",
                                    label: "Know your Business",
                                    description: "Business onboarding that puts compliance first.",
                                    icon: ArrowsRightLeftIcon
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
                                    href: "/team",
                                    label: "Team",
                                    description: "Meet the people building a better internet."

                                },
                                {
                                    href: "/impact",
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
                                },
                                {
                                    href: "/community",
                                    label: "Community",
                                    description: "Join the fight to make the internet a better place."
                                },
                                {
                                    href: "/opensource",
                                    label: "Open source",
                                    description: "Everyone is welcome to inspect our code. We are open."
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
                                    href:"/switch",
                                    label:"Switch to Thoryn",
                                    description:"Move to Thoryn in just a few clicks with Easy Switch."
                                },
                                {
                                    href:"/help-support",
                                    label:"Help and support",
                                    description:"Guides and customer support for Thorwyn products."

                                },
                                {
                                    href:"/help-support",
                                    label:"Help and support",
                                    description:"Guides and customer support for Thorwyn products."
                                }
                            ]
                        },
                        center: {
                            items: [
                                {
                                    label: "Blog"
                                },
                                {
                                    href:"/news",
                                    label:"News",
                                    description:"Latest news on privacy and the Internet."
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates",
                                },
                                {
                                    href:"/thorwyn-news",
                                    label:"Thorwyn news"
                                },
                                {
                                    href:"/privacy-guides",
                                    label:"Privacy guides"
                                }
                            ]
                        },

                        right: {
                            items: [
                                {
                                    label: "Download the apps",
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates"
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates"
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates"
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates"
                                },
                                {
                                    href:"/product-updates",
                                    label:"Product updates"
                                }
                            ]
                        }
                    }
                }
            ]

        }>
        </Navigation>
    )
}