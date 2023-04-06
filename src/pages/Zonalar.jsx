import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Zona from '../components/Zona'
import Footer from '../components/Footer'
import {useState,useEffect} from "react"
function Zonalar({zonas,ztotalPages,dispatch}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([1]);
  const [categoryId, setCategoryId] = useState('');
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogName, setBlogName] = useState('');
  const [filteredProducts,setFilteredProducts]=useState([])
  const handleSearch=(e)=>{
    setBlogName(e.target.value)
    dispatch(setBlogsByName(blogName))
  }

  function setBlogsByName (blogName) {
    return(dispatch) => {
        const url = `http://127.0.0.1:8080/tour/DestinationList/?name=${blogName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => dispatch({ type: "SET_BLOGS", payload: data.results }))
        .catch(error => console.error(error));
    }
  }


  const handleFilter = (event) => {
    const categoryId = event.target.getAttribute('data-id');
    
    setCategoryId(categoryId);
    dispatch(setBlogsByCategoryId(categoryId));
    console.log(categoryId)
  };

  useEffect(()=>{
    let categoryDyn=zonas.filter((a)=>a.name==categoryId)
    setFilteredProducts(categoryDyn) 
},[categoryId])
console.log(filteredProducts)

  const allProducts = () => {
    setCategoryId("");
    setBlogName("");
    dispatch(setBlogsByName(""));
    dispatch(setBlogsByCategoryId(""));
}
 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNextPage = () => {
    if (currentPage < ztotalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  // Update displayed pages when total pages change
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= ztotalPages; i++) {
      pages.push(i);
    }
    setDisplayedPages(pages);
  }, [ztotalPages]);

  // Calculate the start and end indexes of the products to be displayed on the current page
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const productsToDisplay = zonas.slice(startIndex, endIndex);
  console.log(productsToDisplay)
  console.log(zonas)
  return (
   <>
    <div className='basket-image'>
        <img src="http://fastwpdemo.com/newwp/amping/wp-content/uploads/2022/03/page-title.jpg" alt="" />
        <div className='links'><NavLink end to="/">Home</NavLink> / <NavLink end to="/camperazileri">Tours</NavLink>

          <div className='text'>
            <h1>Tours</h1>

          </div>
        </div>
      </div>
      <div className="wrapper flex">
        <div className="blog-section ">
              {zonas.length > 0 ? (
                <div className="zona-container">
                  {filteredProducts.map((a) => (
                    <Zona key={a.id} zona={a} />
                  ))}
                </div>
              ) : (
                <div className="no-tours">
                  {zonas=== null ? (
                    <p>Loading tours...</p>
                  ) : (
                    <p>No tours found for selected date.</p>
                  )}
                </div>
              )}
            </div>
            
            <div className="blog-categories  ml-5">
                    <div className="search-button ">
                        <input value={blogName} onChange={ handleSearch} type="text" placeholder='Search Blogs...' />
                        <button className="search-icon df"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <h1>Category</h1>
                        <ul className='categories-ul'>
                            {zonas.map((blogg) => {
                                console.log(blogg); // add this line to inspect the blogg objects
                                return (
                                    <>
                                    <li data-id={blogg.name ? blogg.name.toString() : ""} onClick={handleFilter}>
                                        <i class="fa-solid fa-arrow-right"></i>
                                        {blogg.name}
                                    </li>
                                     <div id="category-line"></div>
                                     </>
                                );
                            })}
  <button onClick={allProducts}>Return To All Products.</button>
                        </ul>
                        </div>
            </div>
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
            <Footer/>
      </>
  )
}
const t = (a) => a
export default connect(t) (Zonalar)