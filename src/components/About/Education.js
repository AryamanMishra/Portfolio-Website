import React, {useState} from 'react'
import education_details from '../../data/education_details'
import { MdAdsClick } from 'react-icons/md'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'


const Education = ()=> {

    const [eduIdx,setEduIdx] = useState(0)

    const {instName,tenor,degreeName,grade,courses} = education_details[eduIdx]

    const checkIndex = (idx) => {
		if (idx < 0)
			return education_details.length - 1
		if (idx >= education_details.length)
			return 0
		return idx
	}

    const previousEdu = ()=> {
		setEduIdx((index)=> {
			let newIndex = index - 1
			return checkIndex(newIndex)
		})
	}

	const nextEdu = ()=> {
		setEduIdx((index) => {
			let newIndex = index + 1
			return checkIndex(newIndex)
		})
	}


    return (
        <div className="main-education-section">
            <div className="education-title">
                <h2>Education</h2>
                <div className='education-underline'></div>
            </div>
            <div className="center-education">
                <div className="single-education">
                    <div className="education-name-div">
                        <h2>{instName}</h2>
                    </div>
                    <div className="education-degree-div">
                        <h4>{degreeName}</h4>
                        <h4>{tenor}</h4>
                    </div>
                   <div className="desc-edu">
                        <div className="single-desc-edu">
                            <MdAdsClick />
                            <p>Grade : {grade}</p>
                        </div>
                        <div className="single-desc-edu">
                            <MdAdsClick />
                            <p>Courses : {courses}</p>
                        </div>
                   </div>
                </div>
                <div className="edu-button-section">
                    <button onClick={()=>previousEdu()}>
                        <FaArrowLeft size={30} color='rgb(84, 130, 209)' />
                    </button>
                    <button onClick={()=>nextEdu()}>
                        <FaArrowRight size={30} color='rgb(84, 130, 209)'/> 
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Education
