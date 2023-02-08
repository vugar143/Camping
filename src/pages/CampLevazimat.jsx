import React from 'react'
import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import { connect } from 'react-redux';
import Product from '../components/Product';
import SaleOffers from '../components/SaleOffers'
import Adventure from '../components/Adventure'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom';
import Details from './Details';
import FilteredProduct from "../components/FilteredProduct"
// import Category from '../components/Category';
function CampLevazimat({ products, dispatch }) {
  const [search,setSearch]=useState([])
  // let b=products.filter((a=>a.title.toLowerCase().includes(search)))
  // console.log(b)
  const [categories, setCategories] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryy, setCategoryy] = useState("")
  const [searchedProducts,setSearchProducts]=useState([])
  
  const [active, setActive] = useState("")
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, [])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((a) => a.json())
      .then((a) => setCategories(a))
  }, [])
  console.log(categories)

  //li-ye click olanda funksiyaya category parametri gelecek ve hemin parametri setcategory ve filterfunctiona oturecek.
  const handleChange = (category) => {
    setCategoryy(category);
    filterFunction(category);
    // setActive(category)
  }
  
  console.log(search)
  //funksiyaya text adli deyer gelecek,ve produclari filtirleyib productun.categorysi text deyerine beraber olanlari saxlayacaq ve
  //setfilteredproducts adiyla yadda saxlayacaq
  const filterFunction = (text) => {
    if (products.length > 1) {
      const filter = products.filter((product) => product.category === text);
      setFilteredProducts(filter);
    }
    else {
      console.log('no products to filter')
    }
  }
  const searchFunction=()=>{
    if(products.length>1){
      let b=products.filter((a=>a.title.toLowerCase().includes(search)))
      
    }
  }
  searchFunction()
     const returntoAllProducts=()=>{
        setActive('');
        setCategoryy('');
        setFilteredProducts([]);
    }
  console.log(filteredProducts)
  return (
    <>
      <div className='basket-image'>
        <img src="../../images/bg-cart.jpeg" alt="" />
        <div className='links'><NavLink end to="/">Home</NavLink> / Camping Tools

          <div className='text'>
            <h1>My Cart</h1>
            <h2>Don't forget to double check your order</h2>
          </div>
        </div>

      </div>
      <SaleOffers />
      <section className="category-products">
        <div className="wrapper">
          <div className="category-search">
            <div className="search-button df">
              <input value={search} onInput={(e)=>setSearch(e.target.value)} type="text" placeholder='Search products' />
              <button className="search-icon df"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="category-of-products">
              <div className="heading-category">
                <h1>Categories</h1>
              </div>
              <ul className='categories-ul'>
                {categories.map((category, index) => (<>
                  <li  key={index} category={category}
                    onClick={() => handleChange(category)}
                    className={category === active ? active : "deactive"}
                  ><i class="fa-solid fa-arrow-right"></i>{category}</li>
                  <div id="category-line"></div>
                  </>
                ))}
              </ul>
            </div>
          </div>
          {filteredProducts.length > 0 && (
            <div className='products-box'>
            <div className="products-container">
            <h1>{categoryy}</h1>
            <div id="line-products"></div>
            </div>
              <a href="javascript:void(0)" onClick={returntoAllProducts}>Return to All Products</a>
              <div className='products'>
                {filteredProducts.map((a)=>(
                  <FilteredProduct key={a.id} item={a}/>
                ))}
              </div>
            </div>
          )}
          {filteredProducts.length < 1 && (
            <div className='products-box'>
              <div className="products-container">
              <h1>All Products</h1>
              <div id="line-products"></div>
              </div>
              <div className="products">
              {products.map((product) => (
                <Product key={product.id} item={product} />

              ))}
              </div>
             
            </div>
          )}
          {products.length<1&&(
            <h1>Please wait...</h1>
          )}

        </div>
      </section>
      <Adventure />
      <WhyChooseUs />
      <Footer />

    </>

  )
}
const t = (a) => a
export default connect(t)(CampLevazimat)