import React from 'react'
import '../../styles/About.css'
import heroImage from '../../images/heroImage.png'
import AboutContent from './AboutContent'

const About = ()=> {
    return (
        <div className="main-about">
            <div className="main-about-section">
                <img src={heroImage} className='hero-img' alt='Hero'/>
                <AboutContent />
            </div>
        </div>
    )
}

export default About
