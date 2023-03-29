
import { NavLink,Link,useNavigate,useLocation} from "react-router-dom";
import Logo from "/images/Logo.png";
import {connect} from 'react-redux'
import React, { useState,useEffect } from "react";
import NavLinks from "./NavLinks";
import LoginModal from "./LoginModal"; 
import {IonIcon} from "react-ion-icon";
const Navbar = ({location,basket,user,dispatch,fav,products}) => {

  const {pathname}=useLocation()
  const nav=useNavigate()
  const [open, setOpen] = useState(false);
  const [modal,setModal]=useState(false)
  const [userName,setUserName]=useState("")
  const [categoryId, setCategoryId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
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
useEffect(()=>{
  const localStorageData=window.localStorage.getItem("user")
  if(localStorageData){
    setUserName(localStorageData)
  }
},[])
const logOutFunc=()=>{
  window.localStorage.removeItem("access_token")
  window.localStorage.removeItem("user")
  nav('/login')
}
if (pathname === '/login' || pathname==='/register') {
  return null; // render nothing if current route is '/login'
}

const setProductsByCategoryId = (categoryId) => {
  return (dispatch) => {
      const url = `http://127.0.0.1:8080/equipment/listc/?category=&category__id=${categoryId}&category__name=&name=&description=`;
      fetch(url)
          .then((response) => response.json())
          .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data.results }))
          .catch((error) => console.error(error));
  };
};
const handleFilter = (event) => {
  const categoryId = event.target.getAttribute('data-id');
  dispatch(setProductsByCategoryId(categoryId));
};
// const filteredProducts = products.filter(product => {
//   return selectedCategory === '' || product.category.id === selectedCategory;
// });
const handleCategoryClick = (event, category) => {
  event.preventDefault();
  setSelectedCategory(category);

};
const filteredProducts = pathname === '/products' ? products : [];
  return  (
    <nav className="header-section bg-amber-100">
    <LoginModal/>
      
    <div className="navbar-container w-11/12 m-auto h-20 flex items-center font-medium justify-around">
      <div className="logo-menu z-50 p-5 md:w-auto w-full flex justify-between">
        <Link to='/'>
      <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
      </Link>
      <div className="menu-bar z-50 text-3xl  md:hidden " onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
      </div>
      
      <ul className="nav-ul md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        <li>
          <Link to="/" className="mynavbarli py-3 px-3 inline-block">
            Ana Səhifə
          </Link>
        </li>
        <NavLinks />
        {/* <li>  <Link end to="/xidmetler">Services</Link></li> */}
        {/* <li class="dropdown">
      <a href="#">Products</a>
      <ul className="dropdown-menu">
            {products.map((product) => (
              <li key={product.category.id}>
                <a
                  className={selectedCategory === product.category.id ? 'dropdown-item active' : 'dropdown-item'}
                  onClick={() => handleCategoryClick(product.category.id)}
                  href="#"
                >
                  {product.category.name}
                </a>
              </li>
            ))}
          </ul>
    </li> */}
      
        
        <li>  <Link className="mynavbarli" end to="/blog">Blog</Link></li>
        <li>  <Link className="mynavbarli" end to="/elaqe">Haqqımızda</Link></li>
       
       <li>
        {user? <h6 className="text-white text-base font-bold m-4">{user.toUpperCase()}</h6>:<i
                  onClick={() =>
                    dispatch({
                      type: "OPEN_MODAL",
                     
                    })
                  }
                  className="fa-solid fa-user"
                />}
                
              </li>
        <li className="nav-item">
        <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-basket-shopping"></i><sub>{basket.length ? basket.length:null}</sub></NavLink>
      </li>
       <li className="nav-item">
        <NavLink className="nav-links" end to="/fav"><i className="fa-solid fa-heart"></i><sub>{fav.length ? fav.length:null}</sub></NavLink>
      </li>
      {user?<li><button onClick={logOutFunc} className="logout-btn">Log Out</button></li>:null}
      </ul>
     
      {/* Mobile nav */}
      <ul
        className={` nav-mobile md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500
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
        <NavLink className="nav-links" end to="/wishlist"><i className="fa-solid fa-heart"></i></NavLink>
      </li>
      </ul>
      </div>
  </nav>
  );
};

 const t=(a)=>a;
 export default  (connect(t))(Navbar);