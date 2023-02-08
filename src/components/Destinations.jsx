import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css"
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom"
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
          <SwiperSlide navigation="true" modules={[Navigation, Autoplay]}>
            <Link to="/lenkaran" className="zone"><img src="https://millidusunce.com/wp-content/uploads/2021/11/Lenkeran-kale....jpg" alt="" /><h1>Lenkaran</h1></Link></SwiperSlide>
          <SwiperSlide><Link title="Quba" to="/quba" className="zone"><img src="/public/images/quba-mountain.jpg" alt="" /><h1>Quba</h1></Link></SwiperSlide>
          <SwiperSlide><Link to="/qabala" className="zone"><img src="https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/9d/a2/78.jpg" alt="" /><h1>Qabala</h1></Link></SwiperSlide>
          <SwiperSlide><Link to="/shaki" className="zone"><img src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2018/01/sheki_khan_palace_main_faade.jpg" alt="" /><h1>Shaki</h1></Link></SwiperSlide>
          <SwiperSlide><Link to="/qarabagh" className="zone"><img src="https://sia.az/storage/2022/02/16/ua.jpg" alt="" /><h1>Qarabag</h1></Link></SwiperSlide>
          <SwiperSlide><Link to="/naxcivan" className="zone"><img src="https://azertag.az/files/galleryphoto/2016/3/1000x669/1477749297929529236_1000x669.jpg" alt="" /><h1>Naxcivan</h1></Link></SwiperSlide>

        </Swiper>
      </section>
    </>

  )
}

export default Destinations