import React, {useState} from 'react'
import '../../styles/Projects.css'
import personal_projects  from '../../data/projects'
import ProjectCard from './ProjectCard'
import projectTags from '../../data/projectTags'
import {FcRight} from 'react-icons/fc'


const Projects = ()=> {
    
    const [projectList,setProjectList] = useState(personal_projects)

   

    const filterList = (tag)=> {
        if (tag === 'react') {
            let copyList = personal_projects
            setProjectList(copyList.filter((project) => project.tag === 'react'))
        }
        else if (tag === 'rn') {
            let copyList = personal_projects
            setProjectList(copyList.filter((project) => project.tag === 'rn'))
        }
        else if (tag === 'node'){
            let copyList = personal_projects
            setProjectList(copyList.filter((project) => project.tag === 'node'))
        }
        else {
            setProjectList(personal_projects)
        }
    }

    return (
        <div className="main-projects">
            <div className='title'>
                <h1>Personal Projects</h1>
                <div className='underline'></div>
			</div>
            
            
            <div className="center-projects">
                <div className='personal-projects-container'>
                    <div className='project-tags'>
                        {
                            projectTags.map((tagObj,idx)=> {
                                return (
                                    <div 
                                        className='tag-wrapper'
                                        onClick={()=>filterList(tagObj.tag)}
                                    >
                                        <button className='single-tag' 
                                            key={idx}
                                        >
                                            {tagObj.name}
                                        </button>
                                         {/* <FcRight id='rightArrow'/> */}
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className='personal-projects-center'>
                        {
                            projectList.map((project,idx)=> {
                                return (
                                    <ProjectCard 
                                        key={project.id}
                                        project={project}
                                    />
                                )
                            })
                        }
                    </div>
				</div>
            </div>
        </div>
    )
}

export default Projects
