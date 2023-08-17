import React from 'react'
import { MdAdsClick } from 'react-icons/md'


//pie
//total solved/total
//rating
//aceeptance rate

const RATING = 1622
const LeetCodeStats = ({leetStats})=> {
    
    const {totalSolved,totalQuestions,acceptanceRate,easySolved,hardSolved,mediumSolved} = leetStats

    
    return (
        <div className="leetcode-stats-content-div">
            <div className="piechart-content">
               
            </div>
            <div className="all-leetcode-stats-content">
                <div className="single-leetcode-content-item">
                    <MdAdsClick />
                    <p>Total Solved : {totalSolved} / {totalQuestions}</p>
                </div>
                <div className="single-leetcode-content-item">
                    <MdAdsClick />
                    <p>Rating : {RATING}</p>
                </div>
                <div className="single-leetcode-content-item">
                    <MdAdsClick />
                    <p>Acceptance Rate : {acceptanceRate}%</p>
                </div>
            </div>
            
        </div>
    )
}

export default LeetCodeStats
