import { useRouter } from 'next/router';
import { projects } from "@/utils/projects";
import ProjectComponent from "@/components/ProjectComponent";

export default function ProjectDetails() {
    const router = useRouter();
    const project = projects.find(p => p.slug == router.query.slug);

    return <section>
        <span>{router.query.slug}</span>
        {project ?
        <ProjectComponent
            title={project.title}
            slug={project.slug}
            subtitle={project.subtitle}
            description={project.description}
            images={project.images}
            tags={project.tags}
        /> : <span>Project Not Found</span>}
    </section>
}