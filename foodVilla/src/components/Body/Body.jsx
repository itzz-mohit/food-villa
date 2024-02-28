import React, { useState, useEffect } from "react";
import { RestaurantCard, RestaurantPromoted, Shimmer, Error } from "../index";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../hooks/useOnlineStatus";

function Body() {
  const [resList, setResList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = RestaurantPromoted(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6339793&lng=74.8722642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setFilteredRes(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Offline</h1>;
  }
  console.log(filteredRes);
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container p-6">
      <div className="filtering mb-4 flex items-center">
        <div className="search flex items-center">
          <input
            className="border border-gray-300 rounded p-2 mr-2"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
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
        <button
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={`/restaurant/${restaurant?.info.id}`}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
