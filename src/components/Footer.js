import React from 'react'
import '../styles/Footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const Footer = ()=> {
    return (
        <footer className='main-footer'>
            <div className='footer-links'>
                <a href="https://github.com/AryamanMishra/Portfolio-Website" target='_blank' rel="noreferrer">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/aryaman-mishra-576527190/" target='_blank' rel="noreferrer">
                    <AiFillLinkedin />
                </a>
            </div>
            <h4>Made with <AiFillHeart color='red' size={19} style={{marginBottom:'-4px'}}/> in React</h4>
        </footer>
    )
}

export default Footer
