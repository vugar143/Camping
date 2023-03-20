import React from 'react'
import SearchBar from '../components/SearchBar'
import Hero from "../components/Hero"
import PopularTours from '../components/PopularTours'
import Adventure from '../components/Adventure'
import Activities from '../components/Activities'
import SaleOffers from '../components/SaleOffers'
import ProductsLand from '../components/ProductsLand'
import Destinations from '../components/Destinations'
import WhoWeAre from "../components/WhoWeAre"
import CounterWrapper from "../components/CounterWrapper"
import WhyChooseUs from '../components/WhyChooseUs'
import Overlay from '../components/Overlay'
import Blog from '../components/Blogs'
import Footer from '../components/Footer'
function Home() {
  return (
   <>
  
   <Hero/>
   <Destinations/>
   <PopularTours/>
   <Adventure/>
   <Activities/>
   <SaleOffers/>
   <ProductsLand/>
   <WhoWeAre/>
   <CounterWrapper/>
   <WhyChooseUs/>
   <Overlay/>
   <Blog/>
   <Footer/>
   </>
  )
}

export default Home