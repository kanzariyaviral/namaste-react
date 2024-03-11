import { useState, useEffect } from "react";
import { RESTATURANT_MENU } from "../utils/constants";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";

let onlyVeg = false;

const RestaurantMenu = () => {
  const {resId} = useParams()
  const [resInfo, setResInfo] = useState([]);
  const [menuInfo, setMenuInfo] = useState([]);
  const [onlyVegMenuInfo, setOnlyVegMenuInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTATURANT_MENU+resId);
    let json = await data.json();
    setResInfo(json.data);
    const { itemCards } =
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    setMenuInfo(itemCards);
    setOnlyVegMenuInfo(itemCards);
  };
  
  if (resInfo.length < 1) return <h1>Loading.......</h1>;
  
  const { name, cuisines, costForTwoMessage, avgRating } =
  resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="restaturant-menu">
      <div className="restaturant-title">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p>{avgRating}★</p>
      </div>
      <div className="veg-only">
        <h4>Veg Only</h4>
        <input
          type="checkbox"
          onClick={() => {
            if (!onlyVeg) {
              onlyVeg = true;
              const filter = menuInfo.filter((ele) => {
                return ele?.card?.info?.isVeg;
              });
              setOnlyVegMenuInfo(filter);
            } else {
            onlyVeg = false;
              setOnlyVegMenuInfo(menuInfo);
            }
          }}
        ></input>
      </div>
      {onlyVegMenuInfo.map((ele) => (
        <MenuCard key={ele.card.info.id} data={ele} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
