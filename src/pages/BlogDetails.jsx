import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import { FaStar } from "react-icons/fa"
import StarRatings from 'react-star-ratings';
import { connect } from 'react-redux'
function BlogDetails({ user,blogs }) {
  
    let { id } = useParams()
    const [blog, setBlog] = useState({})
    console.log(blog)
    const [comment, setComment] = useState([])
  console.log(user)
  console.log(blogs)
    const [input, setInput] = useState({
        content: "",
        rating: 0,
        blog: id,
        user: window.localStorage.getItem("user_id"),
        // blog:blog.name,
        // user:user.user.username
    })
    const initialInputState = {
        content: "",
        rating: 0,
        blog: id,
        user: window.localStorage.getItem("user_id")
    };
    const resetInput = () => {
        setInput(initialInputState);
        setStar(0)
    };
    const [star, setStar] = useState(null)
    const [hover, setHover] = useState(null)
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/comment/blogdetail/${id}/`)
            .then((a) => a.json())
            .then((a) => {
                setBlog(a),
                    setComment(a.comment)
            }

            )
    }, [])
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleForm = async (e) => {
        e.preventDefault();
        const a = await fetch("http://127.0.0.1:8080/comment/create", {
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
    return (
        <>

            <div className='basket-image'>
                <img src="../../images/bg-cart.jpeg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink>

                    <div className='text'>
                        <h1>{blog.name}</h1>
                        <h2>Don't forget to double check your order</h2>
                    </div>
                </div>

            </div>
            <div className="detailed-blog ">
                <div className="wrapper flex justify-center align-center gap-10">
                    <div className="blog-detail">
                        <img src={blog.image} alt="" />
                        <h1>{blog.name}</h1>
                        <p>{blog.description}</p>
                    </div>

                  

                </div>
                <hr />
            </div>

            <div className="reviews-detailed-blogs">
            <h1 className='costumer-review'>Musteri deyerlendirmeleri</h1>
            <hr />
            {comment.length? <div className="wrapper">
                   
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
             

               </div>:<h6 className='text-center'>Komment yoxdur...</h6>}
               
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
const t=(a)=>a
export default connect(t) (BlogDetails)