import React from 'react'
import {Link,NavLink} from "react-router-dom"
import {links} from "../components/MyLinks"
import Footer from "../components/Footer"
import { connect } from 'react-redux'
import Tour from '../components/Tour'
function CampErazileri({tours}) {
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
                    <h1 className="text-center font-sans text-white">Search Tour</h1>
                    <p className="text-center font-sans text-white">Find your dream tour today!</p>
                    </div>
                   
                    <input className='' type="text" placeholder='Search Tour' />
                    <select className='select-type' name="areas" id="areas">
                     
        <option value="lake">
            Lake
        </option>
        <option value="river">
            River
        </option>
        <option value="mountain">
            Mountain
        </option>
        <option value="forest">
            Forest
        </option>
      </select>
      <select className='select-type' name="areas" id="areas">
        <option value="lake">
            Destination
        </option>
        <option value="river">
            River
        </option>
        <option value="mountain">
            Mountain
        </option>
        <option value="forest">
            Forest
        </option>
      </select>
      <input type="month" />
      <button className='btn-brown'>Find Tours</button>
                  </div>
                  <div className="tours-container">
                    <div className="tours">
                      {tours.map((a)=>(
                        <Tour key={a.id} tour={a}/>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </section>
            <Footer/>
    </>
  )
}
const t=(a)=>a
export default connect(t) (CampErazileri)