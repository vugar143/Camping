import React from 'react'
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'
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
            
                <td className='product-image'><Link className="product" to={`/details/${item.id}`}> <img src={product.image} alt="" /></Link></td>
                <td><Link className="product" to={`/details/${item.id}`}>{product.title.slice(0, 16)}...</Link></td>
                <td>${product.price}</td>
                <td> <div className="operations df">
                    <button onClick={decrease} className='dec-btn'>-</button>
                    <p>{item.count}</p>
                    <button onClick={increase} className='inc-btn'>+</button>
                </div> </td>
                <td><h1 className='subtotal'>${(product.price * item.count).toFixed(2)}</h1></td>
                <td><button onClick={()=>{
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch({
                                type:"REMOVE_BASKET",
                                payload:item.id
                            })
                          Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                        }
                      })
                }} className='remove'><i className="fa-solid fa-trash"></i></button></td>
               
            </tr>


        </>
    )
}
const t = (a) => a
export default connect(t)(BasketItem)