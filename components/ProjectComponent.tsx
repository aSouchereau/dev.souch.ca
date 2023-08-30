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

const customStyles = {
    content: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        justifyContent: 'space-between',
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '-20%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '0',
        border: 'none',
        background: 'rgb(var(--primary-blue-rgb))',
        padding: '2.5em 2em 6rem',
    },
};


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
                <a className='link'
                    onClick={openModal}>
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
            className={'info-modal'}
            overlayClassName={'modal-overlay'}
        >
            <div className='modal-header'>
                <h3 className='light'>{project.title}</h3>
                <button onClick={closeModal}>
                    <X />
                </button>
            </div>
            <ProjectInfoComponent
                slug={project.slug}
                text={project.description}
            />

        </Modal>

    </div>;
}