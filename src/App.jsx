import { useState,useEffect } from 'react'
import './sass/scss.scss'
import './sass/scss.css'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import AnimatedRouters from './AnimatedRouters';
import Navbar from './components/Navbar';
import {Button} from "react-bootstrap"
function App({dispatch}) {
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
  return (
  <>
 <Navbar/>
<AnimatedRouters/>
  </>
  )
}

export default connect() (App)
