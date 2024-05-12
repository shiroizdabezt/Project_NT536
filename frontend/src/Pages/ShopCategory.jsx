import React, { useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
//import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios'
import useFetch from './useFetch'

const ShopCategory = (props) => {

  // useEffect(() => {
  //     const fetchdata = async() => {
  //       const res = await axios.get("http://127.0.0.1:8000/api/games/Abzû")
  //       setData(res.data)
  //     }
  //     fetchdata()
  //     console.log(data)
  // }, [])

  const {data, loading, error} = useFetch(`http://127.0.0.1:8000/api/games/Valorant`);
  console.log(data)

  //const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <p></p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=""/>
        </div>
      </div>
      <div className="shopcategory-products">
        {/* {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.Name} image={item.Image} />
          }
          else {
            return null;
          }
        })} */}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
