export type Project = {
    title: string,
    slug: string,
    subtitle: string,
    description: string,
    demoLink?: string,
    repoLink: string,
    video?: string,
    tags: string[]
}

export const projects : Project[] = [
    {
        title: "City Cyclery",
        slug: "city-cyclery",
        subtitle: "Website Rebuild",
        description: "City Cyclery is a local bike shop in Windsor, ON. The project involved a small rebrand, and a new website. The site was built in NextJs with Typescript and used TailwindCSS for styles.\n",
        demoLink: 'https://city-cyclery.vercel.app/',
        repoLink: 'https://github.com/carbondesigned/CityCyclery',
        video: '/videos/citycyclery-demo.mp4',
        tags: [
            "Frontend", "NextJs", "Tailwind", "Typescript"
        ]
    },
    {
        title: "MC Route Manager",
        slug: "mc-route-manager",
        subtitle: "W.I.P. - Client Connection Router for Minecraft Servers",
        description: "MC Route Manager is a management system for a 3rd party tcp router for minecraft client connections. Built in Laravel, the system makes API calls to the router to manage routes. It adds extra functionality like persistent routes, route groups, garbage collection, toggleable and editable routes.",
        repoLink: 'https://github.com/aSouchereau/mcroute-manager',
        demoLink: 'https://mcrouter-demo.alexsouch.com/',
        video: "/videos/mcrouter-demo.mp4",
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker"
        ]
    },
    {
        title: "Linkboard",
        slug: "linkboard",
        subtitle: "W.I.P. - Self Hosted Personal Dashboard",
        description: "Linkboard is a self-hosted homepage for homelabbers and their users. It’s built in Laravel, and incorporates user authentication, a permissions system, a link sharing system, and custom themes.",
        repoLink: 'https://github.com/aSouchereau/linkboard',
        video: "/videos/linkboard-demo.mp4",
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker", "Open Source"
        ]
    }
]
