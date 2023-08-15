import React from 'react'
import '../../styles/Home.css'
import heroImage from '../../images/heroImage.png'
import Intro from './Intro'
import Experience from './Experience'


const Home = ()=> {
    return (
        <div className='main-home'>
            <div className="main-section">
                <img src={heroImage} className='hero-img' alt='Hero'/>
                <Intro />
            </div>
            <Experience />
        </div>
    )
}

export default Home
