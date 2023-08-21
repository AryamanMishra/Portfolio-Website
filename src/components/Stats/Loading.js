import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = ()=> {
    return (
        <div className="leetcode-stats-loading-div">
            <Skeleton className='loading-circle' circle={true} height= '160px' width='160px'/>
            <div className="line-skeleton-outer-div">
                <Skeleton className='loading-lines' height='15px' count={3}/>
            </div>
        </div>
    )
}
export default Loading
