import { LOGO_RES } from "../utils/constants";
const RestaurantCard = (props) => {
  // const { name, cuisine, rating, time,image } = props.resData;
    const { name, cuisines, avgRating, costForTwo, sla,cloudinaryImageId } = props.resData;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="No Image"
          src={`${LOGO_RES}${cloudinaryImageId}`}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating}★</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    );
  };

export default RestaurantCard;