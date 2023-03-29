import React, {useState} from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Zonalar from './pages/Zonalar'
import CampErazileri from './pages/CampErazileri'
import CampLevazimat from './pages/CampLevazimat'
import Xidmetler from './pages/Xidmetler'
import Blog from "./pages/Blog"
import NotFound from './pages/NotFound'
import Basket from './pages/Basket'
import { AnimatePresence, motion } from "framer-motion"
import Details from './pages/Details'
import TourDetails from './pages/TourDetails'
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import { Register } from './pages/Register'
import BlogDetails from './pages/BlogDetails'
import BlogPage from './pages/BlogPage'
import Navbar from './components/Navbar'
import Fav from './pages/Fav'
import AboutUs from './pages/AboutUs'
import AllProducts from './pages/AllProducts'
import AllTours from './pages/AllTours'
function AnimatedRouters() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login" || location.pathname === "/register";


  return (
    <>
     {!isLoginPage && <Navbar />}
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >  <PrivateRoute>
              <Home />
            </PrivateRoute></motion.div>} />
            <Route path="/zonalar" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >  <PrivateRoute>
              <Zonalar />
            </PrivateRoute></motion.div>} />
          {/* <Route path='/zonalar' element={<Zonalar />} /> */}
          <Route path='/login' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Login /></motion.div>} />
            <Route path='/register' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Register /></motion.div>} />
        
          <Route path='/type/:tour_type_name' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><CampErazileri /></motion.div>} />
           <Route path='/alltours' element={<AllTours></AllTours>}/>
          <Route path='/category/:category_name' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><CampLevazimat /></motion.div>} />
          <Route path='/all' element={<AllProducts></AllProducts>}/>
          <Route path='/xidmetler' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Xidmetler /></motion.div>} />
          <Route path='/blog' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><BlogPage /></motion.div>} />
          <Route path="*" element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><NotFound /></motion.div>} />
          <Route path='/basket' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Basket /></motion.div>} />
          <Route path='/fav' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Fav /></motion.div>} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path='/elaqe' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><AboutUs /></motion.div>} />
         
        </Routes>
      </AnimatePresence>
     
    </>
  )
}

export default AnimatedRouters