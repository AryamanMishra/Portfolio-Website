import React from 'react'
import '../styles/Navbar.css'

const Navbar = ()=> {
    return (
        <div className='main-nav'>
            <div className='home-link'>
                <h2 className=''>AM</h2>
            </div>
            <div className='routes'>
                <h2>About</h2>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}



export default Navbar
