import React from 'react'
import { NavLink } from 'react-router-dom'

function Activities() {
  return (
  <>
  <section className="activities">
    <div className="wrapper">
        <div className="act-text df">
            <div className="head-text df">
        <div id='line'></div> <p className="first-text">WHAT WE'RE OFFERING</p>  <div id='line'></div>
        </div>
            <h1 className='second-text'>Our Activities</h1>
        </div>
        <div className="act-boxes">
            <NavLink to="type/Kamping" className="act-box1">
                <div className="box-img">
                <img  src="/images/cart2.webp" alt="" />
                </div>
                <div className="absolute">
                <img className='bg-image' src="/images/bg-splash-white.png" alt="" 
            
                />
                <img className='bg-image2' src="/images/bg-splash-orange.png" alt="" />
             <i className='icon-tent fa-solid fa-tents'></i>
                </div>
                <div className="box-info">
                    <h1 className='second-text'>Camping</h1>
                    <p className='act-description'>There are not many of passages of lorem ipsum available alteration in osten 
                        some form.
                    </p>
                    <NavLink className='read-more' to="/type/Kamping">Read More <i className="fa-sharp fa-solid fa-arrow-right"></i></NavLink>
                    
                </div>
                
            </NavLink>
            <NavLink to="type/Hiking" className="act-box1">
                <div className="box-img">
                <img  src="/images/greens-bag-guy.jpeg" alt="" />
                </div>
                <div className="absolute">
                <img className='bg-image' src="/images/bg-splash-white.png" alt="" 
                
                />
                 <img className='bg-image2' src="/images/bg-splash-orange.png" alt="" />
                 <i className="fa-solid fa-parachute-box"></i>
                </div>
                <div className="box-info">
                    <h1 className='second-text'>Hiking</h1>
                    <p className='act-description'>Sed laoreet vitae justo non feugiat. Mauris faucibus ligula quis vulputate vestibulum volutpat.
                    </p>
                    <NavLink to="type/Hiking" className='read-more' href="/">Read More <i className="fa-sharp fa-solid fa-arrow-right"></i></NavLink>
                </div>
                
            </NavLink>
            <NavLink to="type/Yoga" className="act-box1">
                <div className="box-img">
                <img  src="/images/ismayil-3.jpeg" alt="" />
                </div>
                <div className="absolute">
                <img className='bg-image' src="/images/bg-splash-white.png" alt="" 
                
                />
                 <img className='bg-image2' src="/images/bg-splash-orange.png" alt="" />
                 <i className="fa-solid fa-sailboat"></i>
                </div>
                <div className="box-info">
                    <h1 className='second-text'>Yoga</h1>
                    <p className='act-description'>There are not many of passages of lorem ipsum available alteration in osten 
                        some form.
                    </p>
                    <NavLink to="type/Yoga" className='read-more' href="/">Read More <i className="fa-sharp fa-solid fa-arrow-right"></i></NavLink>
                </div>
                
            </NavLink>
       
        </div>
    </div>
  </section>
  </>
  )
}

export default Activities