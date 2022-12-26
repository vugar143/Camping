import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../styles.css"
import SearchBar from "./SearchBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
// import required modules
import { Navigation,Autoplay } from "swiper";

export default function App() {
  useEffect(() => {
    AOS.init({duration:1300});
  }, [])
  return (
    <>
     <div className="slider">
     
      <Swiper navigation={true} autoplay={true}  modules={[Navigation,Autoplay]} className="mySwiper">
      <div className="aos-continer">
      <div className="aos">
      <div className="aos-mid" data-aos="fade-right"> <p className="subtitle-slider">Connecting with nature</p> </div>
      <div className="aos-init" data-aos="fade-up"><h1 className="title-slider" >CHANGE THE <br />WAY YOU THINK</h1></div>
      </div>
      </div>
      <SearchBar/>
      <SwiperSlide><div className="my-swiper"><img src="/images/kamp.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="my-swiper"><img src="/images/kamp-r.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="my-swiper"><img src="/images/turkishcamp.jpeg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="my-swiper"><img src="/images/nohur.webp" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="my-swiper"><img src="/images/izmir.webp" alt="" /></div></SwiperSlide>
        
      </Swiper>
      
      </div>
    </>
  );
}