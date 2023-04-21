export type Project = {
    title: string,
    slug: string,
    subtitle: string,
    description: string,
    images: string[],
    tags: string[]
}

export const projects : Project[] = [
    {
        title: "City Cyclery",
        slug: "city-cyclery",
        subtitle: "Website Rebuild",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
            "/images/hero-small-640.jpg"
        ],
        tags: [
            "Frontend", "NextJs", "Tailwind", "Typescript"
        ]
    },
    {
        title: "Linkboard",
        slug: "linkboard",
        subtitle: "Self Hosted Personal Dashboard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
            "/images/hero-small-640.jpg"
        ],
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker", "Open Source"
        ]
    },
    {
        title: "MC Route Manager",
        slug: "mc-route-manager",
        subtitle: "Client Connection Router for Minecraft Servers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
            "/images/hero-small-640.jpg"
        ],
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker"
        ]
    },
    {
        title: "Hickory",
        slug: "hickory",
        subtitle: "Self Hosted Photo Management Tool",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [
            "/images/hero-small-640.jpg"
        ],
        tags: [
            "Fullstack", "Laravel", "React", "Docker"
        ]
    }
]
