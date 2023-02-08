import { useState,useEffect } from 'react'
import './sass/scss.scss'
import './sass/scss.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import AnimatedRouters from './AnimatedRouters';
import Navbar from './components/Navbar';
import {Button} from "react-bootstrap"
import { useLocation } from 'react-router-dom';
function App({dispatch}) {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [loc.pathname])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/")
    .then((a)=>a.json())
    .then((a)=>{
      dispatch({
        type: "SET_PRODUCTS",
        payload:a,
      })
    })
  },[])
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/tour/tourlist/")
    .then((a)=>a.json())
    .then((a)=>{
      dispatch({
        type: "SET_TOURS",
        payload:a.results,
       
      })
    })
  },[])
  
  return (
  <>
 <Navbar/>
<AnimatedRouters/>
  </>
  )
}

export default connect() (App)
