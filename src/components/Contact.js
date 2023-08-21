import React, { useState } from 'react'
import '../styles/Contact.css'
import {AiFillStar} from 'react-icons/ai'
import Swal from 'sweetalert2'


const Contact = ()=> {

	const [name,setName] = useState('')
	const [mail,setMail] = useState('')
	const [message,setMessage] = useState('')

	const handleSubmit = (event)=> {
		event.preventDefault()
		setName('')
		setMessage('')
		setMail('')
		Swal.fire({
			title: 'Form submitted successfully',
			icon: 'success',
			confirmButtonText: 'OK',
			customClass : {
				title: 'custom-title-class',
			}
		})
	}


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
				<div className="mail-contact">
					<p>Or reach out at : </p>  
					<a target='_blank' rel='noreferrer' href="mailto:aryaman.m09@gmail.com">aryaman.m09@gmail.com</a>
				</div>
				<form className="form-inputs" onSubmit={handleSubmit}>
					<input 
						type="text" 
						className='form-input' 
						placeholder='NAME' 
						name='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
						required
					/>
					<input 
						type="text" 
						className='form-input' 
						placeholder='MAIL' 
						name='mail'
						value={mail}
						onChange={(event) => setMail(event.target.value)}
						required
					/>
					<textarea 
						className='form-textarea' 
						placeholder='MESSAGE' 
						name='message'
						value={message}
						onChange={(event) => setMessage(event.target.value)}
						required
					/>
					<button className='form-submit-button'>
                        Submit
                    </button>
				</form>
			</div>
		</div>
	)
}

export default Contact
