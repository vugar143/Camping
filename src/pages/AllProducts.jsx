import React from 'react';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import SaleOffers from '../components/SaleOffers';
import Adventure from '../components/Adventure';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import { NavLink, useNavigate,useParams } from 'react-router-dom';

function CampLevazimat({ products, dispatch, ptotalPages }) {
  const category_name=useParams()
  console.log(category_name.category_name)
  console.log(products)
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([1]);
  const [categoryId, setCategoryId] = useState('');
  const [productName, setProductName] = useState('');
const [filteredProducts,setFilteredProducts]=useState([])
  const handleFilter = (event) => {
    const categoryId = event.target.getAttribute('data-id');
    
    setCategoryId(categoryId);
    dispatch(setBlogsByCategoryId(categoryId));
  };
  
  const setBlogsByCategoryId = (categoryId) => {
    return (dispatch) => {
      const url = `http://127.0.0.1:8080/equipment/listc/?category=&category__id=${categoryId}&category__name=&name=&description=`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data.results }))
        .catch((error) => console.error(error));
    };
  };

  const handleSearch = (e) => {
    const productName = e.target.value;
    setProductName(productName);
    dispatch(setProductsByName(productName));
  };
useEffect(()=>{
    let categoryDyn=products.filter((a)=>a.category.name==category_name.category_name)
    setFilteredProducts(categoryDyn) 
},[category_name])
console.log(filteredProducts)
  const setProductsByName = (productName) => {
    return (dispatch) => {
      const url = `http://127.0.0.1:8080/equipment/listc/?category=&category__id=&category__name=&name=${productName}&description=`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data.results }))
        .catch((error) => console.error(error));
    };
  };
  const allProducts = () => {
    setCategoryId("");
    setProductName("");
    dispatch(setProductsByName(""));
    dispatch(setBlogsByCategoryId(""));
  }
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if (currentPage < ptotalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  // Update displayed pages when total pages change
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= ptotalPages; i++) {
      pages.push(i);
    }
    setDisplayedPages(pages);
  }, [ptotalPages]);

  // Calculate the start and end indexes of the products to be displayed on


  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Update displayed pages when total pages change
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= ptotalPages; i++) {
      pages.push(i);
    }
    setDisplayedPages(pages);
  }, [ptotalPages]);

  // Calculate the start and end indexes of the products to be displayed on the current page
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const productsToDisplay = products.slice(startIndex, endIndex);
  console.log(productsToDisplay)
  console.log(products)
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
      <section className="category-products flex">
        <div className="wrapper">
          <div className="category-search">
            <div className="search-button df">
              <input value={productName} onChange={handleSearch} type="text" placeholder='Search Products...' />
              <button className="search-icon df"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="category-of-products">
              <div className="heading-category">
                <h1>Category</h1>
                <ul className='categories-ul'>
                  {products.map((product) => {
                    console.log(product); // add this line to inspect the blogg objects
                    return (
                      <>
                        <li data-id={product.category.id ? product.category.id.toString() : ""} onClick={handleFilter}>
                          <i class="fa-solid fa-arrow-right"></i>
                          {product.category.name}
                        </li>
                        <div id="category-line"></div>
                      </>
                    );
                  })}
                  <button onClick={allProducts}>Return to All Products</button>
                </ul>
                <p>{category_name.category_name}</p>
              </div>
            </div>
          </div>
          <div className='products-box'>
            <div className="products-container">
              <h1>All Products</h1>
              <div id="line-products"></div>
            </div>
            <div className="products">
              {productsToDisplay.map((product) => (
                <Product key={product.id} item={product} />

              ))}
            </div>
            {/* <div className='products'>
              {filteredProducts.map((a)=>(
                <Product key={a.id} item={a} />
              ))}
            </div> */}

          </div>

          {products.length < 1 && (
            <h1>Please wait...</h1>
          )}
 
        </div>
      
      </section>
      <div className="pagination flex gap-10">
            <button onClick={handlePreviousPage} className="prev">Evvelki</button>
            {displayedPages.map((page) => (
              <button
                id='page'
                key={page}
                onClick={() => handlePageClick(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage} className="next">Sonraki</button>
          </div>
      <Adventure />
      <WhyChooseUs />
      <Footer />

    </>

  )
}
const t = (a) => a
export default connect(t)(CampLevazimat)