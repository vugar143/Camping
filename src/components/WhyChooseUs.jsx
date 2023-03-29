import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function WhyChooseUs() {
    useEffect(() => {
        AOS.init({ duration: 1300 });
    }, [])
    return (
        <>
            <section className='why-choose-us'>
                <div className='bg-image-map'></div>
                <div className="wrapper">
                    <div className="blocks">
                    <div className="item" data-aos="fade-right">
                        <div className="info-block">
                            <div className="info-block-container">
                                <div className='head-text'>
                                    <h1 className='first-text'>WHY CHOOSE US</h1>
                                    <div id='line'></div>
                                </div>
                                <h1 className='title'>Discover your real existence</h1>
                                <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div className="icon-box-wrapper">
                                    <span><i className="fa-solid fa-check"></i></span>
                                    <div className="icon-box-content">
                                        <h1 className='icon-box-title'>Original Product</h1>
                                        <p className='subtitle'>In sollicitudin metus fames lacus rutrum eget. Pede consectetur in pharetra massa orci.</p>
                                    </div>
                                </div>
                                <div className="icon-box-wrapper">
                                    <span><i className="fa-solid fa-check"></i></span>
                                    <div className="icon-box-content">
                                        <h1 className='icon-box-title'>Easy Payment</h1>
                                        <p className='subtitle'>In sollicitudin metus fames lacus rutrum eget. Pede consectetur in pharetra massa orci.</p>
                                    </div>
                                </div>
                                {/* <div className="icon-box-wrapper">
                                    <span><i className="fa-solid fa-check"></i></span>
                                    <div className="icon-box-content">
                                        <h1 className='icon-box-title'>Professional Expert</h1>
                                        <p className='subtitle'>In sollicitudin metus fames lacus rutrum eget. Pede consectetur in pharetra massa orci.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        </div>
                        <div className="item" data-aos="fade-left">
                        <div className="pic-block">
                            <div className="image-container">  
                             <img src="../../images/climbing-couples.jpeg" alt="" />
                            
                            
                            </div>
                            <div className='google-review'>
                                <img src="../../images/google-review.jpeg" alt="" />
                             </div>
                         
                        </div>
                        </div>
                        </div>
                    
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs