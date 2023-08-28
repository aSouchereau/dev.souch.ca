import {Project} from "@/utils/projects";
import ProjectTag from "@/components/TagComponent";
import ButtonComponent from "@/components/ButtonComponent";
import {ArrowSquareOut, GitBranch, X} from "@phosphor-icons/react";
import ProjectInfoComponent from "@/components/ProjectInfoComponent";
import React from "react";
import Modal from "react-modal";

/* Dynamically Import React Player */
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });


// bind modal to appElement
Modal.setAppElement("#__next");

export default function ProjectComponent(project: Project) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <div className='project' id={project.slug}>
        <div className='project-video video-wrapper'>
            {project.video ?
                <ReactPlayer
                width="100%"
                height="40vh"
                controls={true}
                url={project.video}
                light={false}/>
                :
                <></>
            }

        </div>
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

            <p className='light'>
                {project.summary}<br />
                <a onClick={openModal}>
                    Learn More
                </a>
            </p>
            <div className='project-actions button-wrapper'>
                {project.demoLink ?
                    <ButtonComponent
                    icon={<ArrowSquareOut/>}
                    destination={project.demoLink}
                    buttonType='outline'
                >
                    Visit Demo
                </ButtonComponent>
                    :
                <></>
                }

                <ButtonComponent
                    icon={<GitBranch/>}
                    destination={project.repoLink}
                    buttonType='solid'
                >
                    View Code
                </ButtonComponent>
            </div>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel={project.title}
        >
            <ProjectInfoComponent
                title={project.title}
                slug={project.slug}
                text={project.description}
            />
            <button>
                <X onClick={closeModal}></X>
            </button>
        </Modal>

    </div>;
}