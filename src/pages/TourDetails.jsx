import { connect } from 'react-redux'
import { useParams, NavLink, Link } from "react-router-dom"
import React, { useRef, useState, useEffect } from "react";
import Footer from '../components/Footer';
import Swal from 'sweetalert2'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../styles.css";
import { FaStar } from "react-icons/fa"
import StarRatings from 'react-star-ratings';
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
function TourDetails({ tour_detail, dispatch, user }) {
  let { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [inputValue, setInputValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const [star, setStar] = useState(null)
  const [hover, setHover] = useState(null)
  const [comment, setComment] = useState([])
  const [bookInput, setBookInput] = useState({
    name: "",
    surname: "",
    email: "",
    phone: 0,
    num_tickets: 0,
    totalValue: 0
  })
  const handleBookingInput = (e) => {
    setBookInput({ ...bookInput, [e.target.name]: e.target.value })
  }
  console.log(totalValue)
  console.log(bookInput)
  const [input, setInput] = useState({
    content: "",
    rating: 0,
    tour: id,
    user: window.localStorage.getItem("user_id"),
  })
  const initialInputState = {
    content: "",
    rating: 0,
    tour: id,
    user: window.localStorage.getItem("user_id")
  };
  const resetInput = () => {
    setInput(initialInputState);
    setStar(0)
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    fetch(`http://127.0.0.1:8080/tour/tour/${id}/`)
      .then((a) => a.json())
      .then((a) => {
        console.log(a.comment)
        console.log(a)
        setComment(a.comment)
      }

      )
  }, [])
  const handleForm = async (e) => {
    e.preventDefault();
    const a = await fetch("http://127.0.0.1:8080/comment/tccreate", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((a) => a.json())
      .then((a) => a);

  };
  // const handleBookForm = async (e) => {
  //   e.preventDefault()
  //   const data = await fetch("http://127.0.0.1:8080/comment/tccreate", {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(bookInput),
  //   })
  //     .then((data) => data.json())
  //     .then((data) => data)
  // }
  const handleBookForm = () => {
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
        fetch("http://127.0.0.1:8080/comment/tccreate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(bookInput),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Booking data:", data);
            setBookInput({
              name: "",
              surname: "",
              email: "",
              phone: 0,
              num_tickets: 0,
            });
            setTotalValue(0);
            Swal.fire(
              'Your request is accepted',
              'We will send invoice to your email',
              'success'
            );
          })
          .catch((error) => {
            console.error("Error submitting booking data:", error);
            Swal.fire(
              'Error submitting booking data',
              'Please try again later',
              'error'
            );
          });
      }
    });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/tour/tour/${id}/`)
      .then((a) => a.json())
      .then((a) => {
        dispatch({
          type: "SET_TOUR",
          payload: a
        }),
          setLoading(false)
      })
  }, [])
  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    // Calculate the total value and update the state
    setTotalValue(Number(bookInput.num_tickets) * tour_detail?.discount_price);

    // Update the bookInput state to include the totalValue
    setBookInput(prevState => ({
      ...prevState,
      totalValue: Number(bookInput.num_tickets) * tour_detail?.discount_price,
    }));
  }, [bookInput.num_tickets]);
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
                {tour_detail?.images?.map((a) => {

                  return (
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
                {tour_detail?.images?.map((a) => {

                  return (
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



                <input type="text" placeholder='First Name'
                  name='name'
                  id='name'
                  value={bookInput.name}
                  onChange={handleBookingInput}
                />
                <input type="text" placeholder='Last Name Name'
                  name='surname'
                  id='surname'
                  value={bookInput.surname}
                  onChange={handleBookingInput}
                />
                <input type="text" placeholder='Email'
                  name="email"
                  id='email'
                  value={bookInput.email}
                  onChange={handleBookingInput}
                />
                <input type="number" placeholder='Phone'
                  name="phone"
                  id='phone'
                  value={bookInput.phone}
                  onChange={handleBookingInput}
                />
                <div className="price-count df gap-9">

                  <input onChange={handleBookingInput}
                    name="num_tickets"
                    id='num_tickets'
                    value={bookInput.num_tickets}
                    type="number" />

                  <p>{bookInput.num_tickets}  × ${tour_detail?.discount_price}</p>
                </div>


                <p>Total:${totalValue ? totalValue : 0}</p>
                <div className="submit-booking df">
                  {/* <button className="btn-green" onClick={() => {
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
                        handleBookForm(); // Call the handleBookForm function
                        // window.location.reload();
                        Swal.fire(
                          'Your request is accepted',
                          'We will send invoice to your email',
                          'success'
                        )
                      }
                    })
                  }}>Book Now</button> */}
                  <button className='btn-green' onClick={handleBookForm}>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="description-tours">
        <div className="wrapper">
          <p>{tour_detail.description}</p>
        </div>
      </section>

      <div className="reviews-detailed-blogs">
        <h1 className='costumer-review'>Musteri deyerlendirmeleri</h1>
        <hr />
        {comment?.length ? <div className="wrapper">

          {comment?.map((comment) => (

            <div>
              <h1>{user.toUpperCase()}</h1>
              <StarRatings
                rating={comment.rating}
                starRatedColor="orange"
                starDimension="20px"
                starSpacing="5px"
              />
              <p>{comment.content}</p>
            </div>

          ))}


        </div> : <h6 className='text-center'>Komment yoxdur...</h6>}

      </div>
      <hr />
      <div className="add-review-blogs">
        <div className="wrapper">
          <h1>Leave a reply</h1>
          <form onSubmit={(e) => { handleForm(e), resetInput() }}>
            <label htmlFor="comment">Comment</label>
            <input className='comment-input' type="text"
              name="content"
              id='content'
              placeholder='Leave your comment'
              value={input.content}
              onChange={handleChange}
            />
            <p>Your rating *</p>
            <div className="star-layout">
              {[...Array(5)].map((a, i) => {
                const ratingValue = i + 1

                return (

                  <>

                    <label id="star">
                      <input type="radio" onClick={(e) => { setStar(ratingValue), handleChange(e) }} name='rating' id='star' value={ratingValue} />
                      <FaStar
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        color={ratingValue <= (star || hover) ? "#ffc107" : "#e4e5e9"} className='star-icon' />
                    </label>

                  </>
                )
              })}
            </div>
            {star && <p>Your Rating is {star}</p>}
            <button className='post-comment'>Post your comment</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}
const t = (a) => a
export default connect(t)(TourDetails)