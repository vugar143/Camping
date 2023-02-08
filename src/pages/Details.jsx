import React from 'react'
import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { useParams, useNavigate, NavLink } from "react-router-dom"
import Footer from '../components/Footer'
import {FaStar} from "react-icons/fa"
import { Link } from 'react-router-dom'
function Details({ product, basket, dispatch }) {

    let { id } = useParams()
    console.log({id})
    let nav = useNavigate()
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(true)
    const [star,setStar]=useState(null)
    const [hover,setHover]=useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((a) => a.json())
            .then((res) => {
                dispatch({
                    type: "SET_PRODUCT",
                    payload: res,
                }),
                    setLoading(false)
            })
    }, [])
    console.log(product)
    const check = basket?.find((a) => a.id == product?.id)
    console.log(typeof check)
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
        
    // }
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
                            <h1 className='title'>{product.title}</h1>
                            <p className='description'>{product.description}</p>
                            <h1 className='price'>Price: <span className='colorful-price'>${product.price}</span></h1>

                            <div className='operations df'>
                                <button className='inc-btn' onClick={() => changeCount(-1)} disabled={!t}>-</button>
                                <span><p>{t ? t.count : 0}</p></span>
                                <button className='dec-btn' onClick={() => changeCount(1)}>+</button>
                                <button className='btn-transparent' onClick={handleClick}>{check ? "Remove from Cart" : "Add to Cart"}</button>
                            </div>

                            <div id='details-line'></div>
                            <ul className='details-category'>
                                <li><h1>Category</h1></li>
                                <li><p>{product.category}</p></li>
                            </ul>
                        </div>
                        <div className="details-image">
                            <img src={product.image} alt="" />
                        </div>
                    </div>

                </div>
            </section>
            <div className="review-section">
                <ul  className="tabs">
                    <li onClick={() => setActive(true)} className='description-tab'> <Link activeStyle={{ backgroundColor: "blue" }} to="#">Description</Link></li>
                    <li onClick={() => setActive(false)} oclassName='review'><Link activeStyle={{ backgroundColor: "yellow" }} to="#">Review </Link></li>
                </ul>
                {active &&
                    <div className='description-layout'>
                        <div className="bg-image">

                        </div>
                        <div className="wrapper">
                            <div className="description-text">
                                <h1>Description</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga recusandae voluptatibus quasi provident eum aliquid, necessitatibus fugit nihil odit quidem explicabo officiis incidunt temporibus ullam exercitationem perferendis velit doloremque illum, harum dolores doloribus. Ex eos, ad earum incidunt unde voluptas ratione ea libero fuga dolore molestiae perferendis deleniti praesentium?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ullam omnis eum atque. Dolore, ducimus officia reprehenderit aut est fugit maxime quibusdam natus impedit id animi quo placeat velit consequuntur itaque incidunt adipisci quae beatae qui. Repellendus iure quaerat ipsam odit cum aut nostrum porro, suscipit minima a amet reiciendis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum porro exercitationem animi expedita a ab ipsam, incidunt praesentium deserunt consectetur dolores odio similique delectus facere culpa. Officiis ipsum tempore quas placeat quo animi cumque quod. Modi dolor debitis fugiat. Iste ad aut obcaecati in. Odio corporis vel totam animi eius?</p>
                            </div>
                        </div>
                    </div>
                }
                {!active &&
                    <div className="description-layout">
                        <div className="bg-image"></div>
                        <div className="wrapper">
                            <div className="description-text">
                                <h1>Review</h1>
                                <p>There are no reviews yet.</p>
                                <p>Be the first to review “Brown Ankle High Men Boots”
                                    Your email address will not be published. <br /> Required fields are marked *</p>
                                <p>Your rating *</p>
                               {[...Array(5)].map((a,i)=>{
                                const ratingValue=i+1
                                return(
                                    <>
                                    <label id="star">
                                        <input type="radio" onClick={()=>setStar(ratingValue)} name='rating' id='star' value={ratingValue} />
                                         <FaStar
                                         onMouseEnter={()=>setHover(ratingValue)}
                                         onMouseLeave={()=>setHover(null)}
                                         color={ratingValue<= (star || hover)? "#ffc107":"#e4e5e9"} className='star-icon'/>
                                        </label>
                                  
                                   </>
                                )
                               })}
                               {star&&<p>Your Rating is {star}</p>}
                                
                                <div className="comment-box">
                                <label htmlFor="comment"> Your review *
                                </label>
                                   <textArea id="comment"></textArea>
                                </div>
                                <div className="comment-box">
                                <label htmlFor="author">Name *</label>
                                <input type="text" id='author' />
                                </div>
                                <div className="comment-box">
                                <label htmlFor="author">Email *</label>
                                <input type="text" id='author' />
                                </div>
                                <input type="radio" id='save-me' />
                                <label htmlFor="save-me">Save my name, email, and website in this browser for the next time I comment.</label>
                                <button className='submit-email'>Submit</button>
                            </div>
                            
                        </div>
                    </div>
                }
            </div>
            <Footer />

        </>
    )

}
const t = (a) => a
export default connect(t)(Details)