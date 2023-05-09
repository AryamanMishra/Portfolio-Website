import React from 'react'
import '../styles/Navbar.css'
import { Outlet, Link } from "react-router-dom";


const Navbar = ()=> {
    return (
        <div className='main-nav'>
            <div className='home-link'>
                <Link to='/' className='nav-links'><h2>AM</h2></Link>
            </div>
            <div className='routes'>
                <Link to='/about' className='nav-links'><h2>About</h2></Link>
                <Link to='/project' className='nav-links'><h2>Projects</h2></Link>
                <Link to='/about' className='nav-links'><h2>Contact</h2></Link>
            </div>
            <Outlet />
        </div>
    )
}



export default Navbar
