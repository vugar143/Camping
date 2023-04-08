import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css"
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom"
import TourDetails from "../pages/TourDetails";
import { connect } from "react-redux";
function Destinations({tours,zonas}) {
  return (

    <>
      <section className="destinations mb-16">
        <div className="head-text">
          <div id='line'></div> <p className="first-text">
            Find a Tour By
          </p><div id='line'></div>
        </div>
        <div className="subhead-text">
          <h1 className='second-text'>Destination</h1>
          {/* <div id='dark-line'></div> */}
        </div>

       
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
      
                className="zones"
              >
                  
                       
                 
            {zonas.map((a)=>(
              <>
              <SwiperSlide navigation="true" modules={[Navigation, Autoplay]}>
                
                <Link to={`category/${a.name}`} className="zone"><img src={a.image} alt="" /><h1>{a.name}</h1></Link></SwiperSlide>
              
              </>
            ))}
            
              
              </Swiper>
              
            
      </section>
    </>

  )
}
const t=(a)=>a
export default connect(t) (Destinations)