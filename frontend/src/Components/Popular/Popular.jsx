import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { items } from "../../Pages/item";

const Popular = () => {

  //const [popularProducts, setPopularProducts] = useState([]);

  // useEffect(() =>{
  //   fetch('http://localhost:4000/Recommend')
  //   .then((response) => response.json())
  //   .then((data) => setPopularProducts(data))
  // },[])

  return (
    <div className='Recommend'>
        <h1>RECOMMEND</h1>
        <hr />
        <div className="Recommend-item">
            {items.slice(0,10).map((item,i) =>{
                return <Item Name={item.Name} Image={item.Image}/>
            })}
        </div>
    </div>
  )
}

export default Popular