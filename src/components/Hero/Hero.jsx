import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profl.jpg'
import { TypeAnimation } from 'react-type-animation';
import filePath from '../../../public/Resume.pdf'

const Hero = () => {

    return (
        <div id='home' className='hero'>
            <img src={profile_img}  alt=""   />
            <h1><span>Hello I'm Mukesh Bhatta , </span><TypeAnimation sequence={["a Frontend Dev...", 1000, "a Backend Dev...", 1000, "an App  Dev...", 1000, "an AI Dev...", 1000]} wrapper="span" speed={50} repeat={Infinity} />  </h1>
            <p>I am a frontend developer from Nepal , with 3 years of experience</p>

            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'> <button>Connect With Me</button></AnchorLink>
                <button><a href={filePath} download="resume.pdf">My Resume</a></button>
            </div>

        </div>
    )
}

export default Hero
