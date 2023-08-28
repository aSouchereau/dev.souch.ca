type ProjectInfoProps = {
    title: string;
    slug: string;
    text: string[];
}

export default function ProjectInfoComponent(props : ProjectInfoProps) {
    return <div id={props.slug + "-info"} className="info-modal">
            <h3 className='light'>{props.title}</h3>
            <div>
                {
                    props.text.map((paragraph) => (
                        <p key={props.slug}>{paragraph}</p>
                    ))
                }
            </div>
        </div>
}