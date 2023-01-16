import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
import { connect } from 'react-redux';
import Product from './Product';
function ProductsLand() {
   const [products,setProducts]=useState([])
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])

 useEffect(()=>{
fetch('https://fakestoreapi.com/products?limit=4')
.then((a)=>a.json())
.then((a)=>setProducts(a))
 },[])
  return (
    <>
    
    <section className="our-products">
        <div className="wrapper">
            <div className="products-header">
            <div className="item" data-aos="fade-up">
        <h1>Explore Our Products</h1>
        </div>
        <div id="line-products"></div>
        </div>
            <div className="products">
              {products.map((product)=>(
                <Product key={product.id} item={product}/>
              ))}
                
            </div>
        </div>

    </section>
    </>
  )
}
const t=(a)=>a
export default connect(t) (ProductsLand)