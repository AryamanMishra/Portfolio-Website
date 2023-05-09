import React from 'react'
import '../styles/Navbar.css'
import { Outlet, Link } from "react-router-dom";


const Navbar = ()=> {
    return (
        <div className='main-nav'>
            <Link to='/' className='home-link'><h2>AM</h2></Link>
            <div className='routes'>
                <Link to='/about' className='nav-links'><h2>About</h2></Link>
                <Link to='/projects' className='nav-links'><h2>Projects</h2></Link>
                <Link to='/contact' className='nav-links'><h2>Contact</h2></Link>
            </div>
            <Outlet />
        </div>
    )
}



export default Navbar
