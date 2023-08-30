type ProjectInfoProps = {
    slug: string;
    text: string[];
}

export default function ProjectInfoComponent(props : ProjectInfoProps) {
    return <div id={props.slug + "-info"} className="modal-body">
                {
                    props.text.map((paragraph) => (
                        <p key={props.slug}>{paragraph}</p>
                    ))
                }
        </div>
}