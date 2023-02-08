import React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

function Tour({products,dispatch,tour}) {
  
  return (
   <>
   <Link className="tour-field" to={`/tourdetails/${tour.id}`}>
    <img src={tour.main_product_image} alt="" />
    <div className="tour-sale">Sale!</div>
    <div className="tour-info">
        <h1>{tour.name}</h1>
        <p>{tour.price}</p>
    </div>
   </Link>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Tour)