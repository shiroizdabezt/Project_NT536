import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.Name}`}><img onClick={window.scrollTo(0,0)} src={props.Image} alt=''/></Link>
        <p>{props.Name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.Image}
            </div>
            <div className="item-price-old">
                ${props.Name}
            </div>
        </div>
    </div>
  )
}

export default Item