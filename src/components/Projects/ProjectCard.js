import React from 'react'
import '../../styles/Projects.css'


const ProjectCard = ({project})=> {
    const {name,desc,tag} = project
    return (
        <div className='project-card'>
            <p>{name}</p>
        </div>
    )
}

export default ProjectCard
