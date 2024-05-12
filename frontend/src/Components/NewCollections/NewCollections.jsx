import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import new_collection_1 from "../Assets/new_collection_banner.png"

import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:4000/newcollections')
  //   .then((response) => response.json())
  //   .then((data) => setNew_collection(data));
  // },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
          <img className='shopcategory-banner' src={new_collection_1} alt="" />
        </div>
    </div>
  )
}

export default NewCollections