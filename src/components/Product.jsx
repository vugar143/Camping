import React ,{useState} from 'react'
import{connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Fmodal from './Fmodal';
function Product({ item,basket,dispatch,fav }) {
     //favmodal
  const [fmodalshow, setFmodalshow] = useState(false);
  const [removedid, setRemovedid] = useState(null);
  const removeProduct = (id) => {
    setFmodalshow(true);
    setRemovedid(item.id);
  };
  const check=basket.find((a)=>a.id===item.id)
  const handleClick=(e)=>{
    e.preventDefault()
    if(check){
        dispatch({
            type:"REMOVE_BASKET",
            payload:item.id,
        })
     return
    }
    dispatch({
      type:"SET_BASKET",
      payload:[...basket,{id:item.id,
      count:1
      }]
     })
  }
  const removeFunction = () => {
    dispatch({
      type: "REMOVE_FAV",
      payload: item.id,
    });
    setFmodalshow(false);
  }

    return (
        <>
          <Fmodal
        removeProduct={removeProduct}
        removeFunction={removeFunction}
        setFmodalshow={setFmodalshow}
        stage={fmodalshow}
        title={item?.name}
      />
            <Link className="product text-gray-900" to={`/detail/${item?.id}`}>
                <img src={item?.main_product_image} alt="" />
                <div className="product-sale">Sale!</div>
                <div className="product-info">
                    <h1>{item?.name?.slice(0, 6)}...</h1>
                    <p> <span className='line-through text-xs'>${item?.price}</span> <span className='text-lg'>${item?.discount_price}</span></p>
                    <button className='btn-transparent' onClick={handleClick}>{check?"Remove from Cart":"Add to Cart"}</button>
                    <div className="sambal-rights">
                    <div className="sambal-right" onClick={(e) => e.preventDefault()}>
                {!fav?.find((a) => a.id === item?.id) ? (
                  <i
                    className="fa-solid fa-heart heart "
                    onClick={() => {
                      // console.log(11111);
                      dispatch({
                        type: "FAV",
                        payload: item,
                      });
                    }}
                  ></i>
                ) : (
                  <i
                    onClick={() => {
                      setFmodalshow(true);
                      // console.log(2222);
                      // dispatch({
                      //   type: "REMOVE_FAV",
                      //   payload: product.id,
                      // });
                    }}
                    className="fa-solid fa-heart red"
                  ></i>
                )}
              </div>
              </div>
                </div>
            </Link>
        </>

    )
}
const t=(a)=>a
export default connect(t) (Product)