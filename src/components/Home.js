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
                        <div className="underline" style={{width:'7.5em',height:'0.22em',marginTop:'-6em',marginBottom:'1.5em'}}></div>
                        <h1 style={{fontSize:"2.45em"}}>Hey there.. I am Aryaman</h1>
                        <p>Software Development Engineer</p>
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
                            size={32}
                            className='link-icon la'  
                        />
                        <BsGithub 
                            size={32}
                            className='link-icon'
                        />
                        <SiLeetcode 
                            size={32}
                            className='link-icon leet'
                        />
                        <SiGeeksforgeeks 
                            size={32}
                            className='link-icon gfg'
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home
