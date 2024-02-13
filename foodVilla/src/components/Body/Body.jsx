import React from "react";
import "./Body.css";
import { useState, useEffect } from "react";
import { RestaurantCard, Shimmer } from "../index";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

function Body() {
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.5804591&lng=75.00442170000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setResList(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRes(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return <h1>Offline</h1>
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="filtering">
        <div className="search">
          <input
            placeholder="search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const searchedRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(searchedRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const filteredList = resList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRes(filteredList);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
