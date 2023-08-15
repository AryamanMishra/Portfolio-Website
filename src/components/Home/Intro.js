import React from 'react'
import {BsDownload,BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode,SiGeeksforgeeks} from 'react-icons/si'
import Resume from '../../data/Resume-Aryaman-Mishra.pdf'


const Intro = ()=> {
    return (
        <div className='intro'>
            <div className='title'>
                <div className="underline" style={{width:'7.5em',height:'0.22em',marginTop:'-6em',marginBottom:'1.5em'}}></div>
                <h1 style={{fontSize:"2.45em"}}>Hey there.. I am Aryaman</h1>
                <p>Software Development Engineer</p>
            </div>
            <div className="resume-section">
            
            <button className='resume-dl-button'>
                <a 
                    href={Resume}
                    download="Resume-Aryaman-Mishra"
                    target="_blank"
                    rel="noreferrer"
                >
                    <h3>RESUME</h3>
                    <BsDownload 
                        size={20}
                    />
                </a>
                
            </button>
                
            </div>
            <div className="main-page-links">
                <a 
                    href="https://www.linkedin.com/in/aryaman-mishra-576527190/" 
                    className='main-page-link-icon la'
                    target='_blank'
                    rel="noreferrer"
                >
                    <BsLinkedin 
                        size={34}
                    />
                </a>
                
                <a 
                    href="https://github.com/AryamanMishra"
                    className='main-page-link-icon gb'
                    target='_blank'
                    rel="noreferrer"
                >
                    <BsGithub 
                        size={34}
                    />
                </a>
                
                <a 
                    href="https://leetcode.com/modest_aryaman09/"
                    className='main-page-link-icon leet'
                    target='_blank'
                    rel="noreferrer"
                >
                    <SiLeetcode 
                        size={34}  
                    />
                </a>
                
                <a 
                    href="https://auth.geeksforgeeks.org/user/modest_aryaman09/practice/"
                    className='main-page-link-icon gfg'
                    target='_blank'
                    rel="noreferrer"
                >
                    <SiGeeksforgeeks 
                        size={34} 
                    />
                </a>
                
            </div>
        </div>
    )
}

export default Intro
