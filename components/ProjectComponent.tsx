import {Project} from "@/utils/projects";
import ProjectTag from "@/components/TagComponent";


export default function ProjectComponent(project: Project) {
    return <div>
        <h3 className='light'>{project.title}</h3>
        <h4 className='light'>{project.subtitle}</h4>

        <p className='light'>{project.description}</p>
        {project.tags.map((tag) => (
            <ProjectTag text={tag} />
        ))}
    </div>;
}