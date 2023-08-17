import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import LeetCodeStats from './LeetCodeStats';
import '../../styles/Stats.css'
import { AiFillStar } from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi'


const URL = "https://leetcode-stats-api.herokuapp.com/modest_aryaman09"
const Stats = ()=> {

    const [isLoading,setIsLoading] = useState(false);
    const [leetStats,setLeetStats] = useState({})

    const fetchData = async()=> {
        setIsLoading(true)
        try {
            const data = await fetch(URL)
            const leetStats = await data.json()
            setLeetStats(leetStats)
            setIsLoading(false)
        }
        catch(err) {
            console.log(err)
            setIsLoading(true)
        }
    }

    useEffect(()=> {
        fetchData()
    },[])
    return (
        <div className="main-stats">
            <div className="stats-center">
                <div className="stats-center-title">
                    <h2>DSA STATS</h2>
                    <div className="stats-underline"></div>
                </div>
                <div className="leetode-stats-div">
                    <div className="leetcode-stats-title">
                        <AiFillStar 
                            size={22}
                            color='gold'
                            className='stats-star-icon'
					    />
                        <h2>LeetCode</h2>
                        <a target='_blank' rel='noreferrer'href="https://leetcode.com/modest_aryaman09/" style={{marginLeft:"-1.75em",marginTop:'0.5em',cursor:'pointer'}}>
                            <BiLinkExternal 
                                size={23}
                                color='rgb(1, 91, 91)'
                            />
                        </a>
                        
                    </div>
                    {  isLoading ? <Loading /> : <LeetCodeStats leetStats={leetStats}/>}
                </div>
                
            </div>
        </div>
    )
}

export default Stats
