import React from 'react'


const ProjectCard = ({project})=> {
    const {name,desc,tag} = project
    return (
        <p>{name}</p>
    )
}

export default ProjectCard
