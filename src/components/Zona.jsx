import React from 'react'

import { connect } from 'react-redux'
import {Link} from "react-router-dom"

function Zona({zona}) {
  
  return (
   <>
   {/* <Link className="tour-field" to={`/zona/${zona.id}`}>
    <img src={zona.image} alt="" />
    <div className="tour-info">
        <h1>{zona.name.slice(0,15)}...</h1>
        <p> {zona.description}</p>
    </div>
   </Link> */}
    <div className="blog-section flex-wrap">
                      

                            <Link key={zona.id} to={`/zona/${zona.id}`} className='blogpage-section'>

                                <div className="myblogs-container">
                                    <div className='blog-qutu'>
                                        <img src={zona.image} alt="" />
                                        <h1>{zona.name}</h1>
                                        <p>{zona.description.slice(0,150)}... .</p>
                                    </div>

                                </div>
                            </Link>


                    </div>
   </>
  )
}
const t=(a)=>a

export default Zona