import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import LeetCodeStats from './LeetCodeStats';
import '../../styles/Stats.css'
import { AiFillStar } from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi'
import { MdAdsClick } from 'react-icons/md';


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
                    <h2>DSA Stats</h2>
                    <div className="stats-underline"></div>
                </div>
                <div className="leetcode-stats-div">
                    <div className="leetcode-stats-title">
                        <AiFillStar 
                            size={22}
                            color='gold'
                            className='stats-star-icon'
					    />
                        <h2>LeetCode</h2>
                        <a target='_blank' rel='noreferrer'href="https://leetcode.com/modest_aryaman09/" style={{marginLeft:"-1.75em",marginTop:'0.5em',cursor:'pointer'}}>
                            <BiLinkExternal 
                                size={22}
                                color='rgb(1, 91, 91)'
                            />
                        </a>   
                    </div>
                    {  isLoading ? <Loading /> : <LeetCodeStats leetStats={leetStats}/>}
                    {/* <Loading /> */}
                </div>
                
                <div className="gfg-stats-div">
                    <div className="gfg-stats-title">
                        <AiFillStar 
                            size={22}
                            color='gold'
                            className='stats-star-icon'
					    />
                        <h2>Geeks For Geeks</h2>
                        <a target='_blank' rel='noreferrer' href="https://auth.geeksforgeeks.org/user/modest_aryaman09/practice" style={{marginLeft:"-1.75em",marginTop:'0.5em',cursor:'pointer'}}>
                            <BiLinkExternal 
                                size={22}
                                color='rgb(1, 91, 91)'
                            />
                        </a>   
                    </div>

                    <div className="all-gfg-stats-content">
                        <div className="single-gfg-content-item">
                            <MdAdsClick />
                            <p>Total Solved : 400+</p>
                        </div>
                        <div className="single-gfg-content-item">
                            <MdAdsClick />
                            <p>Overall Coding Score : 1248</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ach-center">
                <div className="ach-center-title">
                    <h2>Achievements</h2>
                    <div className="ach-underline"></div>
                </div>
                <div className="ach-content-div">
                    <div className="single-ach-content-item">
                        <MdAdsClick />
                        <p>Participated in Uber Hacktag Online Coding Challenge, achieved a coding score of 817, and reached level 9 out of 10</p>
                    </div>
                    <div className="single-ach-content-item">
                        <MdAdsClick />
                        <p>Contributed over 30 LeetCode solutions in java to an open source project - <a href="https://github.com/javadev/LeetCode-in-Java">LeetCode in Java</a></p>
                    </div>
                    <div className="single-ach-content-item">
                        <MdAdsClick />
                        <p>Secured Rank 3576 out of 27762 participants in Codeforces Global Round 10</p>
                    </div>
                    
                </div>
            </div>

            <div className="cert-center">
                <div className="cert-center-title">
                    <h2>Certifications</h2>
                    <div className="cert-underline"></div>
                </div>
                <div className="cert-content-div">

                    <div className="single-cert-content-item">
                        <MdAdsClick />
                        <p>Google Cloud Certified Associate Cloud Engineer | Google |</p>
                        <a 
                            target='_blank' rel='noreferrer'
                            href="https://google.accredible.com/ab45ea93-a5f6-45d1-97f8-6329ae9a9198?key=c375b25022b03fa8a383093b873585d0ed8a814ee4545ae65b091e5cc109a955"
                            style={{marginLeft:"-20px",marginTop:"4px"}}
                        >
                            <BiLinkExternal 
                                size={22}
                                color='rgb(1, 91, 91)'
                            />
                        </a>
                    </div>      

                    <div className="single-cert-content-item">
                        <MdAdsClick />
                        <p>AWS Cloud Practitioner Essentials | AWS | </p>
                        <a 
                            target='_blank' rel='noreferrer'
                            href="https://drive.google.com/file/d/1-L8GeIhlDCkdXsP3VRqEmswCgG6rdhrS/view"
                            style={{marginLeft:"-20px",marginTop:"4px"}}
                        >
                            <BiLinkExternal 
                                size={22}
                                color='rgb(1, 91, 91)'
                            />
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Stats
