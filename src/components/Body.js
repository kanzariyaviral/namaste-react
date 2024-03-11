import RestaurantCard from "./RestaturantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
              // const filteredRestayrant = listOfRestaurants.filter((ele)=>{
              //     const name = ele.info.name.toLowerCase()
              //     return name.includes(searchText)
              // })
              if (searchText.length) {
                const filteredRestaurant = await searchObject(
                  listOfRestaurants,
                  searchText
                );
                setFilteredRestaurant(filteredRestaurant);
              } else {
                setFilteredRestaurant(listOfRestaurants);
              }
              //   console.log(filteredRestayrant);
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
            <Link to={"/restaturant/"+ele.id}><RestaurantCard key={ele.id} resData={ele} /></Link>
          ))}
        </div>
      ) : (
        <div className="data-not-found">Ghare banvine khay le bhukhkhad!!</div>
      )}
    </div>
  );
};

export default Body;

function searchObject(array, query) {
  const results = array.filter((object) => {
    console.log("array", object);
    for (const key in object) {
      if (object.hasOwnProperty(key) && typeof object[key] === "string") {
        debugger;
        let temp = object[key].toLowerCase();
        if (temp.includes(query)) {
          return object;
        }
      }
    }
  });

  return results;
}

function getOnlyRestaurantsArray(array) {
  array = array.reduce((acc, curr) => {
    let obj = {
      id: curr.info.id,
      name: curr.info.name,
      cuisines: curr.info.cuisines.join(", "),
      avgRating: curr.info.avgRating,
      costForTwo: curr.info.costForTwo,
      sla: curr.info.sla,
      cloudinaryImageId: curr.info.cloudinaryImageId,
    };
    acc.push(obj);
    return acc;
  }, []);
  return array;
}
