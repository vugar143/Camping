import React from 'react'
import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { useParams, useNavigate, NavLink } from "react-router-dom"
import Footer from '../components/Footer'
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';
function Details({ product, basket, dispatch, user }) {
    const [mainProductImage, setMainProductImage] = useState(product.main_product_image);

    const handleImageClick = (event, image) => {
      event.preventDefault();
      setMainProductImage(image);
      console.log(111)
    };
    let { id } = useParams()
    console.log({ id })
    const [input, setInput] = useState({
        content: "",
        rating: 0,
        product: id,
        user: window.localStorage.getItem("user_id"),
        // blog:blog.name,
        // user:user.user.username
    })
    const initialInputState = {
        content: "",
        rating: 0,
        product: id,
        user: window.localStorage.getItem("user_id")
    };
    const resetInput = () => {
        setInput(initialInputState);
        setStar(0)
    };
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    let nav = useNavigate()
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(true)
    const [star, setStar] = useState(null)
    const [hover, setHover] = useState(null)
    const [comment, setComment] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/equipment/detail/${id}/`)
            .then((a) => a.json())
            .then((res) => {
                dispatch({
                    type: "SET_PRODUCT",
                    payload: res,
                }),
                    setLoading(false)
            })
    }, [])
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/equipment/detail/${id}/`)
            .then((a) => a.json())
            .then((a) => {

                setComment(a.comment)
            }

            )
    }, [])
    console.log(product)
    const check = basket?.find((a) => a.id == product?.id)
    // console.log(typeof check)
    const handleClick = () => {
        if (check) {
            let t = basket?.filter((a) => !a.id == product?.id)

            basket.map((a) => {
                dispatch({
                    type: "REMOVE_BASKET",
                    payload: a.id,
                })
            })
            return
        }
        dispatch({
            type: "SET_BASKET",
            payload: [...basket, {
                id: product.id,
                count: 1
            }]
        })
    }
    const changeCount = (count) => {

        let f = basket.find((a) => a.id === +id)
        if (f) {
            f.count += count;
            if (f.count === 0) {
                dispatch({
                    type: "REMOVE_BASKET",
                    payload: +id
                })
                return;
            }
        }
        else {
            basket = [...basket, { id: +id, count: 1 }]
        }
        dispatch({
            type: "SET_COUNT",
            payload: [...basket]
        })
    }
    let t = basket.find((a) => a.id === product.id)

    // const handleUl=(e)=>{
    //     e.target.classList.add("active")

    //     // }
    const handleForm = async (e) => {
        e.preventDefault();
        const a = await fetch("http://127.0.0.1:8080/comment/pccreate", {
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
        window.location.reload();
    };
    console.log(comment)
    return (
        <>

            <div className='basket-image'>
                <img src="../../images/bg-cart.jpeg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink> / <NavLink end to="/camplevazimat">Camping Tools</NavLink>  / Details

                    <div className='text'>
                        <h1>My Cart</h1>
                        <h2>Don't forget to double check your order</h2>
                    </div>
                </div>

            </div>
            <section className="details-layout">
                <div className="wrapper">
                    <div className="details">
                        <div className="details-info">

                            <h6 className='title'>{product.name}</h6>

                            <p className='description'>{product.description}</p>
                            <h1 className='price'>Price: <span className='price-before'>${product.price}</span> <span className='colorful-price'>${product.discount_price}</span></h1>

                            <div className='operations df'>
                                <button className='inc-btn' onClick={() => changeCount(-1)} disabled={!t}>-</button>
                                <span><p>{t ? t.count : 0}</p></span>
                                <button className='dec-btn' onClick={() => changeCount(1)}>+</button>
                                <button className='btn-transparent' onClick={handleClick}>{check ? "Remove from Cart" : "Add to Cart"}</button>
                            </div>

                            <div id='details-line'></div>
                            <ul className='details-category'>
                                <li><h1>Category</h1></li>
                                <li><p>{product.category?.name.slice(0, 20)}...</p></li>
                            </ul>


                        </div>
                        <div className='details-image'>
                            <img className='duration-75' src={mainProductImage?mainProductImage:product.main_product_image} alt={product.name} />
                            <div className='images flex'>
                           {product?.images?.map(image => (
                             <div className="image1">
        <img
        className='cursor-pointer'
          key={image.id}
          src={image.image}
          alt={product.name}
          onClick={(event) => handleImageClick(event, image.image)}
        />
         </div>
      ))}
     
                           </div>
                        </div>
                        

                    </div>

                </div>
            </section>

            <div className="reviews-detailed-blogs">
                <h1 className='costumer-review'>Musteri deyerlendirmeleri</h1>
                <hr />
                {comment.length ? <div className="wrapper">

                    {comment.map((comment) => (

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
export default connect(t)(Details)