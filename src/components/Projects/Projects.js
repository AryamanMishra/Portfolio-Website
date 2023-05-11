import React, {useState} from 'react'
import '../../styles/Projects.css'
import personal_projects  from '../../data/projects'
import ProjectCard from './ProjectCard'


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
                        <button onClick={()=>filterList('all')}>    All </button>    
                        <button onClick={()=>filterList('react')}> React </button>
                        <button onClick={()=>filterList('rn')}> React Native</button>
                        <button onClick={()=>filterList('node')}> Node</button>
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
