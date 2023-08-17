import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ()=> {
    return (
        <div className="leetcode-stats-loading-div">
            <Skeleton count={4}/>
        </div>
    )
}
export default Loading
