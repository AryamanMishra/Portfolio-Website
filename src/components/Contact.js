import React from 'react'
import '../styles/Contact.css'
import {AiFillStar} from 'react-icons/ai'


const Contact = ()=> {
	return (
		<div className='main-contact'>
			<div className="contact-center">
				<div className="contact-center-title">
					<h2>Lets Connect</h2>
					<AiFillStar 
						size={32}
						color='gold'
						className='star-icon'
					/>
				</div>
				
				<div className="form-inputs">
					<input type="text" />
					<input type="text" />
					<input type="text" />
				</div>
			</div>
		</div>
	)
}

export default Contact
