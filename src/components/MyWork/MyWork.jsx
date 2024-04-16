import React from 'react'
import './MyWork.css'
import theme_img from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((data, index) => {

                    return <a href={data.w_link} target='_blank'><img key={index} src={data.w_img}></img></a>

                })}
            </div>

            <div className="mywork-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div>


        </div>
    )
}

export default MyWork
