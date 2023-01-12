import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
function ProductsLand() {
    const [products,setProducts]=useState([])
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])

   
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
                <div className="product">
                    <img src="/images/boots.jpeg" alt="" />
                    <div className="product-sale">Sale!</div>
                    <div className="product-info">
                    <h1>Trecking Backpack</h1>
                    <p>$150$</p>
                    <button className='btn-transparent'>Add To Cart</button>
                    </div>
                   

                </div>
                <div className="product">
                    <img src="/images/yellow-tent.jpeg" alt="" />
                    <div className="product-sale">Sale!</div>
                    <div className="product-info">
                    <h1>Trecking Backpack</h1>
                    <p>$150$</p>
                    <button className='btn-transparent'>Add To Cart</button>
                    </div>
                   

                </div>
                <div className="product">
                    <img src="/images/camping-bed.jpeg" alt="" />
                    <div className="product-sale">Sale!</div>
                    <div className="product-info">
                    <h1>Trecking Backpack</h1>
                    <p>$150$</p>
                    <button className='btn-transparent'>Add To Cart</button>
                    </div>
                   

                </div>
                <div className="product">
                    <img src="/images/backpack.jpeg" alt="" />
                    <div className="product-sale">Sale!</div>
                    <div className="product-info">
                    <h1>Trecking Backpack</h1>
                    <p>$150$</p>
                    <button className='btn-transparent'>Add To Cart</button>
                    </div>
                   

                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default ProductsLand