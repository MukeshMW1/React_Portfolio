import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import Mlogo from '../../assets/M3.gif'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

useGSAP(()=>{

   var t1 = gsap.timeline();
   t1.from('.logo',
   {
    duration:.6,
    y:100,
    
   }).from(" .nav-menu .anchor-link ",{
    opacity:0,
    duration:.4,
    stagger:.4,
    y:-50,
    ease:'bounce'
   }).from(".button",{
    x:100,
    opacity:0,
    duration:.6,
   })
})




    const [menu, setMenu] = useState("");
    const menuRef = useRef();

   

    const openMenu =  () => {
        menuRef.current.style.right = '0';

   
     


       
    }

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
    }
    return (
        <div className='navbar'>
            <img src={Mlogo} className='logo'></img>
            <img onClick={openMenu} src={menu_open} alt="" className='nav-mob-open' />

            <ul ref={menuRef} className='nav-menu'>
                <img onClick={closeMenu} src={menu_close} className='nav-mob-close' alt="" />


                <li>
                    <AnchorLink className='anchor-link' href='#home'> <p onClick={() => setMenu("home")}> Home</p></AnchorLink>{menu == "home" ? <img src={underline} /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about'> <p onClick={() => setMenu("about me")}> About Me</p></AnchorLink>{menu == "about me" ? <img src={underline} /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#services'>  <p onClick={() => setMenu("services")}> Services</p></AnchorLink>{menu == "services" ? <img src={underline} /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu == "portfolio" ? <img src={underline} /> : null}
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={() => setMenu("contact")}> Contact</p></AnchorLink>{menu == "contact" ? <img src={underline} /> : null}
                </li>
            </ul>

            <AnchorLink className='anchor-link button' offset={50} href='#contact'> <div className="nav-connect">
                <button>Connect With Me</button>
            </div></AnchorLink>

        </div >
    )
}

export default Navbar
