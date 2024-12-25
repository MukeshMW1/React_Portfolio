import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profl.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {
  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: 3,
        // markers: true,
        start: "top 50%",
        end: "top -20%",
      },
    });
    t1.from(".about-title", {
      opacity: 0,
      y: 100,
      duration: 0.8,
    })
      .from(".about-para", {
        opacity: 0,
        y: 200,
        duration: 0.8,
      })
      .from(".about-left", {
        opacity: 0,
        scale: 0,
      })
      .from(
        ".about-skill p",
        {
          opacity: 0,
          duration: .8,
          stagger: 3,
          x: 40,
        },
        "skills"
      )
      .from(
        " hr",
        {
         width:"0%",
          opacity: 0,
          duration: .8,
          stagger: 3,
          x: 100,
        },
        "skills"
      )
      .from(".aa1,.about-achievements hr", {
        opacity: 0,
        duration: 0.8,
      });
  });

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern}></img>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced frontend developer with more than 3 years of
              experience where I have taken and completed a lot of projects.
              <br />
              My passion for coding and development increases as I dive more
              into this world of tech, not only have I gone in depth of Web Dev
              but I have also some knowldge about Machine Learning.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Firebase</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>C and C++ </p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>Flask</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement aa1">
          <h1>3+</h1>
          <p>Yeras Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement aa1">
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement aa1">
          <h1>3+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
