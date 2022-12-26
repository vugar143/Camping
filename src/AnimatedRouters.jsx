import React from 'react'
import {Routes,Route,useLocation} from "react-router-dom"
import Home from "./pages/Home"
import Zonalar from './pages/Zonalar'
import CampErazileri from './pages/CampErazileri'
import CampLevazimat from './pages/CampLevazimat'
import Xidmetler from './pages/Xidmetler'
import Blog from "./pages/Blog"
import NotFound from './pages/NotFound'
import {AnimatePresence, motion} from "framer-motion"
function AnimatedRouters() {
  const location=useLocation()
console.log(location)
  return (
   <>
   <AnimatePresence mode='wait'>
   <Routes key={location.pathname} location={location}>
    <Route path="/" element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><Home/></motion.div>} />
    <Route path='/zonalar' element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><Zonalar/></motion.div>}/>
  <Route path='/camperazileri' element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><CampErazileri/></motion.div>}/>
  <Route path='/camplevazimat' element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><CampLevazimat/></motion.div>}/>
  <Route path='/xidmetler' element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><Xidmetler/></motion.div>}/>
  <Route path='/blog' element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><Blog/></motion.div>}/>
  <Route path="*" element={<motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    ><NotFound/></motion.div>}/>
   </Routes>
   </AnimatePresence>
   </>
  )
}

export default AnimatedRouters