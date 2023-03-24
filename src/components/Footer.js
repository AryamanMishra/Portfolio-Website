import React from 'react'
import '../styles/Footer.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const Footer = ()=> {
    return (
        <footer className='main-footer'>
            <div className='links'>
                <a href="https://github.com/AryamanMishra" target='_blank' rel="noreferrer">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/aryaman-mishra-576527190/" target='_blank' rel="noreferrer">
                    <AiFillLinkedin />
                </a>
            </div>
            <p>Made with <AiFillHeart color='red' size={15}/> in React</p>
        </footer>
    )
}

export default Footer
