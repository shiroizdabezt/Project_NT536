import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import { items_1 } from "../../Pages/game_plot";
import star_dull_icon from "../Assets/star_dull_icon.png"
//import { ShopContext } from '../../Context/ShopContext'



const ProductDisplay = (props) => {
    const {product} = props;
    const products = items_1.find((e)=> e.Name === product.Name)
    //const {F} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.Image} alt="" />
                <img src={product.Image} alt="" />
                <img src={product.Image} alt="" />
                <img src={product.Image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.Image} alt='' />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.Name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_icon} alt='' />
                <img src={star_dull_icon} alt='' />
                <p>(122)</p>
            </div>
            <div className="productdisplay-rigth-description">
                <p className='productdisplay-right-category'><span>Developer: </span>{product.Developer}</p>
                <p className='productdisplay-right-category'><span>Publisher: </span>{product.Publisher}</p>
                <p className='productdisplay-right-category'><span>Genres: </span>{product.Genres}</p>
                <p className='productdisplay-right-category'><span>Operating systems: </span>{product["Operating systems"]}</p>
                <p className='productdisplay-right-category'><span>Date released: </span>{product["Date released"]}</p>
            </div>
            
            <p className='product-price'><span></span>${products.price}.00</p>

            {/* <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div> */}
            <button>ADD TO CART</button>
            {/* <p className='productdisplay-right-category'><span>Tags: </span>Modern, Lasted</p> */}
        </div>
    </div>
  )
}

export default ProductDisplay