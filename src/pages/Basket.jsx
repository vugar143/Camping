import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import BasketItem from '../components/BasketItem'
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
function Basket({ product, products, basket }) {
    let nav = useNavigate()
    let total = basket.reduce((acc, item) => acc + products.find((a) => a.id === item.id)?.price * item.count, 0)
   
    return (
        <>

            <div className='basket-image'>
                <img src="../../images/bg-cart.jpeg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink> / <NavLink end to="/camplevazimat">Camping Tools</NavLink>  / Cart

                    <div className='text'>
                        <h1>My Cart</h1>
                        <h2>Don't forget to double check your order</h2>
                    </div>
                </div>
            </div>

            <section className='basket-item'>
                {basket.length ? <table>
                    <thead>
                        <tr className='tr-radius'>

                            <th className='th-radius-left'>Product Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th >Total</th>
                            <th className='th-radius-right'>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length || product.length ? basket.map((a) =>
                            <BasketItem item={a} key={a.id} />
                        ) : <h1>Loading...</h1>
                        }
                        {total ? <h1 className='total'>Grand Total:${(total).toFixed(2)}</h1> : null}

                        <button className='btn-checkout'>Proceed To Checkout</button>

                    </tbody>
                </table> : <div><h1>Basket boşdur.Geri dönün  <NavLink end to="/all">Mağazaya</NavLink> </h1>
                   
                </div>}


            </section>

            <Footer />
        </>
    )
}
const t = (a) => a
export default connect(t)(Basket)