import React from "react";

type Props = {
    children: React.ReactNode
}

export default function ProjectSection({children} : Props) {
    return <section id='project'>
        <div className='projects-container'>
            {children}
        </div>
    </section>
}