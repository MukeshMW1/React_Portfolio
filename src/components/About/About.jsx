import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profl.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} ></img>

            </div>


            <div className="about-sections">

                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para"><p>I am an experienced frontend developer with more than 3 years of experience  where I have taken and completed a lot of projects.<br/>My passion for coding and development increases as I dive more into this world of tech, not only have I gone in depth of Web Dev but I have also some knowldge about Machine Learning.</p></div>

                    <div className="about-skills">
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Tailwind</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Firebase</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Express JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>C and C++ </p><hr style={{ width: "20%" }} /></div>
                        <div className="about-skill"><p>Flask</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Yeras Of Experience</p>

                </div>
                <hr />
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>Projects Completed</p>

                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Happy Clients</p>

                </div>

            </div>

        </div>
    )
}

export default About   
