import React from 'react'
import './MyWork.css'
import theme_img from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const MyWork = () => {

useGSAP(()=>{

    let t1= gsap.timeline({
        scrollTrigger:{
            trigger:'#work-container',
            start:'top 400',
            end:'center 400',
            // markers:true,
            scrub:2
        }
    })
    gsap.from('#work-title',{
y:100,
opacity:0,
duration:'.4',
scrollTrigger:{
    trigger:'#work-container',
    start:'top 500',
    end:'center 200',
    // markers:true,
    scrub:2
}
    })

  t1.from('#work-container',{
    y:100,
    opacity:0,
    duration:'.4'
  },'work')  

  t1.fromTo('#work-btn',{
y:20,
opacity:0,
duration:'.2'
  },{
    opacity:1
  },'work')
})




    
    const [show, setShow] = useState(false)
    return (
        <div id='work' className='mywork'>
            <div className="mywork-title" id='work-title'>
                <h1>My Latest Work</h1>
                <img src={theme_img} alt="" />
            </div>
            <div className="mywork-container" id='work-container'>
                {mywork_data.map((data, index) => {

                    return <a href={data.w_link} target='_blank'><img key={index} src={data.w_img}></img></a>

                })}
            </div>

            {show ?

                <>
                 
                    <div className="show">

                        <h2><a href='https://github.com/MukeshMW1' target='_blank'>Githhub:Projects Repository</a></h2>
                        <h2><a href='https://leetcode.com/MukeshMW1/' target='_blank'>Leetcode :Leetcode Profile </a></h2>
                    </div>
                    <div onClick={() => setShow(false)} className="mywork-showmore">
                        <p>Show Less</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </> :
                <div onClick={() => setShow(true)} className="mywork-showmore" id='work-btn'>
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>}


        </div >
    )
}

export default MyWork
