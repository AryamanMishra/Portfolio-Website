import React, {useState} from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
import navLinks from '../../src/data/navLinks'

const Navbar = ()=> {
    const [screenIndex,setScreenIndex] = useState(0)

    return (
        <div className='main-nav'>
            <Link to='/' className='home-link'><h2>AM</h2></Link>
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
