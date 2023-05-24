import {Project} from "@/utils/projects";
import ProjectTag from "@/components/TagComponent";
import Image from "next/image";


export default function ProjectPreviewComponent(project: Project) {
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
        <div className='project-image image-wrapper'>
            <Image src={project.images[0]}
                   alt={project.title + ' - ' + project.subtitle}
                   fill={true}
                   placeholder="blur"
                   blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8/P7/fwAJIAPCoBSd9wAAAABJRU5ErkJggg=="
                   loading="lazy"
                   style={ {objectFit: "cover"} }
            />
            <div className='test'></div>
        </div>
    </div>;
}