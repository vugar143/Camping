import React, { useState, useEffect } from 'react'
import { Link, NavLink,useParams } from "react-router-dom"
import { links } from "../components/MyLinks"
import Footer from "../components/Footer"
import { connect } from 'react-redux'
import Tour from '../components/Tour'
function CampErazileri({ tours, dispatch,totalPagess}) {
  const tour_category_name=useParams()
  const [tourName, setTourName] = useState('');
  const [eventCategory, setEventCategory] = useState("")
  const [eventType, setEventType] = useState("")
  const [selectedDate, setSelectedDate] = useState('');
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
const [displayedPages, setDisplayedPages] = useState([1]);
const [filteredTours,setFilteredTours]=useState([])
console.log(tours)
  const handleEventType = (e) => {
    console.log("Selected event type: ", e.target.value);
    setEventType(prevEventType => e.target.value);
  }

  const handleEventCategory = (e) => {

    setEventCategory(e.target.value);

  }
  useEffect(()=>{
    let dynamicType=tours.filter((a)=>a.category.name==tour_category_name.tour_category_name)
    setFilteredTours(dynamicType)
  },[tour_category_name])
  console.log(filteredTours)
  // Update displayed pages when total pages change
useEffect(() => {
  const pages = [];
  for (let i = 1; i <= totalPagess; i++) {
  pages.push(i);
 
  }
  setDisplayedPages(pages);
  }, [totalPagess]);
  const searchName = (e) => {
    const searchTour = e.target.value
    setTourName(searchTour)
  }
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const searchTours = (eventCategory, eventType, tourName, year, month, page=1) => {
    let url = 'http://127.0.0.1:8080/tour/tourlist/?';
  
    if (eventCategory) {
      url += `category__id=${eventCategory}&`;
    }
    if (eventType) {
      url += `type__id=${eventType}&`;
    }
    if (tourName) {
      url += `name=${tourName}&`;
    }
    if (year && month) {
      url += `date_after=${year}-${month}-01&date_before=${year}-${month}-31&`;
    }
    if (page) {
      url += `page=${page}&`;
    }
    url += 'limit=4';
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.length)
        if ('date' in data && data.date[0] === 'Enter a valid date.') {
          setError('No tours available for selected date');
        } else {
          dispatch({ type: 'SET_TOURS', payload: data.results });
          dispatch({ type: 'SET_PAGINATION', payload: data });
       
          setCurrentPage(page);
          setError(null);
        }
      })
      .catch((error) => console.error(error.data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a date');
      return;
    }
    const [year, month] = selectedDate.split('-');
    if (eventCategory === '' && eventType === '' && tourName === '') {
      searchTours();
    } else {
      searchTours(eventCategory, eventType, tourName, year, month);
    }
  };
  const handleReset = () => {
    setTourName('');
    setEventCategory('');
    setEventType('');
    setSelectedDate('');
    searchTours('', '', '', '', '');
  };
  //pagination next prev btns
  const handleNextPage = (year,month) => {
    
if(currentPage<totalPagess){
      console.log(111)
      searchTours(eventCategory, eventType, tourName, year, month, currentPage + 1);
}
  };
  
  // Handle previous page button click
  const handlePreviousPage = (year,month) => {
    if (currentPage > 1) {
      searchTours(eventCategory, eventType, tourName, year, month, currentPage - 1);
    }
  };
  const handlePageClick = (page,year,month) => {
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