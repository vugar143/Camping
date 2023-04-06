import { useState,useEffect } from 'react'
import './sass/scss.scss'
import './sass/scss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import AnimatedRouters from './AnimatedRouters';
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';

function App({dispatch,products}) {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [loc.pathname])
  useEffect(()=>{
    fetch("http://127.0.0.1:8080/equipment/listc/")
    .then((a)=>a.json())
    .then((a)=>{
       const itemsPerPage = 6; // Change this value as needed
      const totalItems = a.count;
      const totalpPages =a.total_pages;
      console.log(totalpPages)
      console.log(a.count)
      console.log(totalItems)
      dispatch({
        type: "SET_PRODUCTS",
        payload:a.results,
      }),
      dispatch({
        type: "SET_PTOTALPAGES",
        payload:totalpPages,
       
      })
    })
  },[])
  useEffect(()=>{
    fetch("http://127.0.0.1:8080/tour/tourlist/")
    .then((a)=>a.json())
    .then((a)=>{console.log(a)
      const itemsPerPage = 4; // Change this value as needed
      const totalItems = a.count;
      const totalPages = a.total_pages;
 
      dispatch({
        type: "SET_TOURS",
        payload:a.results,
       
      }),
      dispatch({
        type: "SET_TOTALPAGES",
        payload:totalPages,
       
      })
    })
  },[])

  useEffect(() => {
    fetch("http://127.0.0.1:8080/comment/blog/")
       .then((a) => a.json())
       .then((a) => {
           dispatch({
               type: "SET_BLOGS",
               payload: a.results,
           })
       })
}, [])
useEffect(()=>{
  fetch("http://127.0.0.1:8080/tour/DestinationList/")
  .then((a)=>a.json())
  .then((a)=>{console.log(a)
    const itemsPerPage = 4; // Change this value as needed
    const totalItems = a.count;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    dispatch({
      type: "SET_ZONAS",
      payload:a.results,
     
    }),
    dispatch({
      type: "SET_ZTOTALPAGES",
      payload:totalPages,
     
    })
  })
},[])
  return (
  <>
<AnimatedRouters/>
  </>
  )
}
const t=(a)=>a
export default connect(t) (App)
