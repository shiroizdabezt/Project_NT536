import React, { useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
//import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios'
import {items} from './item'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = [];

  items.forEach((x, index) =>
    {
      
      if(!filters.includes(x.Genres))
        filters.push(x.Genres)
    }
  )

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
          <p className='show'>
              <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt=""/>
          </div>
      </div>
        <div className='items-container'>
          {filteredItems.map((item, idx) => (
            <div key={`items-${idx}`} className="item-game">
              <Link to={`/product/${item.Name}`}><img className="imgGame" onClick={window.scrollTo(0,0)} src={item.Image} alt=''/></Link>
              <p>{item.Name}</p>
              <p className="category">{item.Genres}</p>
            </div>
        ))}
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
