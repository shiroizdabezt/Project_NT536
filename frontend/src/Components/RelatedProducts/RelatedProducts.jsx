import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { items } from "../../Pages/item";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Chọn ngẫu nhiên một phần tử từ 0 đến i

      // Swap các phần tử
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {shuffleArray(items).slice(0,4).map((item,i) =>{
                return <Item Name={item.Name} Image={item.Image}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts