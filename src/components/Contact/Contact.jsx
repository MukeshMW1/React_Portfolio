import React, { useRef, useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {


    useGSAP(()=>{

        let t1 = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:"#contact",
                    start:'top 70',
                    end:'-800 center',
                    // markers:true,
                    scrub:2,
                    duration:1

                }
            }
        )
        
        t1.from('#contact-title',{
            y:100,
            opacity:0,
            duration:0.1
           
        })


        t1.from('#contact-left',{

            x:-100,
            opacity:0,
            duration:0.2
        },'con')
        t1.from('#contact-right',{

            x:100,
            opacity:0,
            duration:0.2
        },'con')
        
    })













    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')

    let state = (name.trim() !== '' && email.trim() !== '' && msg.trim() !== '')

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_EMAIL_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Email sent successfully");
        }
    };




    return (
        <div id='contact' className='contact' >
            <div className="contact-title" id='contact-title'>

                <h1>Get In Touch </h1>
                <img src={theme_pattern}></img>
            </div>

            <div className="contact-section" id='contact-section'>
                <div className="contact-left" id='contact-left'>
                    <h1>Lets'Talk</h1>
                    <p>I am currently available to take on new projects and challenges, so feel free to send me message about anything that you want to know.Feel free to reach. </p>
                    <div className="contact-details">

                        <div className="contact-detail"><img src={mail_icon} alt="" />
                            <p>mukeshbhattampb111@gmail.com</p>

                        </div>


                        <div className="contact-detail"><img src={call_icon} alt="" /><p>0_0_0_0_0_0</p>

                        </div>


                        <div className="contact-detail"><img src={location_icon} alt="" /><p>Remote Loacation</p>

                        </div>




                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right' id='contact-right' autoComplete='on'>
                    <label htmlFor='name'>Your Name</label>
                    <input id='name' type="text" name='name' placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} autoComplete='on' />
                    <label htmlFor='email'>Your Email</label>

                    <input id='email' type="email" placeholder='Enter your Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='on' />
                    <label htmlFor='msg'> Write your message here</label>
                    <textarea id='msg' name="message" rows="8" placeholder='Enter yur message' value={msg} onChange={(e) => setMsg(e.target.value)} autoComplete='on'></textarea>
                    {state ? <button type='submit' className="contact-submit" id='btn'>Submit Now</button> : null}

                </form>
            </div>

        </div>
    )
}

export default Contact
