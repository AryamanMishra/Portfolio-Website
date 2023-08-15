import React, { useState } from 'react'
import experience_details from '../../data/experience_details'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import { MdAdsClick } from 'react-icons/md'

const Experience = ()=> {

    const [expIdx,setExpIdx] = useState(0)

    const {id,companyName,title,tenor,desc} = experience_details[expIdx]

    const checkIndex = (idx) => {
		if (idx < 0)
			return experience_details.length - 1
		if (idx >= experience_details.length)
			return 0
		return idx
	}

    const previousExp = ()=> {
		setExpIdx((index)=> {
			let newIndex = index - 1
			return checkIndex(newIndex)
		})
	}

	const nextExp = ()=> {
		setExpIdx((index) => {
			let newIndex = index + 1
			return checkIndex(newIndex)
		})
	}
    return (
        <div className="main-experience-section">
            <div className="experience-title">
                <h2>Experience</h2>
                <div className='underline' style={{width:'11em'}}></div>
            </div>
            <div className="center-experience">
                <div className="single-experience">
                    <h2>{companyName}</h2>
                    <div className="exp-title-div">
                        <h4>{title}</h4>
                    </div>
                    
                    {/* <p style={{textAlign:'center'}}>{tenor}</p> */}
                    {
                        desc.map((d,idx) => {
                            return (
                                <div key={idx} className="desc-item">
                                    <MdAdsClick/>
                                    <p>{d}</p>
                                </div>
                                
                            )
                        })
                    }
                </div>
                <div className="exp-button-section">
                    <button onClick={()=>previousExp()}>
                        <FaArrowLeft size={30} color='rgb(84, 130, 209)' />
                    </button>
                    <button onClick={()=>nextExp()}>
                        <FaArrowRight size={30} color='rgb(84, 130, 209)'/> 
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Experience
