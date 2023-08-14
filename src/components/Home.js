import React from 'react'
import '../styles/Home.css'
import heroImage from '../images/heroImage.png'
import {BsDownload,BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode,SiGeeksforgeeks} from 'react-icons/si'


const Home = ()=> {
    return (
        <div className='main-home'>
            <div className="main-section">
                <img src={heroImage} className='hero-img' alt='Hero'/>
                <div className='intro'>
                    <div className='title'>
                        <h1>Hey there.. I am Aryaman</h1>
                        <p>Software Developer</p>
                    </div>
                    <div className="resume-section">
                        <button>
                            <h3>RESUME</h3>
                            <BsDownload 
                                size={20}
                            />
                        </button>
                    </div>
                    <div className="links">
                        <BsLinkedin 
                            size={28}
                            className='link-icon'
                        />
                        <BsGithub 
                            size={28}
                            className='link-icon'
                        />
                        <SiLeetcode 
                            size={28}
                            className='link-icon'
                        />
                        <SiGeeksforgeeks 
                            size={28}
                            className='link-icon'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
