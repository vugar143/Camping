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
function CampLevazimat({products,dispatch}) {
  // const [products,setProducts]=useState([])
  useEffect(() => {
      AOS.init({ duration: 1300 });
  }, [])

  // useEffect(()=>{
  //     fetch('https://fakestoreapi.com/products/')
  //    .then((a)=>a.json())
  //    .then((a)=>setProducts(a))
  // },[])
  // console.log(products)
  return (
    <>
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