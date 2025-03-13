import React,{useRef} from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Services.css'
import services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Services = () => {

    const serviceRef = useRef('null');
    useGSAP(()=>{

        let t1 = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:"#service-title",
                    scrub:1
                }
            }
        )
        
        t1.from('#service-title',{
            y:100,
            opacity:0,
            duration:'.4'
           
        })


        t1.from('#service-container',{

            y:100,
            opacity:0,
            duration:'.4'
        })
        
    })


    return (
        <div id='services' ref={serviceRef} className='services'>

            <div className="services-title" id='service-title'>
                <h1>My Services</h1>
                <img src={theme_pattern}></img>
            </div>

            <div className="services-container" id='service-container'>
                {services_data.map((service, index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p className='desc'>{service.s_desc}</p>

                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" /> </div>
                    </div>


                })}
            </div>



        </div>
    )
}

export default Services
