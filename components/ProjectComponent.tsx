import {Project} from "@/utils/projects";
import ProjectTag from "@/components/TagComponent";
import Image from "next/image";


export default function ProjectComponent(project: Project) {
    return <div className='project'>
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

            <p className='light'>{project.description}</p>
        </div>
        <div className='project-image image-wrapper'>
            <span></span>
        </div>
    </div>;
}