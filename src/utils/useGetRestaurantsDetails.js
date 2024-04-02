import { getOnlyRestaurantsArray } from "./utilsFunction";
import { useState, useEffect } from "react";
// import { SWIGGY_RES } from "./constants";

const useGetRestaurantsDetails =  (SWIGGY_RES) => {
  const [resData, setResData] = useState([]);

  useEffect(async () => {
    const data = await fetch(SWIGGY_RES);
    let json = await data.json();
    json = getOnlyRestaurantsArray(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setResData(json);
  }, [SWIGGY_RES]);
  console.log("resData",resData)
  return resData;
};

export default useGetRestaurantsDetails;
