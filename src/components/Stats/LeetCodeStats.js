import React from 'react'
import { MdAdsClick } from 'react-icons/md'
import { Chart } from "react-google-charts";


//pie
//total solved/total
//rating
//aceeptance rate

const RATING = 1622
const LeetCodeStats = ({leetStats})=> {
    
    const {totalSolved,totalQuestions,acceptanceRate,easySolved,hardSolved,mediumSolved} = leetStats

    const data = [
        ["Difficulty", "Problems Solved"],
        ["Easy", easySolved],
        ["Medium", mediumSolved],
        ["Hard", hardSolved]
    ];

    const options = {
        width: 400,
        height: 320,
        backgroundColor:{ fill:'transparent' },
        is3D: true,
        legend:'none',
        colors: ['green','orange','red'],
    };
    
    return (
        <div className="leetcode-stats-content-div">
            <div className="piechart-content">
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}  
                />
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
