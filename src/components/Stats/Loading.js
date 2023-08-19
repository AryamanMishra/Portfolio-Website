import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ()=> {
    return (
        <div className="leetcode-stats-loading-div">
            <Skeleton circle={true} width= '170px' height= '170px' style={{marginLeft:'41%',marginTop:'15px',marginBottom:'15px'}}/>
            <Skeleton count={3} style={{marginTop:'8px',marginBottom:'8px'}}/>
        </div>
    )
}
export default Loading
