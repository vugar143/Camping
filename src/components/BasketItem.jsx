import React from 'react'
import { connect } from "react-redux"
function BasketItem({ products, item, basket, dispatch }) {

    let product = products.find((a) => a.id === item.id)
    let total = basket.reduce((acc, item) => acc + products.find((a) => a.id === item.id)?.price * item.count, 0)
    const remove = () => {
        let f = basket.filter((a) => a.id !== item.id)
        dispatch({
            type: "SET_BASKET",
            payload: [...f]
        })
        return
    }
    const increase = () => {
        item.count++
        dispatch({
            type: "SET_BASKET",
            payload: [...basket]
        })
    }
    const decrease = () => {
        item.count--
        if (item.count === 0) {
            let f = basket.filter((a) => a.id !== item.id)
            dispatch({
                type: "SET_BASKET",
                payload: [...f]
            })
            return
        }
        dispatch({
            type: "SET_BASKET",
            payload: [...basket]
        })
       

    }
    return (

        <>
            <tr>

                <td className='product-image'><img src={product.image} alt="" /></td>
                <td>{product.title.slice(0, 16)}...</td>
                <td>${product.price}</td>
                <td> <div className="operations df">
                    <button onClick={increase} className='inc-btn'>+</button>
                    <p>{item.count}</p>
                    <button onClick={decrease} className='dec-btn'>-</button>
                </div> </td>
                <td><h1 className='subtotal'>${(product.price * item.count).toFixed(2)}</h1></td>
                <td><button onClick={remove} className='remove'>Remove</button></td>
            </tr>


        </>
    )
}
const t = (a) => a
export default connect(t)(BasketItem)