import React from 'react'
import Skill from './Skill'
import skills from '../../data/skills'
import icons from '../../data/icons'

const AboutContent = ()=> {

    return (
        <div className="main-about-content">
            <div className="main-about-content-title">
                <h2>About Me</h2>
                <div className="about-underline"></div>
            </div>
            <div className="main-about-content-text">
                <p> I am Aryaman Mishra, a Computer Science Graduate from Shri G.S Institute of Technology and Science. I am a passionate software developer with experience in working on Front end development, Native Android Developement. I like to implement my learnings into real world projects and to make useful applications/websites out of them. I also have hands on experience with Cloud Computing services(namely GCP,AWS) and worked on real time data while building something resourceful out of it according to business needs. I have a good grasp over data structures and algorithms and I am always keen to continuously improve upon it through extensive practice . I love problem solving and I always aim to solve real world software engineering problems with any skill set I can work on. </p>
            </div>
            <div className="main-about-content-skills">
                {
                    skills.map((skill,idx)=> {
                        return <Skill key={idx} skill={skill} icon={icons[skill]}/>
                    })
                }
            </div>
        </div>
    )
}

export default AboutContent
