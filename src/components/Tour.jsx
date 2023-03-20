import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

function Tour({products,dispatch,tour}) {
  
  return (
   <>
   <Link className="tour-field" to={`/tour/${tour.id}`}>
    <img src={tour.main_product_image} alt="" />
    <div className="tour-sale">Sale!</div>
    <div className="tour-info">
        <h1>{tour.name.slice(0,15)}...</h1>
        <p> <span className='line-through text-xs'>${tour.price}</span> <span className='text-lg'>${tour.discount_price}</span></p>
    </div>
   </Link>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Tour)