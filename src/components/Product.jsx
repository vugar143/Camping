import React from 'react'
import{connect} from 'react-redux'
import {Link} from 'react-router-dom'
function Product({ item,basket,dispatch }) {
  const check=basket.find((a)=>a.id===item.id)
  const handleClick=(e)=>{
    e.preventDefault()
    if(check){
        dispatch({
            type:"REMOVE_BASKET",
            payload:item.id,
        })
     return
    }
    dispatch({
      type:"SET_BASKET",
      payload:[...basket,{id:item.id,
      count:1
      }]
     })
  }

    return (
        <>
            <Link className="product" to={`/details/${item.id}`}>
                <img src={item.image} alt="" />
                <div className="product-sale">Sale!</div>
                <div className="product-info">
                    <h1>{item.title.slice(0, 6)}...</h1>
                    <p>{item.price}$</p>
                    <button className='btn-transparent' onClick={handleClick}>{check?"Remove from Cart":"Add to Cart"}</button>
                </div>
            </Link>
        </>

    )
}
const t=(a)=>a
export default connect(t) (Product)