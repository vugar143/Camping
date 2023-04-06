import React from 'react'
import { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { useParams,NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
function ZonaDetails({zona,dispatch}) {
    let {id}=useParams()
    console.log(zona)
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/tour/DestinationRetrieve/${id}/`)
          .then((a) => a.json())
          .then((a) => {
            dispatch({
              type: "SET_ZONA",
              payload: a
            }),
              setLoading(false)
          })
      }, [])
  return (
    <>
      <div className='basket-image'>
                <img src="../../images/bg-cart.jpeg" alt="" />
                <div className='links'><NavLink end to="/">Home</NavLink>

                    <div className='text'>
                        <h1>{zona.name}</h1>
                        <h2>Don't forget to double check your order</h2>
                    </div>
                </div>

            </div>
    <div className="detailed-blog ">
    <div className="wrapper flex justify-center align-center gap-10">
        <div className="blog-detail">
            <img src={zona.image} alt="" />
            <h1>{zona.name}</h1>
            <p>{zona.description}</p>
        </div>

      

    </div>
    <hr />
</div>
<Footer/>
</>
  )
}
const t=(a)=>a
export default connect(t) (ZonaDetails)