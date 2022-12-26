import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react'
function SaleOffers() {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])
  return (
    <>
<section className="sale-offers">
    <div className="wrapper">
        <div className="sales">
        <div className="item" data-aos="fade-right">
            <div className="super-sale">
<img src="/images/shop-boots.jpeg" alt="" />
<div className="super-sale-info">
    <h1>Super Sale Up To OFF 50%</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
    <button className="btn-transparent">Shop Now</button>
</div>
            </div>
            </div>
            <div className="item" data-aos="fade-left">
            <div className="super-sale">
            <img src="/images/shop-couple.jpeg" alt="" />
                <div className="super-sale-info flex-start ">
            
            <h1>Get The Best Deal for Almost <br /> Everything</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
            <button className='btn-transparent'>Shop Now</button>
            </div>

            </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default SaleOffers