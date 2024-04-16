import React from 'react'
import './Footer.css'
import theme_icon from '../../assets/theme_pattern.svg'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className="footer-top-left"
                >
                    <div className="footer-title">
                        <h1>MW</h1>
                        <img src={theme_icon}></img>
                    </div>
                    <p>I am a frontend develooper with more than 3 years of experience where I have completed more than 30 projects.I am self learner where I have taken the help  of online tutorials fro making new things. </p>
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
