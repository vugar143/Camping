import React from 'react'
import { NavLink } from 'react-router-dom'
function Overlay() {
  return (
    <>
    <main className='overlay-bg-image'>
        <div className="wrapper">
            <div className="overlay-full">
            <div className="overlay-container df">
                <div id='line'></div>
                <p className='heading-top'>Enjoy The Activities</p>
                <div id='line'></div>
            </div>
            <h1 className='head-title'>Camp with your friends, build some memories</h1>
            <p className='subhead-title'>Lacinia bibendum curae maximus molestie tempor urna. Proin augue efficitur fermentum gravida duis pretium integer consectetur est ac sodales.</p>
            <NavLink end to="/camperazileri" className='btn-br'>Discover More</NavLink>
        </div>
        </div>
    </main>
    </>
  )
}

export default Overlay