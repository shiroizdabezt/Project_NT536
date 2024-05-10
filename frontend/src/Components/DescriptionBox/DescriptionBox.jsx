import React from 'react'
import './DescriptionBox.css'
import { items_1 } from "../../Pages/game_plot";


const DescriptionBox = (props) => {
  const {product} = props;
  const products = items_1.find((e)=> e.Name === product.Name)
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review</div>
      </div>
      <div className='descriptionbox-descriptin'>
        <h1>About</h1>
        <p>{products.about_game}</p>
        <h1>Gameplay</h1>
        <p>{products.gameplay}</p>
      </div>
    </div>
  )
}

export default DescriptionBox