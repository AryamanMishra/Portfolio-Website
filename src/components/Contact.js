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
						size={30}
						color='rgb(28, 121, 184)'
						className='star-icon'
					/>
				</div>
				
				<div className="form-inputs">
					<input type="text" className='form-input' placeholder='NAME'/>
					<input type="text" className='form-input' placeholder='MAIL'/>
					<textarea className='form-textarea' placeholder='MESSAGE'></textarea>
					<button className='form-submit-button'>
                        Submit
                    </button>
				</div>
			</div>
		</div>
	)
}

export default Contact
