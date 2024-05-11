import React, { useContext } from 'react'
import './Trailer.css'
import { items_1 } from "../../Pages/game_plot";

const Trailer = (props) => {
    const {product} = props;
    const products = items_1.find((e)=> e.Name === product.Name)
  return (
    <div>
    <h1 className='trailer'>Trailer</h1>
    <div className='video-contain'>
        <iframe className= "Vid" width="1440" height="810" src={products.Video} frameborder="0" allowFullScreen allow="picture-in-picture"></iframe>
    </div>
    </div>
  )
}

export default Trailer