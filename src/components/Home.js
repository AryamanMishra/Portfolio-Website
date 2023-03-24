import React from 'react'
import image from '../images/me-image.png'
import '../styles/Home.css'

const Home = ()=> {
    return (
        <div className='main-home'>
            <div className='center-home'>
                <img src={image} alt="Aryaman" className='myimage'/>
                <div className='center-home-content'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo nobis ut doloremque molestias qui temporibus, tenetur reiciendis dolorem exercitationem sequi rem dignissimos corrupti aliquid aperiam cum ullam. Est, libero?</p>
                </div>
            </div>  
        </div>
    )
}

export default Home
