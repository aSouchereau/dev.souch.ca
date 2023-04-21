import {Project} from "@/utils/projects";


export default function ProjectComponent(project: Project) {
    return <div>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>

        <p>{project.description}</p>
    </div>;
}