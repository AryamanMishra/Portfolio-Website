import React from 'react'
import '../../styles/Projects.css'
import {AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'

const ProjectCard = ({ project })=> {
    const {name,desc,img,githubLink,deployedLink} = project

    return (
        <div className='project-card'>
            <div className='project-card-inner'>
                <div className="project-card-front">
                    <img src={img} alt="img" className='projectImg'/>
                    <h2>{name}</h2>   
                </div>
                <div className="project-card-back">
                    <p>{desc}</p>
                    <div className='project-links'>
                        <a href={githubLink} target='_blank' rel="noreferrer">
                            <AiFillGithub color='black' size={25}/>
                        </a>
                        <a href={deployedLink} target='_blank' rel="noreferrer">
                            <BiLinkExternal color='black' size={25}/>
                        </a>
                    </div>
                </div>  
            </div>    
        </div>
    )
}

export default ProjectCard
