import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
function Blog({ blog }) {
  console.log(blog)
  return (
    <>
      <Link className="blog-box" to={`/blogdetails/${blog.id}`}>
        <div className="box-container">
          <div className="image-container">
            <div className="image-title">
              <p>{blog.category.name}</p>
            </div>
            <img src={blog.image} alt="" />
          </div>
          <div className="box-description">
            <div className="box-title">
              <h1 className='heading'>{blog.name}</h1>
            </div>
            <div className="box-subtitle">
              <p className='subheading'>{blog.description.slice(0,120)}...</p>
              <div className="line-bottom"></div>
            </div>
          </div>
          <div className="post-publish">
            <div className="post-date">
            <p className='mr-10'>{blog.created_at.slice(0,10)} </p>
            </div>
            <p>/</p>
            <div className="post-comment">
              <p className='ml-10'>{blog.numberofcomments} comments</p>
            </div>
          </div>



        </div>
      </Link>
    </>
  )
}
const t = (a) => a
export default connect(t)(Blog)