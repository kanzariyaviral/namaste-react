import { useState, useEffect } from "react";
import { RESTATURANT_MENU } from "../utils/constants";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { vegFilter } from "../utils/utilsFunction";

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
    json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    setMenuInfo(itemCards);
    setOnlyVegMenuInfo(itemCards);
  };

  const online = useOnlineStatus()
  if(!online) return <h1>you are Offline.....</h1>
  if (resInfo.length < 1) return <h1>Loading.......</h1>;
  const { name, cuisines, costForTwoMessage, avgRating } =
  resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="mx-[20%] my-[0%]">
      <div className="border-dashed border-b-[1.5px] border-[#dfe0e0] py-7">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p>{avgRating}★</p>
      </div>
      <div className="flex border-solid border-b-[1.5px] border-[#6e6d6d] py-7 items-center">
        <h4 className="pr-[10px] items-center">Veg Only</h4>
        <input
          type="checkbox"
          onClick={() => {
            if (!onlyVeg) {
              onlyVeg = true;
              const filter = vegFilter(menuInfo)
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
