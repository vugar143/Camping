import React from 'react'
import { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { useParams, useNavigate ,NavLink } from "react-router-dom"
import Footer from '../components/Footer'
function Details({ product, basket, dispatch }) {
    console.log(basket)
    let { id } = useParams()
    let nav =useNavigate()
    const [loading,setLoading]=useState(true)
    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then((a) => a.json())
    //         .then((json) => {setProduct(json),
    //         setLoading(false)
    //         })
    // }, [])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((a)=>a.json())
        .then((res)=>{
          dispatch({
            type: "SET_PRODUCT",
            payload:res,
          }),
          setLoading(false)
        })
      },[])
console.log(product)
    const check=basket?.find((a)=>a.id==product?.id)
    console.log(typeof check)
    const handleClick=()=>{
        if(check){
         let t= basket?.filter((a)=>!a.id==product?.id)
         
         basket.map((a)=>{
            dispatch({
                type:"REMOVE_BASKET",
                payload:a.id,
            })
         })
         return
        }
        dispatch({
          type:"SET_BASKET",
          payload:[...basket,{id:product.id,
          count:1
          }]
         })
      }
     const changeCount=(count)=>{
        console.log(basket)
        let f=basket.find((a)=>a.id===+id)
        if(f){
            f.count+=count;
            if(f.count===0){
                dispatch({
                    type:"REMOVE_BASKET",
                    payload:+id
                })
                return;
            }
        }
        else{
           basket = [...basket,{id:+id,count:1}]
        }
        dispatch({
            type:"SET_COUNT",
            payload:[...basket]
        })
     }
   let t=basket.find((a)=>a.id===product.id)
   console.log(t)
    return (
        <>           
  
         <div className='basket-image'>
            <img src="../../images/bg-cart.jpeg" alt="" />
            <div className='links'><NavLink end to="/">Home</NavLink> / <NavLink end to="/camplevazimat">Camping Tools</NavLink>  / Details
            
            <div className='text'>
                <h1>My Cart</h1>
                <h2>Don't forget to double check your order</h2>
                </div>
                </div>
           
            </div>
             <section className="details-layout">
            <div className="wrapper">
                <div className="details">
                <div  className="details-info">
                <h1 className='title'>{product.title}</h1>
                <p className='description'>{product.description}</p>
                <h1 className='price'>Price: <span className='colorful-price'>${product.price}</span></h1>

            <div className='operations df'>
                    <button className='inc-btn' onClick={()=>changeCount(-1)} disabled={!t}>-</button>
                    <span><p>{t?t.count:0}</p></span>
                    <button className='dec-btn' onClick={()=>changeCount(1)}>+</button>
                <button className='btn-transparent' onClick={handleClick}>{check?"Remove from Cart":"Add to Cart"}</button>
                </div>
               
               <div id='details-line'></div>
               <ul className='details-category'>
                <li><h1>Category</h1></li>
                <li><p>{product.category}</p></li>
               </ul>
                </div>
                <div className="details-image">
                <img src={product.image} alt="" />
                </div>
                </div>
             
            </div>
        </section>
       
        <Footer/>
    
        </>
    )

}
const t=(a)=>a
export default connect(t) (Details)