import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                    <div className="about-para"><p>I am an experienced frontend developer with more than 3 years of experience i.e. self where I have taken and completed a lot of projects.</p>
                        <p>My passion for codeing and development increases as I dive more into this world of tech, not only have I goen in depth of Web Dev but I have also some knowldge about Machine Learning.</p></div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Express JS</p><hr style={{ width: "30%" }} /></div>

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
