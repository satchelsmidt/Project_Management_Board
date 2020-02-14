import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Extremely Creative Project Name - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ad deserunt corporis dolore harum eveniet numquam! Praesentium suscipit libero recusandae doloremque dicta corrupti, necessitatibus quibusdam delectus deserunt repudiandae laboriosam optio!
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Big Boar</div>
                    <div>2nd September, 123</div>
                </div>
            </div>
        </div>
    )
}
