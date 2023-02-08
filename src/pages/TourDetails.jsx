import { connect } from 'react-redux'
import {useParams,NavLink,Link} from "react-router-dom"
import React, { useRef, useState,useEffect } from "react";
import Footer from '../components/Footer';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles.css";



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
function TourDetails({tour_detail,products,dispatch}) {
    let { id } = useParams()
    console.log({id})
    const [loading,setLoading]=useState(true)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [inputValue,setInputValue]=useState(0)
    const [totalValue,setTotalValue]=useState(0)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((a)=>a.json())
        .then((a)=>{
          
            dispatch({
                type:"SET_TOUR",
                payload:a
            }),
            setLoading(false)
        })
    },[])
const handleInput=(e)=>{
setInputValue(e.target.value)
}
useEffect(()=>{
    setTotalValue(inputValue * tour_detail.price)
})
  return (
   <>
     <div className='basket-image'>
                <img src="http://fastwpdemo.com/newwp/amping/wp-content/uploads/2022/03/page-title.jpg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink> / <NavLink end to="/camperazileri">Tours</NavLink> / Details

                    <div className='text'>
                        <h1>Tours</h1>
                      
                    </div>
                </div>
            </div>
            <section className="detail-section pt-9">
            <div className="wrapper flex gap-20">
                <div className="detailed-tour">
                <div className="detail-title">
                    <h1>{tour_detail.title}</h1>
                    <div className="detail-line"></div>
                </div>
                <div className="duration-category flex items-center gap-44">
                    <div className="duration">
                        <h1 className="text-2xl">Duration</h1>
                    </div>
                    <div className="detail-category">
                        <h1 className="text-2xl text-gray-500">Category:</h1>
                        <h1 className="text-2xl text-orange-600">{tour_detail.category}</h1>
                    </div>
                    <div className="location">
                        <h1 className="text-2xl text-lime-800">Location</h1>
                    </div>
                </div>
              <div className="swiper-container">
                <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        <SwiperSlide className='w-96'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
            
            <div className="book-tour">
                <div className="tour-price df">
                    <h1>Price:${tour_detail.price} </h1>
                </div>
                <div className="book-title df">
                    <h1>Book The Tour</h1>
                </div>
                <div className='df'>
                <div className="book-underline"></div>
                </div>

                <div className='df'>
                <div className="filling-form">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name Name' />
                <input type="text" placeholder='Email' />
                <input type="number" placeholder='Phone' />
                <div className="price-count df gap-9">
                <input onChange={handleInput}
                
                 type="number" />
                <p>Number ticket  × ${tour_detail.price}</p>
                </div>
                <p>Total:{totalValue}</p>
                <div className="submit-booking df">
                <button className='btn-green'>Booking Now</button>
                </div>
                </div>
                </div>
            </div>
            </div>
            </section>
            <section className="description-tours">
                <div className="wrapper">
              
                </div>
            </section>
           
<Footer/>
   </>
  )
}
const t=(a)=>a
export default connect(t) (TourDetails)