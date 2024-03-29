import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
function PopularTours({tours,tour}) {
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
                        {tours.slice(0,4).map((a)=>(
                            <Link className="item" data-aos="fade-right"  to={`/tour/${a?.id}`}>
                            <div className="cart">
                                <img src={a.main_product_image} alt="" />
                                <div className="cart-content">
                                    <h1 className='content-title'>{a.name}</h1>
                                    <p className='content-price'>From $ {a.discount_price}</p>
                                    <button className='btn-transparent'>Explore</button>
                                </div>
                            </div>
                        </Link>
                  
                        ))}
                          </div>
                    <div className="btn-explore df"> <NavLink end to="/alltours" className='btn-brown df' >Explore More</NavLink>
                    </div>
                </div>

            </main>
        </>
    )
}
const t=(a)=>a
export default connect(t) (PopularTours)