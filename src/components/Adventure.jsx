import React from 'react'
import { Button } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function Adventure() {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])
  return (
    <>
      <main className="adventure-layout">

        <div className="adventure-info">
        <div className="item" data-aos="fade-up">
          <div className="info-container">
          
              <p className='adv-title'>Go Adventure </p>
            
            <div className='row-line'></div>
          </div>
</div>
<div className="item" data-aos="fade-up">
          <h1 className='adv-subtitle'>Free your spirit, break the chains, Go camp!</h1>
          <p className='adv-tex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

          </p>
          <button className="btn-brown ">Discover More</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Adventure