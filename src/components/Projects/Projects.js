import React, {useState} from 'react'
import '../../styles/Projects.css'
import personal_projects  from '../../data/projects'
import ProjectCard from './ProjectCard'
import projectTags from '../../data/projectTags'
import { AnimatePresence, motion } from "framer-motion"



const Projects = ()=> {
    
    const [projectList,setProjectList] = useState(personal_projects)

    const [activeTagIndex,setActiveTagIndex] = useState(0)

    const filterList = (tag,idx)=> {
        setActiveTagIndex(idx)
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
                                        <button 
                                            className={`single-tag ${idx === activeTagIndex && 'active-tag'}`}  
                                            onClick={()=>filterList(tagObj.tag,idx)} 
                                        
                                        >
                                            {tagObj.name}
                                        </button>
                                    )
                                })
                            }
                    </div>

                    <div className='personal-projects-center'>
                        <AnimatePresence>
                        {
                            projectList.map((project,idx)=> {
                                return (
                                    <motion.div
                                        key={idx}
                                        layout
                                        initial={{ opacity:0 }}
                                        animate={{ opacity:1 }}
                                        exit={{ opacity:0 }}
                                    >
                                        <ProjectCard 
                                            key={project.id}
                                            project={project}
                                        />
                                    </motion.div>
                                )
                            })
                        }
                        </AnimatePresence>
                    </div>
				</div>
            </div>
        </div>
    )
}

export default Projects
