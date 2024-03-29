import React from 'react'
import { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link,useNavigate} from 'react-router-dom'
import Footer from '../components/Footer'
import SaleOffers from '../components/SaleOffers'
function BlogPage({ blogs,dispatch }) {
    const nav=useNavigate()
    const [categoryId, setCategoryId] = useState('');
    const [allBlogs, setAllBlogs] = useState([]);
    const [blogName, setBlogName] = useState('');
    console.log(blogName)
  
    const handleFilter = (event) => {
        const categoryId = event.target.getAttribute('data-id');
        setCategoryId(categoryId)
        dispatch(setBlogsByCategoryId(categoryId));
        const url = `http://127.0.0.1:8080/comment/blog/?category=&category__id=${categoryId}&category__name=&name=&description=`;
        // send the API request using the URL
        console.log(url);
      }
    function setBlogsByCategoryId(categoryId) {
        return (dispatch) => {
          const url = `http://127.0.0.1:8080/comment/blog/?category=&category__id=${categoryId}&category__name=&name=&description=`;
          fetch(url)
            .then(response => response.json())
            .then(data => dispatch({ type: "SET_BLOGS", payload: data.results }))
            .catch(error => console.error(error));
        };
      }
      const handleSearch=(e)=>{
        setBlogName(e.target.value)
        dispatch(setBlogsByName(blogName))
      }
      function setBlogsByName (blogName) {
        return(dispatch) => {
            const url = `http://127.0.0.1:8080/comment/blog/?category=&category__id=&category__name=&name=${blogName}&description=`;
            fetch(url)
            .then(response => response.json())
            .then(data => dispatch({ type: "SET_BLOGS", payload: data.results }))
            .catch(error => console.error(error));
        }
      }
     
      const allProducts = () => {
        setCategoryId("");
        setBlogName("");
        dispatch(setBlogsByName(""));
        dispatch(setBlogsByCategoryId(""));
    }
    return (
        <>
            <div className='basket-image'>
                <img src="../../images/bg-cart.jpeg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink>

                    <div className='text'>
                        <h1>Blog & News</h1>

                    </div>
                </div>

            </div>

            <section className='' >
                <div className="wrapper flex">
                    <div className="blog-section">
                        {blogs.map((blog) => (

                            <Link key={blog.id} to={`/blogdetails/${blog.id}`} className='blogpage-section'>

                                <div className="myblogs-container">
                                    <div className='blog-qutu'>
                                        <img src={blog.image} alt="" />
                                        <h1>{blog.name}</h1>
                                        <p>{blog.description.slice(0,150)}... .</p>
                                    </div>

                                </div>
                            </Link>


                        ))}
                    </div>
                   
                    <div className="blog-categories  ml-5">
                    <div className="search-button ">
                        <input value={blogName} onChange={ handleSearch} type="text" placeholder='Search Blogs...' />
                        <button className="search-icon df"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <h1>Category</h1>
                        <ul className='categories-ul'>
                            {blogs.map((blogg) => {
                                console.log(blogg); // add this line to inspect the blogg objects
                                return (
                                    <>
                                    <li data-id={blogg.category.id ? blogg.category.id.toString() : ""} onClick={handleFilter}>
                                        <i class="fa-solid fa-arrow-right"></i>
                                        {blogg.category.name}
                                    </li>
                                     <div id="category-line"></div>
                                     </>
                                );
                            })}
  <button onClick={allProducts}>Return To All Products.</button>
                        </ul>
                        <div className="item" >
            <div className="super-sale mt-12">
<img src="/images/shop-boots.jpeg" alt="" />
<div className="super-sale-info border">
    <h1 className="text-base" >Super Sale Up To OFF 50%</h1>
    <p className=''>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
    <NavLink end to="/camplevazimat" className='btn-transparent'>Shop Now</NavLink>
</div>
            </div>
            </div>
            <div className='hiking-coach'>
            <div className="artis">
                <div
                  className="artistimg"
                  
                >
                  <img src="https://cdn.bolvo.com/assets/viasun/team-item-3.jpg" />
                </div>
                <div className="artisttext">
                  <h1>Hiking Coach</h1>
                  <p>Nunc class nec habitasse vel nullam at tempus. Semper eget placerat dictum egestas ut tempus aenean cras lectus mollis.</p>
                </div>
              </div>
              </div>
                    </div>
                   
                </div>
                
            </section>
            <Footer />
        </>
    )
}
const t = (a) => a
export default connect(t)(BlogPage)