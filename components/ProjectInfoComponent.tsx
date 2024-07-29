import React from "react";
import ReactPlayer from "react-player";

type ProjectInfoProps = {
    slug: string;
    text?: string[];
    video?: string;
}

export default function ProjectInfoComponent(props : ProjectInfoProps) {
    return <div id={props.slug + "-info"} className="modal-body">
                {props.text ?
                    props.text.map((paragraph) => (
                        <p key={props.slug}>{paragraph}</p>
                    ))
                    :
                    <></>
                }
                {props.video ?
                    <ReactPlayer
                        width="100%"
                        height="40vh"
                        controls={true}
                        url={props.video}
                        light={false}/>
                    :
                    <></>
                }
        </div>
}