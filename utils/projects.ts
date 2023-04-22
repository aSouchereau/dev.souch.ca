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
        description: "City Cyclery is a local bike shop in Windsor, ON. The project involved a small rebrand, and a new website. I was a part of a 4 person team for this project, and took on a project management role. We used Microsoft Project to create an overall timeline for the project, and a Github Project for development tasks. We built the site in NextJs with Typescript and used TailwindCSS for styles. The tasks were split mostly evenly, so we all got to solve a diverse set of problems. My main focus was on the events api and page.",
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
        description: "Linkboard is a self-hosted, open-source, personal dashboard. It is intended for use in homelabs, where administrators can specify private links to admin panels, and public ones for public facing services. It’s built completely in Laravel, however I have plans to rebuild the frontend in React.The project incorporates user authentication, a permissions system, a link sharing system, custom user-specific styles, and easy management.",
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
        description: "MC Route Manager is a management system built for a 3rd party router. The need for this came when I discovered a simple, bloat-free router by itzg on Github. I had used it for a few weeks and was happy with it. However, I felt like it lacked some features that could be solved by creating a management system on top of it.The system is built in Laravel and uses some bootstrap, but is otherwise entirely custom. It is currently available only as a docker image, but I plan on adding Kubernetes support.",
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
        description: "Hickory is a photo management tool for professional photographers. It is currently in very early development. It is being built in Laravel, and will have a react frontend. Hickory will include photos with support for multiple files, metadata management, automatic backups, post to 3rd party APIs, albums, geolocation, an extensive tagging system, and more.",
        images: [
            "/images/hero-small-640.jpg"
        ],
        tags: [
            "Fullstack", "Laravel", "React", "Docker"
        ]
    }
]
