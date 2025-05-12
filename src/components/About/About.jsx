import React, { useState } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profl.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js';
ChartJs.register(ArcElement, Tooltip, Legend);
import { Doughnut } from 'react-chartjs-2';


gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {
  const [showChart,setShowChart] = useState(false);
 

  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: 2,
        // markers: true,
        start: "top 50%",
        end: "bottom bottom",
        onEnter:()=>{
          setShowChart(true);
        },
        onLeaveBack:()=>{
          setShowChart(false);
        }
      },
    });
    t1.from("#about-title", {
      opacity: 0,
      y: 100,
      duration: 0.8,
    })
      .from(".about-para", {
        opacity: 0,
        y: 100,
        duration: 0.8,
      })
      .from(".about-left", {
        opacity: 0,
        scale: 0,
      })
      .from(
        ".about-skills ",
        {
          opacity: 0,
          duration: .8,
          stagger: 3,
          x: 40,
        },
        "skills"
      )
      
      .from("#about-achievements", {
        opacity: 0,
        duration: 0.8,
      });
  });
  


const doughnutData = {
  labels:[
"PMERN",
"Tailwind",
"Github",
"GSAP",
"Python",
"Docker",
"Prisma",
"Firebase",
"Nest Js",

  ],
  datasets:[{
    label:'Level',
    data:[90,80,70,60,50,40,40,30,30],
    backgroundColor:[
      "#1E88E5", // Blue
      "#F4511E", // Deep Orange
      "#43A047", // Green
      "#FB8C00", // Orange
      "#8E24AA", // Purple
      "#3949AB", // Indigo
      "#00ACC1", // Cyan
      "#D81B60", // Pink
      "#FDD835"  // Yellow
    ],
    borderColor:"#fff",
    borderWidth:2,

  }]}
const options ={
  responsive:true,
plugins:{
  legend:false,
  title:{text:"Tech Stack",display:true,}

}
}


  return (
    <div id="about" className="about">
      <div className="about-title" id='about-title'>
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
              I am an experienced frontend developer with more than 3 years of project based
              experience where I have taken and completed a lot of projects.
              <br />
              My passion for coding and development increases as I dive more
              into this world of tech, not only have I gone in depth of Web Dev
              but I have also some knowldge about Machine Learning.
            </p>
          </div>

         
        </div>
        { showChart && 
        <div className="about-skills">
            <Doughnut data={doughnutData} options={options} />
          </div>
        }
      </div>
      <div className="about-achievements" id='about-achievements'>
        <div className="about-achievement aa1">
          <h1>3+</h1>
          <p>Years Project Experience</p>
        </div>
        <hr />
        <div className="about-achievement aa1">
          <h1>30+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement aa1">
          <h1>10+</h1>
          <p>Major  Porjects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
