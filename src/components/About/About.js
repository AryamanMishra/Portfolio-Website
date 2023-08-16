import React from 'react'
import '../../styles/About.css'
import heroImage from '../../images/heroImage.png'
import AboutContent from './AboutContent'
import Education from './Education'

const About = ()=> {
    return (
        <div className="main-about">
            <div className="main-about-section">
                <img src={heroImage} className='hero-img-about' alt='Hero'/>
                <AboutContent />
            </div>
            <Education />
        </div>
    )
}

export default About
