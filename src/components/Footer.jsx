import React from 'react'

function Footer() {
  return (
    <>
    <footer className='footer'>
        <div className='wrapper'>
            <div className="newslatter-container df">
                <div className="description df ">
                    <h1 className='title'>Subscribe to our newsletter to get latest news on your inbox</h1>
                    <div className="vertical-line"></div>
                

                </div>
                <form action="" >
                    <input className='enter-your-email' type="text" placeholder='Enter Your Email' />
                    <input className='submit-email' type="submit" />
                </form>
            </div>
            <div className="footer-main df">
                 <div className='middle-part df'>
                <ul className='logo-icons'>
                    <li className='logo'><img src="/images/footer-logo.png" alt="" /></li>
                    <li className='text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p></li>
                    <li className='icons'>
                        <ul className='icons-container'>
                            <li className='icon'><i className="fa-brands fa-facebook-f"></i></li>
                            <li className='icon'><i className="fa-brands fa-twitter"></i></li>
                            <li className='icon'><i className="fa-brands fa-youtube"></i></li>
                            <li className='icon'><i className="fa-brands fa-instagram"></i></li>
                            <li className='icon'><i className="fa-brands fa-behance"></i></li>
                        </ul>
                    </li>
                </ul>
               
                <ul className='costumer-service'>
                    <li>Costumer Service</li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Order History</a></li>
                    <li><a href="">Newsletter</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Vouchers</a></li>

                </ul>
                <ul className='costumer-service'>
                    <li>Useful Links</li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Adventure</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Term Of Use</a></li>

                </ul>
                <ul className='reach-us'>
                    <li>Reach Us</li>
                    <li className='location df'><i className="fa-solid fa-location-pin"></i><p>Jln Cempaka Wangi No 22 <br /> Jakarta - Indonesia</p> </li>
                    <li className='phone df'><i className="fa-sharp fa-solid fa-phone"></i><p>+6221 2002 2012</p></li>
                    <li className='mail df'><i className="fa-solid fa-envelope"></i><p>hello@yourdomain.tld</p></li>

                </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer