import { useState } from 'react'
import './sass/scss.scss'
import './sass/scss.css'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux"
import AnimatedRouters from './AnimatedRouters';
import Navbar from './components/Navbar';
import {Button} from "react-bootstrap"
function App() {
  return (
  <>
 <Navbar/>
<AnimatedRouters/>
  </>
  )
}
const t=(a)=>a
export default connect(t) (App)
