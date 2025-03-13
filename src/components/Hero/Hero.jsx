import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import profile_img from '../../assets/profl.jpg'
import { TypeAnimation } from 'react-type-animation';
import filePath from '../../../public/Resume.pdf'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
useGSAP(()=>{
  let t1 = gsap.timeline({});

t1.from('.hero p,.hero h1',{
    opacity:0,
    duration:1,
    y:100
})

t1.fromTo(' #left  ',{
opacity:0,
duration:.2,

},{
    opacity:1
},'hero')

t1.fromTo(' #right  ',{

opacity:0,
duration:.2,

},
{
    opacity:1
},'hero')
})
    return (
        
        <div id='home' className='hero'>
            <h1><span>Hello I'm Mukesh Bhatta , </span><TypeAnimation sequence={["a Frontend Dev...", 1000, "a Backend Dev...", 1000, "an App  Dev...", 1000, "an AI Dev...", 1000]} wrapper="span" speed={50} repeat={Infinity} />  </h1>
            <p>I am a Software Engineer , with 3 years of project based experience</p>

            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact' id='left'> <button className='left'>Connect With Me</button></AnchorLink>
                <button className='right' id='right'><a href={filePath} download="resume.pdf">My Resume</a></button>
            </div>

        </div>
    )
}

export default Hero
