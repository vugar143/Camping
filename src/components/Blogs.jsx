import React from 'react'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Blog from '../pages/Blog'
function Blogs({ dispatch, blogs }) {
    return (
        <>
            <section className='blog-main'>
                <div className="wrapper">
                    <div className="blog-heading">
                        <div className='head-text'>
                            <h1 className='first-text'>FROM OUR BLOG</h1>
                            <div id='line'></div>
                        </div>
                        <h1 className='title'>Latest Article</h1>
                    </div>
                    <div className="blog-container">
                    {blogs.map((blog) => (
                <Blog key={blog.id} blog={blog} />

              ))}
                        


                    </div>
                </div>
            </section>
        </>
    )
}
const t = (a) => a
export default connect(t)(Blogs)