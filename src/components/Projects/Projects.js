import React from 'react'
import '../../styles/Projects.css'
import personal_projects  from '../../data/projects'

const Projects = ()=> {
    
    return (
        <div className="main-projects">
            <div className='title'>
                <h1>Personal Projects</h1>
                <div className='underline'></div>
			</div>
            <div className="center-projects">
                <div className='btn-container'>
                    {
                        personal_projects.map((project,index)=> {

                        })
                    }
				</div>
            </div>
        </div>
    )
}

export default Projects
