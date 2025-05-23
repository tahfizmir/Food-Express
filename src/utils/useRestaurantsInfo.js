import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./constants";

const useRestaurantInfo = () => {
  const [fetchedArray, setFetchedArray] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      console.log("json info", json);
      const arrayReceived =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ;
          console.log("recieved array", arrayReceived);
      setFetchedArray(arrayReceived);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };
  
  return fetchedArray;
};
export default useRestaurantInfo;
