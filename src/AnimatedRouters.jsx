import React from 'react'
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
import WishList from './pages/WishList'
import Details from './pages/Details'
import TourDetails from './pages/TourDetails'
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
function AnimatedRouters() {
  const location = useLocation()
  return (
    <>
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
          <Route path='/camperazileri' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><CampErazileri /></motion.div>} />
          <Route path='/camplevazimat' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><CampLevazimat /></motion.div>} />
          <Route path='/xidmetler' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Xidmetler /></motion.div>} />
          <Route path='/blog' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><Blog /></motion.div>} />
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
          <Route path='/wishlist' element={<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ><WishList /></motion.div>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/tourdetails/:id" element={<TourDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRouters