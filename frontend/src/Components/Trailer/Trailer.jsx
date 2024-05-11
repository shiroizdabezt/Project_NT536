import React, { useContext } from 'react'
import './Trailer.css'
import { items_1 } from "../../Pages/game_plot";

const Trailer = (props) => {
    const {product} = props;
    const products = items_1.find((e)=> e.Name === product.Name)
  return (
    <div>
      <div className='trailer-hr'>
        <h1>Trailer</h1>
        <hr/>
      </div>
    <div className='video-contain'>
        <iframe className= "Vid" width="1440" height="810" src={products.Video} frameborder="0" allowFullScreen allow="picture-in-picture"></iframe>
    </div>
    </div>
  )
}

export default Trailer