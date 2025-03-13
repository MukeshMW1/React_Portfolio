import React from 'react'
import './Footer.css'
import theme_icon from '../../assets/theme_pattern.svg'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Footer = () => {
    useGSAP(()=>{

        let t1 = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:"#footer",
                    start:'top 500 ',
                    end:'bottom 400',
                    scrub:1
                }
            }
        )
        
        t1.from('#footer',{
            y:100,
            opacity:0,
            duration:'.4'
           
        })


    })














    return (
        <div className='footer' id='footer'>
            <div className='footer-top'>
                <div className="footer-top-left"
                >
                    <div className="footer-title">
                        <h1>MW</h1>
                        <img src={theme_icon}></img>
                    </div>
                    <p>I am a frontend develooper with more than 3 years of  project based experience where I have completed more than 30 projects.I am self learner where I have taken the help  of web for developing new things. </p>
                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type='email' placeholder="Enter yur Email" />
                    </div>

                    <div className="footer-subscribe">Subscribe</div>

                </div>
            </div>

            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© Mukesh Bhatta , All rights reserved.</p>

                <div className="footer-bottom-right">
                    <p>Terms of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p>
                </div>
            </div>


        </div>
    )
}

export default Footer
