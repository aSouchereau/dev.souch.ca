import {Project} from "@/utils/projects";
import ProjectTag from "@/components/TagComponent";


export default function ProjectComponent(project: Project) {
    return <div className='project' id={project.slug}>
        <div className='project-content'>
            <h3 className='light'>{project.title}</h3>
            <h4 className='light'>{project.subtitle}</h4>
            <div className='tag-list'>
                {project.tags.map((tag) => (
                    <div key={tag}>
                        <ProjectTag text={tag} />
                    </div>
                ))}
            </div>

            <p className='light'>{project.summary}</p>
        </div>
    </div>;
}