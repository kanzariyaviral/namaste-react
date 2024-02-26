const RestaurantCard = (props) => {
    const { name, cuisine, rating, time,image } = props.resData;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="No Image"
          src={image}
        ></img>
        <h3>{name}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}★</h4>
        <h4>{time}</h4>
      </div>
    );
  };

export default RestaurantCard;