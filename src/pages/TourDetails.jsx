import { connect } from 'react-redux'
import {useParams,NavLink,Link} from "react-router-dom"
import React, { useRef, useState,useEffect } from "react";
import Footer from '../components/Footer';
import Swal from 'sweetalert2'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
function TourDetails({tour_detail,dispatch}) {
    let { id } = useParams()
    const [loading,setLoading]=useState(true)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [inputValue,setInputValue]=useState(0)
    const [totalValue,setTotalValue]=useState(0)
    useEffect(()=>{
        fetch(`http://127.0.0.1:8080/tour/tour/${id}/`)
        .then((a)=>a.json())
        .then((a)=>{
          console.log(a)
            dispatch({
                type:"SET_TOUR",
                payload:a
            }),
            setLoading(false)
        })
    },[])
    console.log(tour_detail)
const handleInput=(e)=>{
setInputValue(e.target.value)
}
useEffect(()=>{
    setTotalValue(inputValue * tour_detail?.discount_price)
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
                    <h1>{tour_detail?.name}</h1>
                    <div className="detail-line"></div>
                </div>
                <div className="duration-category flex items-center gap-44">
                    <div className="duration">
                        <h1 className="text-2xl text-stone-500">Duration</h1>
                        <h1 className="text-2xl text-orange-600">{tour_detail?.duration}</h1>
                    </div>
                    <div className="detail-category">
                        <h1 className="text-2xl text-gray-500">Category:</h1>
                        <h1 className="text-2xl text-orange-600">{tour_detail?.type?.name}</h1>
                    </div>
                    <div className="location">
                        <h1 className="text-2xl text-lime-800">Location</h1>
                        <h1 className="text-2xl text-orange-600">{tour_detail?.category?.name}</h1>
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
        {tour_detail?.images?.map((a)=>{
          console.log(a.image)
          return(
            <SwiperSlide className='w-96'>
            <img src={a.image} />
          </SwiperSlide>
          )
        })}
       
      
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
        {tour_detail?.images?.map((a)=>{
          console.log(a.image)
          return(
            <SwiperSlide className='w-96'>
            <img src={a.image} />
          </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
      </div>
            
            <div className="book-tour">
                <div className="tour-price df">
                    <h1>Price:${tour_detail?.discount_price} </h1>
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
                <p>Number ticket  × ${tour_detail?.discount_price}</p>
                </div>
                <p>Total:${totalValue}</p>
                <div className="submit-booking df">
                <button className="btn-green" onClick={()=>{
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Just one click beyond from your amazing tour",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, I accept it'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.reload();
                          Swal.fire(
                            'Your request is accepted',
                            'We will send invoice to your email',
                            'success'
                          )
                        }
                      })
                }} >Book Now</button>
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