import React from 'react'
import './MyWork.css'
import theme_img from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useState } from 'react'
const MyWork = () => {
    const [show, setShow] = useState(false)
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((data, index) => {

                    return <a href={data.w_link} target='#'><img key={index} src={data.w_img}></img></a>

                })}
            </div>

            {show ?

                <>
                    <div onClick={() => setShow(false)} className="mywork-showmore">
                        <p>Show Less</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                    <div className="show">

                        <h2><a href='https://github.com/MukeshMW1' target='_blank'>Githhub:Projects Repository</a></h2>
                        <h2><a href='https://leetcode.com/MukeshMW1/' target='_blank'>Leetcode :Leetcode Profile </a></h2>
                    </div>
                </> :
                <div onClick={() => setShow(true)} className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>}


        </div >
    )
}

export default MyWork
