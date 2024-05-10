import React, { useEffect, useState } from "react";
import { items } from "./item";
import "./CSS/StyleCategory.css";
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = [];

  items.forEach((x, index) =>
    {
      
      if(!filters.includes(x.Genres))
        filters.push(x.Genres)
    }
  )
  

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
        let temp = items.filter((item) => item.Genres.includes(selectedCategory));
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((Genres, idx) => (
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
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <Link to={`/product/${item.Name}`}><img className="imgGame" onClick={window.scrollTo(0,0)} src={item.Image} alt=''/></Link>
            <p>{item.Name}</p>
            <p className="category">{item.Genres}</p>
          </div>
        ))}
      </div>
    </div>
  );
}