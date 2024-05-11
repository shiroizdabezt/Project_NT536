import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { items } from "./item";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Trailer from '../Components/Trailer/Trailer';

const Product = () => {
  const {productId} = useParams();
  const product = items.find((e)=> e.Name === productId)
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Trailer product={product}/>
      <DescriptionBox product={product}/>
      <RelatedProducts/>
    </div>
  )
}

export default Product