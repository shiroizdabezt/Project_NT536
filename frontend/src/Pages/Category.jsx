import React from 'react'
import category_banner from '../Components/Assets/category_banner.png'
import MultiFilters from './MultiFilters.jsx'

const Category = () => {
  return (
    <div>
        <img className='shopcategory-banner' src={category_banner} alt="" />
        <div>
        <MultiFilters />
        </div>
    </div>
  )
    
    
}

export default Category