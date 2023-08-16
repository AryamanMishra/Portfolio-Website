import React from 'react'

const Skill = ({skill,icon})=> {
    
    return (
        <div className="about-skill">
            <p>{skill}</p>
            {icon}
        </div>
    )
}

export default Skill
