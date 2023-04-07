import React, { useState, useEffect } from 'react'
import { Link, NavLink, useParams } from "react-router-dom"
import { links } from "../components/MyLinks"
import Footer from "../components/Footer"
import { connect } from 'react-redux'
import Tour from '../components/Tour'
function CampErazileri({ tours, dispatch, totalPagess, zonas }) {
  const tour_category_name = useParams()
  const [tourName, setTourName] = useState('');
  const [eventCategory, setEventCategory] = useState("")
  const [eventType, setEventType] = useState("")
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedPages, setDisplayedPages] = useState([1]);
  const [filteredTours, setFilteredTours] = useState([])
  const [filteredZonez, setFilteredZones] = useState([])
  console.log(tours)

  useEffect(() => {
    let dynamicType = tours.filter((a) => a.category.name == tour_category_name.tour_category_name)
    setFilteredTours(dynamicType)
  }, [tour_category_name])
  console.log(filteredTours)

  useEffect(() => {
    let filterZone = zonas.filter((a) => a.name == tour_category_name.tour_category_name)
    setFilteredZones(filterZone)
  }, [tour_category_name])
  console.log(filteredZonez)
  // Update displayed pages when total pages change
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPagess; i++) {
      pages.push(i);

    }
    setDisplayedPages(pages);
  }, [totalPagess]);

  //pagination next prev btns
  const handleNextPage = (year, month) => {

    if (currentPage < totalPagess) {
      console.log(111)
      searchTours(eventCategory, eventType, tourName, year, month, currentPage + 1);
    }
  };

  // Handle previous page button click
  const handlePreviousPage = (year, month) => {
    if (currentPage > 1) {
      searchTours(eventCategory, eventType, tourName, year, month, currentPage - 1);
    }
  };
  const handlePageClick = (page, year, month) => {
    setCurrentPage(page);
    searchTours(eventCategory, eventType, tourName, year, month, page);
  };
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
        {filteredZonez.map((zona) => {
              console.log(zona)
              return(
                <div className="detailed-blog mb-20 ">
                <div className="wrapper flex justify-center align-center gap-10">
                  <div className="blog-detail">
                    <img src={zona.image} alt="" />
                    <h1>{zona.name}</h1>
                    <p>{zona.description}</p>
                  </div>
                </div>
              </div>
              )
            
            })}
          <div className="tours-box flex w-full ">
            <div className="search-tours flex justify-center w-72 bg-cyan-600">
              <div className="title-search pt-3">
                <p className="text-center font-sans text-white">Aktivitenin keçirildiyi zona</p>
                <h5 className="text-center text-lg font-sans text-white">{tour_category_name.tour_category_name}</h5>
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