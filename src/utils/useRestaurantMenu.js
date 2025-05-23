import { useEffect, useState } from "react";
import { SWIGGY_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const result = await fetch(SWIGGY_MENU + resId);
    const json = await result.json();
    setResMenu(json);
    console.log("the resMenu fetched is ", json);
  };
  return resMenu;
};
export default useRestaurantMenu;
