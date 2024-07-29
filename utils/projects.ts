export type Project = {
    title: string,
    slug: string,
    subtitle: string,
    summary: string,
    description?: string[],
    demoLink?: string,
    repoLink: string,
    video?: string,
    cover?: string,
    tags: string[]
}

export const projects : Project[] = [
    {
        title: "City Cyclery",
        slug: "city-cyclery",
        subtitle: "Website Rebuild",
        summary: "City Cyclery is a local bike shop in Windsor, ON. The project involved a small rebrand, and a new website. The site was built in NextJs with Typescript and used TailwindCSS for styles.\n",
        //description: [

        //],
        demoLink: 'https://city-cyclery.vercel.app/',
        repoLink: 'https://github.com/carbondesigned/CityCyclery',
        cover: '/images/covers/cc-lm-light.svg',
        video: '/videos/citycyclery-demo.mp4',
        tags: [
            "Frontend", "NextJs", "Tailwind", "Typescript"
        ]
    },
    {
        title: "souch.ca",
        slug: "souch-ca",
        subtitle: "Photo Gallery Website",
        summary: "souch.ca is my personal photography portfolio. The site is built with Vue3, using vite-ssg and Fancyapps for some ui components. It consumes the API from a self-hosted instance of Lychee Photo Manager to help with albums, content organization, and thumbnails.",
        demoLink: "https://souch.ca",
        repoLink: "https://github.com/aSouchereau/souch.ca",
        cover: "/images/covers/souch.ca_logomark-fullColour.png",
        tags: [
            "Frontend", "Vue", "Typescript", "Vite"
        ]
    },
    {
        title: "MC Route Manager",
        slug: "mc-route-manager",
        subtitle: "Client Connection Router for Minecraft Servers",
        summary: "MC Route Manager is a management system for a 3rd party tcp router for minecraft client connections. Built in Laravel, the system makes API calls to the router to manage routes. It adds extra functionality like persistent routes, route groups, garbage collection, toggleable and editable routes.",
        repoLink: 'https://github.com/aSouchereau/mcroute-manager',
        demoLink: 'https://mcrouter-demo.alexsouch.com/',
        cover: '/images/covers/mcrouter_logomark.png',
        video: "/videos/mcrouter-demo.mp4",
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker"
        ]
    },
    {
        title: "Linkboard",
        slug: "linkboard",
        subtitle: "Self Hosted Personal Dashboard",
        summary: "Linkboard is a self-hosted homepage for homelabbers and their users. It’s built in Laravel, and incorporates user authentication, a permissions system, a link sharing system, and custom themes.",
        repoLink: 'https://github.com/aSouchereau/linkboard',
        video: "/videos/linkboard-demo.mp4",
        tags: [
            "Fullstack", "Laravel", "Bootstrap", "Docker"
        ]
    }
]
