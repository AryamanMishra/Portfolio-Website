import React, {useState,useEffect,useRef} from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import navLinks from '../../src/data/navLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross1} from 'react-icons/rx'


const getLocalStorage = ()=> {
	let screenIndex = localStorage.getItem('screenIndex')
	if (screenIndex) {
		return JSON.parse(localStorage.getItem('screenIndex'))
	}
	else {
		return -1
	}
}


const Navbar = ()=> {
    const [screenIndex,setScreenIndex] = useState(getLocalStorage())
    const [showNav,setShowNav] = useState(false)
    const navContainerRef = useRef(null)
	const navRef = useRef(null)

    useEffect(()=> {
        localStorage.setItem('screenIndex', screenIndex)
    },[screenIndex])


    useEffect(()=> {
		const navHeight = navRef.current.getBoundingClientRect().height;
		if (showNav) {
		    navContainerRef.current.style.height = `${navHeight}px`;
		}
		else {
			navContainerRef.current.style.height = '0px';
		}
	},[showNav])


    const handleNavClick = (idx)=> {
        setScreenIndex(idx)
        setShowNav(false)
    }

    return (
        <div className='main-nav'>
            <div className="home-link">
                <Link to='/' onClick={()=>setScreenIndex(-1)}><h2>AM</h2></Link>
            </div>
            
            <div className="routes-container" ref={navContainerRef}>
                <div className='routes' ref={navRef}>
                    {
                        navLinks.map((link,idx)=> {
                            return (
                                <Link 
                                    key={idx}
                                    to={'/' + link} 
                                    className={`nav-links ${idx === screenIndex && 'active-screen'}`}
                                    onClick={()=>handleNavClick(idx)}
                                >
                                    <h1>{link}</h1>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
                <button 
                    className="nav-toggle"
                    onClick={()=>setShowNav(!showNav)}
                >
                    {showNav === false? <GiHamburgerMenu /> :<RxCross1 />}
            </button>
        </div>
    )
}



export default Navbar
