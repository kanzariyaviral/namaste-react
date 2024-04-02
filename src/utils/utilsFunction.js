exports.vegFilter = (data) => {
  return data.filter((ele) => {
    return ele?.card?.info?.isVeg;
  });
};

exports.searchObject = (array, query) => {
  const results = array.filter((object) => {
    for (const key in object) {
      if (object.hasOwnProperty(key) && typeof object[key] === "string") {
        let temp = object[key].toLowerCase();
        if (temp.includes(query)) {
          return object;
        }
      }
    }
  });

  return results;
};

exports.getOnlyRestaurantsArray = (array) => {
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
};
