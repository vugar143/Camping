import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"
import { useNavigate,NavLink } from 'react-router-dom';
function WhoWeAre() {
    const nav=useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])
    return (
        <>
            <main className='who-we-are'>
                <div className="bg-image-fog">

                </div>
                <div className="wrapper">
                    <div className="parts">
                    <div className="item" data-aos="fade-right">
                        <div className="info-part">
                            <div className="info-container">

                                <p className='adv-title'>WhO WE ARE </p>

                                <div className='row-line'></div>

                            </div>
                            <h1 className='subhead'>
                                More than an adventure, its a way of life
                            </h1>
                            {/* <p className='about-text'>Fermentum scelerisque efficitur nostra sociosqu augue elementum litora suscipit dui malesuada. Purus volutpat arcu felis vel libero luctus metus integer.
                           </p> */}
                           <NavLink className="btn-brown" end to="/elaqe">Explore</NavLink>
                        </div>
                        </div>
                        <div className="item" data-aos="zoom-in">
                        <div className="middle-part">
                            <img src="images/couple-hiking-mountain.jpeg" alt="" />
                        </div>
                        </div>
                        <div className="right-part">
                        <div className="item" data-aos="fade-down">
                            <img src="images/hotdog.jpeg" alt="" />
                            </div>
                            <div className="item" data-aos="fade-up">
                            <div className="widget-container">
                                <div className="widget">
                                    <div className="iconic"><i className="fa-solid fa-quote-left"></i></div>
                                    <p>
                                        Fill your life with adventures.
                                    </p>
                                    <h1>Heidi B. Smith</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default WhoWeAre