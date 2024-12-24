import React from 'react'
import './Cursor.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cursor = () => {

useGSAP(()=>{
        var  cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove',(event)=>{

           gsap.to('.cursor',{
            x:event.x+20,
            y:event.y-10,
            duration:.3,
           })
        })
})

  return (
    <div className='cursor'>
      Hey !
    </div>
  )
}

export default Cursor
