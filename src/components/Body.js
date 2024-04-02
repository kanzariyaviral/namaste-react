import RestaurantCard from "./RestaturantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOnlyRestaurantsArray } from "../utils/utilsFunction";
import { searchObject } from "../utils/utilsFunction";
import { SWIGGY_RES } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
  fetchData();
  }, []);

  const fetchData = async () => {
  const data = await fetch(SWIGGY_RES);
  let json = await data.json();
  json = getOnlyRestaurantsArray(
  json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
  setListOfRestaurants(json);
  setFilteredRestaurant(json);
  };
  if (listOfRestaurants.length === 0) {
    return <h1>Loading.......</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          />
          <button
            className="search-btn"
            onClick={async () => {
              if (searchText.length) {
                const filteredRestaurant = await searchObject(
                  listOfRestaurants,
                  searchText
                );
                setFilteredRestaurant(filteredRestaurant);
              } else {
                setFilteredRestaurant(listOfRestaurants);
              }
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const fData = listOfRestaurants.filter(
              (ele) => ele.avgRating > 4.3
            );
            setListOfRestaurants(fData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {filteredRestaurant.length > 0 ? (
        <div className="res-container">
          {filteredRestaurant.map((ele) => (
            // <Link to={"/restaturant/"+ele.id}><RestaurantCard key={ele.id} resData={ele} /></Link>
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
