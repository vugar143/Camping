import React from 'react'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
import { connect} from 'react-redux';
import Product from '../components/Product';
import SaleOffers from '../components/SaleOffers'
import Adventure from '../components/Adventure'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';
import Details from './Details';
function CampLevazimat({products,dispatch}) {
  // const [products,setProducts]=useState([])
  useEffect(() => {
      AOS.init({ duration: 1300 });
  }, [])
  console.log(products)
  return (
    <>
      <div className='basket-image'>
            <img src="../../images/bg-cart.jpeg" alt="" />
            <div className='links'><NavLink end to="/">Home</NavLink> / Camping Tools
            
            <div className='text'>
                <h1>My Cart</h1>
                <h2>Don't forget to double check your order</h2>
                </div>
                </div>
           
            </div>
    <SaleOffers/>
    <section className='products'>
    {products.map((product)=>(
      <Product key={product.id} item={product}/>
     
    ))}
    
    </section>
    <Adventure/>
    <WhyChooseUs/>
    <Footer/>
    
    </>
    
  )
}
const t=(a)=>a
export default connect(t) (CampLevazimat)