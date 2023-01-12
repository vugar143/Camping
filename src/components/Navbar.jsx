import React from 'react'
import {NavLink} from "react-router-dom"
import {useState,useEffect} from "react"
import {Button} from "react-bootstrap"
import {connect} from 'react-redux'
function Navbar({basket,dispatch}) {
  // $(window).on('scroll',function(){
  //   if($(window).scrollTop()){
  //     $('navbar').addClass('black')
  //   }
  //   else{
  //     $('navbar').removeClass('black')
  //   }
  // })
  const [click,setClick]=useState(false)
  const [button,setButton]=useState(true)
  const handleClick=()=>{
    setClick(!click)
  }
  const closeMobileMenu=()=>{
    setClick(false)
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
   <>
   <nav className="navbar">
    <div className="navbar-container">
        <NavLink onClick={closeMobileMenu} to="/" className="navbar-logo">Camp
        <i className='fab fa-typo3' /></NavLink>
    </div>
    <div onClick={handleClick} className='menu-icon'>
      <i className={click?"fa-solid fa-times":"fa-solid fa-bars"}></i>

    </div>
    <ul className={click?"nav-menu active":"nav-menu"}>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/zonalar">Zones</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/camperazileri">Camping Areas</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/camplevazimat">Camping tools</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/xidmet">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/blog">Blog</NavLink>
      </li>
      {button && <Button className='sign-up' variant='outline-primary' size="sm">Sign Up</Button>}
      <li className="nav-item">
        <NavLink className="nav-links-mobile" end to="/signup">Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-basket-shopping"></i><sub>{basket.length?basket.length:null}</sub></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-heart"></i></NavLink>
      </li>
    </ul>
   
   </nav>
   </>
  )
}
const t=(a)=>a
export default connect(t) (Navbar)