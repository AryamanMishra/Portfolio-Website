import React, {useState,useEffect} from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import navLinks from '../../src/data/navLinks'


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
        </div>
    )
}



export default Navbar
