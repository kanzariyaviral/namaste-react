import { useNavigate } from "react-router-dom";
import { LOGO_RES } from "../utils/constants";
const RestaurantCard = (props) => {
  const navigate = useNavigate()
  // const { name, cuisine, rating, time,image } = props.resData;
    const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId, id } = props.resData;
    return (
      <div className="w-[257px] bg-[#f0f0f0] rounded-[5px] p-[5px] m-[18px] cursor-pointer hover:[box-shadow:0_4px_8px_0_lightblue,_0_6px_20px_0_lightblue]" onClick={()=>navigate(`restaturant/${id}`)}>
        <img
          className="h-2/5 w-full rounded-[5px]"
          alt="No Image"
          src={`${LOGO_RES}${cloudinaryImageId}`}
        ></img>
        <h6>{name}</h6>
        <h4>{cuisines}</h4>
        <h4>{avgRating}★</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;