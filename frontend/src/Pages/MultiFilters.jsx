import React, { useEffect, useState } from "react";
import { items } from "./item";
import "./CSS/StyleCategory.css";
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useFetch from "./useFetch";

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);


  const {genres, loading, error} = useFetch(`http://18.136.120.49/api/games/genres/`);
  const {games, loading2, error2} = useFetch(`http://18.136.120.49/api/games/get_all_games/`);

  console.log(loading?"not loading":genres)

  //const [filters, setfilters] = useState();

  let filters = []
  // const [filters, setfilters] = useState();

  //setfilters(data)
  //console.log(filters)
  // function FetchDataProvider(){
  //   const[all_product,setAll_Product] = useState([]);
    
    // useEffect(() => {
    //   fetch('http://18.136.120.49/api/games/genres/')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.data)
    //     setfilters(data.data)
    //   })
    //   .catch(err => console.log(err))
    // }, [])
  
    // console.log(filters)

  // items.forEach((x, index) =>
  //   {
      
  //     if(!filters.includes(x.Genres))
  //       filters.push(x.Genres)
  //   }
  // )
  

  const handleFilterButtonClick = (selectedCategory) => {

    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = (x) => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = genres.filter((item) => item.includes(selectedCategory));
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      {/* <div className="buttons-container">
      {
        loading ? "loading" : <>
        {
          genres.map((Genres, idx) => (
            <button
            onClick={() => handleFilterButtonClick(genres[idx])}
            className={`button ${
              selectedFilters?.includes(genres[idx]) ? "active" : ""
            }`}
            key={`filters-${Genres}`}
          >
            {genres[idx]}
          </button>
          ))
        }
        </>
      }
      </div> */}
      
        {/* {filters.map((Genres, idx) => (
          <button
            onClick={() => handleFilterButtonClick(Genres)}
            className={`button ${
              selectedFilters?.includes(Genres) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {Genres}
          </button>
        ))}
       */}

      {/* <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <Link to={`/product/${item.Name}`}><img className="imgGame" onClick={window.scrollTo(0,0)} src={item.Image} alt=''/></Link>
            <p>{item.Name}</p>
            <p className="category">{item.Genres}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}