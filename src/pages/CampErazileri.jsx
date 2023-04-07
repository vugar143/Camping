import React, { useState, useEffect } from 'react'
import { Link, NavLink,useParams } from "react-router-dom"
import { links } from "../components/MyLinks"
import Footer from "../components/Footer"
import { connect } from 'react-redux'
import Tour from '../components/Tour'
function CampErazileri({ tours, dispatch,totalPagess}) {
  const tour_type_name=useParams()
  const [tourName, setTourName] = useState('');
  const [eventCategory, setEventCategory] = useState("")
  const [eventType, setEventType] = useState("")
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
const [displayedPages, setDisplayedPages] = useState([1]);
const [filteredTours,setFilteredTours]=useState([])

  useEffect(()=>{
    let dynamicType=tours.filter((a)=>a.type.name==tour_type_name.tour_type_name)
    setFilteredTours(dynamicType)
  },[tour_type_name])
  console.log(filteredTours)
  // Update displayed pages when total pages change
useEffect(() => {
  const pages = [];
  for (let i = 1; i <= totalPagess; i++) {
  pages.push(i);
 
  }
  setDisplayedPages(pages);
  }, [totalPagess]);
  
const handleNextPage=()=>{
  if(currentPage<totalPagess){
    setCurrentPage(currentPage+1)
  }
}

  const handlePreviousPage=()=>{
    if (currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  const handlePageClick=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

const startIndex=(currentPage-1)*6
const endIndex=startIndex+6


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
      <section className='tours-layout mt-7'>
        <div className="wrapper">
          <div className="tours-box flex w-full ">
            <div className="search-tours flex justify-center w-72 bg-cyan-600">
              <div className="title-search pt-3">
                <h1 className="text-center font-sans text-white">Aktivitenin növü</h1>
                <p className="text-center text-lg font-sans text-white">{tour_type_name.tour_type_name}</p>
              </div>
           <h1></h1>
           <p></p>
            </div>
            
            <div className="tours-container">
              {tours.length > 0 ? (
                <div className="tours">
                  {filteredTours.map((a) => (
                    <Tour key={a.id} tour={a} />
                  ))}
                </div>
              ) : (
                <div className="no-tours">
                  {tours === null ? (
                    <p>Loading tours...</p>
                  ) : (
                    <p>No tours found for selected date.</p>
                  )}
                </div>
              )}
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
        </div>

      </section>

      <Footer />
    </>
  )
}
const t = (a) => a
export default connect(t)(CampErazileri)