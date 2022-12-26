import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function PopularTours() {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])
    return (
        <>
            <main className='popular-tours'>
                <div className="bg-image"></div>
              
                <div className="wrapper">
                    <div className="head-text">
                        <div id='line'></div> <p className="first-text">
                            Select Your Adventure
                        </p><div id='line'></div>
                    </div>
                    <div className="subhead-text">
                        <h1 className='second-text'>Most Popular Tours</h1>
                        <div id='dark-line'></div>
                    </div>
                    <div className="carts">
                        <div className="item" data-aos="fade-left">
                            
                            <div className="cart">
                                <img src="images/cart.jpeg" alt="" />
                                <div className="cart-content">
                                    <h1 className='content-title'>Lakeside camping & activity</h1>
                                    <p className='content-price'>Start from 149$</p>
                                    <Button className='btn-transparent'>Explore</Button>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-left">
                            <div className="cart">
                                <img src="images/cart2.webp" alt="" />
                                <div className="cart-content">
                                    <h1 className='content-title'>Lakeside camping & activity</h1>
                                    <p className='content-price'>Start from 149$</p>
                                    <Button className='btn-transparent'>Explore</Button>
                                </div>
                            </div>
                        </div>

                        <div className="item" data-aos="fade-right">
                            <div className="cart">
                                <img src="images/cart3.jpeg" alt="" />
                                <div className="cart-content">
                                    <h1 className='content-title'>Lakeside camping & activity</h1>
                                    <p className='content-price'>Start from 149$</p>
                                    <Button className='btn-transparent'>Explore</Button>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-right">
                            <div className="cart">
                                <img src="images/cart3.jpeg" alt="" />
                                <div className="cart-content">
                                    <h1 className='content-title'>Lakeside camping & activity</h1>
                                    <p className='content-price'>Start from 149$</p>
                                    <Button className='btn-transparent'>Explore</Button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="btn-explore df"> <button className='btn-brown df' >Explore More</button>
                    </div>
                </div>

            </main>
        </>
    )
}

export default PopularTours