import React, { useState } from 'react'
import company_details from '../../data/company_details'
const Experience = ()=> {

    const [activeCompTagIndex,setActiveCompTagIndex] = useState(0)

    // const filterList = (comp,idx)=> {
    //     setActiveCompTagIndex(idx)
    //     if (idx == 0) {
    //         let copyList = personal_projects
    //         setProjectList(copyList.filter((project) => project.tag === 'react'))
    //     }
    //     else if (tag === 'rn') {
    //         let copyList = personal_projects
    //         setProjectList(copyList.filter((project) => project.tag === 'rn'))
    //     }
    //     else if (tag === 'node'){
    //         let copyList = personal_projects
    //         setProjectList(copyList.filter((project) => project.tag === 'node'))
    //     }
    //     else {
    //         setProjectList(personal_projects)
    //     }
    // }

    return (
        
        <div className="main-experience-section">
            <div className="experience-title">
                <h2>Experience</h2>
                <div className='underline' style={{width:'11em'}}></div>
            </div>
            <div className="center-experience">
                
            </div>
        </div>
    )
}

export default Experience
