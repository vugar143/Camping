
import { NavLink,Link } from "react-router-dom";
import Logo from "/images/Logo.png";
import {connect} from 'react-redux'
import React, { useState,useEffect } from "react";
import NavLinks from "./NavLinks";
import LoginModal from "./LoginModal";
const Navbar = ({props,basket,dispatch}) => {
  console.log(props,dispatch)
  const [open, setOpen] = useState(false);
  const [modal,setModal]=useState(false)
  const handleModal=()=>{
    setModal(!modal)
  }
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 350
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
};
  return (
    <nav className="header-section d-none d-xl-block">
       <LoginModal/>
    <div className="navbar-container ">
     
      <div className="logo-menu z-50 md:w-auto w-full flex justify-between">
        <Link to='/'>
      <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
      </Link>
      <div className="menu-bar text-3xl hidden " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
      </div>
      <ul className="nav-ul md:flex items-center gap-8 font-[Poppins]">
        <li>
          <Link to="/" className="py-3 px-3 inline-block">
            Home
          </Link>
        </li>
        <NavLinks />
        <li>  <Link end to="/xidmetler">Services</Link></li>
        <li>  <Link end to="/blog">Blog</Link></li>
        <li>  <Link end to="/elaqe">Contact</Link></li>
       
       <li>
                <i
                  onClick={() =>
                    dispatch({
                      type: "OPEN_MODAL",
                    })
                  }
                  className="fa-solid fa-user"
                />
              </li>
        <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-basket-shopping"></i><sub>{basket.length ? basket.length:null}</sub></NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-heart"></i></NavLink>
      </li>
      </ul>
     
      {/* Mobile nav */}
      <ul
        className={` nav-mobile
       ${open ? "left-0" : "left-[-100%]"}
      `}
      >
        <li>
          <Link to="/" className="py-7 px-3 inline-block">
            Home
          </Link>
        </li>
        <NavLinks />
       
       
        <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-basket-shopping"></i><sub>{basket?.length?basket.length:null}</sub></NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-heart"></i></NavLink>
      </li>
      </ul>
    </div>
  </nav>
  );
};

 const t=(a)=>a
 export default connect(t) (Navbar)