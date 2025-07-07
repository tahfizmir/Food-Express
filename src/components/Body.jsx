import RestaurantCard, { promotedRes } from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";
import useRestaurantInfo from "../utils/useRestaurantsInfo.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchedArray = useRestaurantInfo();
  console.log(fetchedArray);
  useEffect(() => {
    if (fetchedArray?.length > 0) {
      setListOfRestaurant(fetchedArray);
      setOriginalList(fetchedArray);
    }
  }, [fetchedArray]);

  const onlineState = useOnlineStatus();
  const RestaurantPromoted = promotedRes();
  if (onlineState === false) {
    return <h1 className="text-center text-red-500 text-xl font-semibold mt-10">You are offline. Please connect to the internet</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <input
          type="text"
          id="search-box"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <button
          id="search-button"
          onClick={() => {
            const filteredRestaurants = originalList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (filteredRestaurants.length !== 0) {
              setListOfRestaurant(filteredRestaurants);
            }
          }}
          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
        >
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          onClick={() => {
            const totalAvgRating = originalList.reduce(
              (sum, res) => sum + res.info.avgRating,
              0
            );
            const avg = totalAvgRating / originalList.length;

            const filteredRestaurants = originalList.filter(
              (res) => res.info.avgRating > avg
            );

            console.log("Average rating:", avg);
            setListOfRestaurant(filteredRestaurants);
          }}
        >
          Top-Rated Restaurants
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
          onClick={() => {
            setListOfRestaurant(originalList);
          }}
        >
          Show All
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listOfRestaurants.map((restaurant) => {
         
          return (

          <Link
            key={restaurant.info.id}
            to={{
              pathname: "/restaurants/" + restaurant.info.id,
              state: { data: restaurant },
            }}
            className="block"
          > {
              restaurant?.info?.aggregatedDiscountInfoV3 ? (<RestaurantPromoted resData={restaurant}/>) :
                (<RestaurantCard resData={restaurant} />)}
          </Link>
        )})}
      </div>
    </div>
  );
};

export default Body;
