import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>Hello I'm Mukesh Bhatta , </span> a developer with a spirit of rising to  the  top. </h1>
            <p>I am a frontend developer from Nepal , with 3 years of self experience</p>

            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'> <button>Connect With Me</button></AnchorLink>
                <button>My Resume</button>
            </div>

        </div>
    )
}

export default Hero
