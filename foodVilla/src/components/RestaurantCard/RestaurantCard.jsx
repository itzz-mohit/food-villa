import React from "react";
import { CDN_URL } from "../../utils/constants";

function RestaurantCard({ resData }) {
  //console.log(resData);
  if (!resData) {
    return null;
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    avgRatingString,
  } = resData;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-full mb-4 h-full">
      <img
        className="w-full h-40 object-cover object-center rounded-t-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{name}</h1>
        <p className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mb-2">
          <p className="text-sm text-yellow-500 mr-2">
            {avgRating ? `${avgRating} Stars` : avgRatingString}
          </p>
          <span className="text-sm text-gray-500">|</span>
          <p className="text-sm text-gray-500 ml-2">
            Cost for Two: {costForTwo}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Delivery Time: {sla ? sla.deliveryTime : "N/A"} min
        </p>
      </div>
    </div>
  );
}

export const RestaurantPromoted = ({ resData }) => {
  return (
    <div className="relative mb-4">
      <label className="absolute top-0 right-0 bg-black text-white m-2 p-2 rounded-lg">
        Promoted
      </label>
      <RestaurantCard resData={resData} />
    </div>
  );
};

export default RestaurantCard;
