import React from "react";
import "./Restaurant.css";
import { CDN_URL } from "../../utils/constants";

function Restaurant(props) {
  const { resData } = props;

  if (!resData) {
    // Handle the case where resData is undefined
    return null;
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="card">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime}</p>
    </div>
  );
}

export default Restaurant;
