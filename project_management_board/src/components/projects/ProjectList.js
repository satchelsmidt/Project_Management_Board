import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {

    return (
        <div className="project-list section">
            {/* use this format to ensure that IF we have projects, then we map all this stuff, and don't if we don't have projects */}
           { projects && projects.map(project=>{
               return(
                   <ProjectSummary project={project} key={project.id} />
               )
           })}
        </div>
    )
}

export default ProjectList