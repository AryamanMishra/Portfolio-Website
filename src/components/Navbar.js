import React, {useState,useEffect} from 'react'
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

    const [burg,setBurg] = useState(true)
    useEffect(()=> {
        localStorage.setItem('screenIndex', screenIndex)
    },[screenIndex])


    return (
        <div className='main-nav'>
            <Link to='/' className='home-link' onClick={()=>setScreenIndex(-1)}><h2>AM</h2></Link>
            <div className='routes'>
                {
                    navLinks.map((link,idx)=> {
                        return (
                            <Link 
                                key={idx}
                                to={'/' + link} 
                                className={`nav-links ${idx === screenIndex && 'active-screen'}`}
                                onClick={()=>setScreenIndex(idx)}
                            >
                                <h1>{link}</h1>
                            </Link>
                        )
                    })
                }
            </div>
            <button 
                className="nav-toggle"
                onClick={()=>setBurg(!burg)}
            >
                {burg ? <GiHamburgerMenu size={33}/> : <RxCross1 size={32}/>}
            </button>
        </div>
    )
}



export default Navbar
