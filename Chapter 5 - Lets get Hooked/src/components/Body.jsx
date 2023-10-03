import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";

const filterData = (searchText, restaurants)=>{
    const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          name=""
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={()=>{
            //need to filter the data
            // console.log(`searchText is ${searchText} , restaurants is ${restaurants}`)
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
            // console.log(data);
        }}>Search</button>
      </div>

      <div className="restaurant-list">
        {/* {restaurants.map((restaurantItem, index) => {
          return <RestaurantCard restaurant={restaurantItem.data} key={index} />;
        })} */}
        {restaurants.map((restaurantItem) => {
          return <RestaurantCard {...restaurantItem.data} key={restaurantItem.data.id} />;
        })}
      </div>
    </>
  );
};


export default Body;
