
import { NavLink, Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Logo from "/images/Logo.png";
import { connect } from 'react-redux'
import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import LoginModal from "./LoginModal";
import { IonIcon } from "react-ion-icon";
const Navbar = ({ location, basket, user, dispatch, fav, products, tours }) => {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false)
  const [userName, setUserName] = useState("")
  const [categoryId, setCategoryId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(user)
  const handleModal = () => {
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
  useEffect(() => {
    const localStorageData = window.localStorage.getItem("user")
    if (localStorageData) {
      setUserName(localStorageData)
    }
  }, [])
  const logOutFunc = () => {
    window.localStorage.removeItem("access_token")
    window.localStorage.removeItem("user")
    nav('/login')
  }
  if (pathname === '/login' || pathname === '/register') {
    return null; // render nothing if current route is '/login'
  }
var a="hello";
var b="llo"
 var c=a-b
 console.log(c)

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
  return (
    <nav className="header-section bg-amber-100">
      <LoginModal />

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
              AzKamp
            </Link>
          </li>
          <li className="px-3 text-left md:cursor-pointer group">
            <NavLink className="text-lg font-semibold mynavbarli" to="/zonalar">
              Zonalar
            </NavLink>
        <div>
            <div className="absolute z-50 top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-2 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                   
                  {tours.map((a)=>(
                      <div>
                       <NavLink className="text-lg font-semibold sublinksli" to={`/category/${a.category.name}`}>{a.category.name}
                       {a.main_product_image&&  <img className="w-16 h-14" src={a.main_product_image} alt="" />}
                       </NavLink>
         
                      </div>
                    ))}
                  </div>
                </div>
                </div>
          </li>

          <li className="px-3 text-left md:cursor-pointer group">
            <NavLink className="text-lg font-semibold mynavbarli" to="/alltours">
              Aktivitelər
            </NavLink>
        <div>
            <div className="absolute z-50 top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-2 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                   
                  {tours.map((a)=>(
                      <div>
                       <NavLink className="text-lg font-semibold sublinksli" to={`/type/${a.type.name}`}>{a.type.name}
                        {a?.images[3].image&&<img className="w-16 h-14" src={a?.images[3].image} alt="" />}
                       </NavLink>
         
                      </div>
                    ))}
                  </div>
                </div>
                </div>
          </li>

          <li className="px-3 text-left md:cursor-pointer group">
            <NavLink className="text-lg font-semibold mynavbarli" to="/all">
            Mağaza
            </NavLink>
        <div>
            <div className="absolute z-50 top-14 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-2 bg-white rotate-45 "
                    ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                   
                  {products.map((a)=>(
                      <div>
                       <NavLink className="text-lg font-semibold sublinksli" to={`/pcategory/${a.category.name}`}>{a.category.name}
                       {a.main_product_image&&  <img className="w-16 h-14" src={a.main_product_image} alt="" />}
                       </NavLink>
         
                      </div>
                    ))}
                  </div>
                </div>
                </div>
          </li>
          <li>  <Link className="mynavbarli" end to="/blog">Blog</Link></li>
          <li>  <Link className="mynavbarli" end to="/elaqe">Haqqımızda</Link></li>

          {/* <li>
            {user ? <h6 className="text-white text-base font-bold m-4">{user.toUpperCase()}</h6> : <i
              onClick={() =>
                dispatch({
                  type: "OPEN_MODAL",

                })
              }
              className="fa-solid fa-user"
            />}

          </li> */}
           
    {user ? (
      <>
        <li className="h-12 w-10"   >
        <img className="w-7 h-12 cursor-pointer" src="/images/user-icon-up.svg" onMouseEnter={() => {setIsModalOpen(true)}} />
       
        </li>
      </>
    ) : (
      <img className="w-7 h-7" src="/images/user-icon-up.svg" onMouseEnter={() => dispatch({ type: "OPEN_MODAL" })}  />
    )}
    {isModalOpen && (
      <div className="modal-open">
         <button className="modal-btn-close" onClick={()=>setIsModalOpen(false)}><ion-icon name="close"></ion-icon></button>
        <p>{user}</p>
        <hr />
        <p>{user.email}</p>
        {user ? <li><button className="text-orange-700" onClick={logOutFunc} >Log Out</button></li> : null}
      </div>
    )}
  

           <li className="ket">
                <NavLink className="icons" to="/basket">
                  <i className="fa-solid fa-basket-shopping" />
                  <div className="props">{basket.length?basket.length:null}</div>
                </NavLink>
              </li>
              <li className="ket">
                <NavLink className="icons" to="/fav">
                  <i  className="fa-solid fa-heart" />
                  <div className="props">{fav.length?fav.length :null }</div>
                </NavLink>
              </li>
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
              Ana Səhifə
            </Link>
          </li>
          <NavLinks />
          <li>  <Link className="mynavbarli" end to="/blog">Blog</Link></li>
          <li>  <Link className="mynavbarli" end to="/elaqe">Haqqımızda</Link></li>

          <li className="nav-item">
            <NavLink className="nav-links" end to="/basket"><i className="fa-solid fa-basket-shopping"></i><sub>{basket?.length ? basket.length : null}</sub></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" end to="/wishlist"><i className="fa-solid fa-heart"></i></NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

const t = (a) => a;
export default (connect(t))(Navbar);