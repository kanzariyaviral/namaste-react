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
      <div className="m-[10px] cursor-pointer flex">
        <div className="pr-2">
          <input
            type="text"
            className="ml-[0] mr-[18px] my-[0] border-[1px] border-[solid] rounded-[5px] border-[black] h-[25px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value.toLowerCase());
            }}
          />
          <button
            className="cursor-pointer border-[1px] border-[solid] rounded-[5px] border-[black] bg-neutral-300 p-1"
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
          className="cursor-pointer border-[1px] border-[solid] rounded-[5px] border-[black] bg-neutral-300 p-1"
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
        <div className="flex flex-wrap">
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
