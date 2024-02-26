import RestaurantCard from "./RestaurantCard";
import res from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(res) ;
  console.log(listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fData = listOfRestaurants.filter((ele)=>ele.rating > 4.5)
            setListOfRestaurants(fData)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {listOfRestaurants.length > 0 ? (
        <div className="res-container">
          {listOfRestaurants.map((ele) => (
            <RestaurantCard key={ele.id} resData={ele} />
          ))}
        </div>
      ) : (
        <div className="data-not-found">Ghare banvine khay le bhukhkhad!!</div>
      )}
    </div>
  );
};

export default Body;
