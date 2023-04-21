import {Project} from "@/utils/projects";


export default function ProjectComponent(project: Project, light: boolean) {
    return <div>
        <h3 className={(light ? 'light' : '')}>{project.title}</h3>
        <h4 className={(light ? 'light' : '')}>{project.subtitle}</h4>

        <p>{project.description}</p>
    </div>;
}