import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css"
import { Navigation,Autoplay } from "swiper";
function Destinations() {
  return (

<>
<section className="destinations">
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
      <SwiperSlide navigation="true" modules={[Navigation,Autoplay]}><div className="zone"><img src="/images/kamp.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/kamp-r.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/turkishcamp.jpeg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/kamp.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/kamp-r.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/turkishcamp.jpeg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/kamp.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/kamp-r.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="zone"><img src="/images/turkishcamp.jpeg" alt="" /></div></SwiperSlide>
      </Swiper>
      </section>
    </>
  
  )
}

export default Destinations