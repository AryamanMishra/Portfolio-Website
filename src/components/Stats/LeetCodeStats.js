import React from 'react'
import { MdAdsClick } from 'react-icons/md'
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement,Tooltip} from 'chart.js'
Chart.register(ArcElement, Tooltip);


//pie
//total solved/total
//rating
//aceeptance rate

const RATING = 1622
const LeetCodeStats = ({leetStats})=> {
    
    const {totalSolved,totalQuestions,acceptanceRate,easySolved,hardSolved,mediumSolved} = leetStats


    const pieChartData = {
        labels: ["Easy", "Medium" ,"Hard"],
        datasets: [
          {
            label: '# of Questions',
            data: [20,25,5],
            backgroundColor: [
                "green",
                "orange",
                "red"
            ],
            hoverBackgroundColor: [
                "green",
                "orange",
                "red"
            ],
          },
        ],
    };
    
    return (
        <div className="leetcode-stats-content-div">
            <div className="piechart-content">
                <Doughnut 
                    data={pieChartData} 
                    
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
