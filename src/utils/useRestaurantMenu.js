/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { SWIGGY_MENU } from "./constants";
import { resMenuMock } from "./mockData";
const useRestaurantMenu = (resId) => {
  // const [resMenu, setResMenu] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const result = await fetch(SWIGGY_MENU + resId);
  //   const json = await result.json();
  //   setResMenu(json);
  //   console.log("the resMenu fetched is ", json);
  // };
  // return resMenu;

  // DUMMY DATA

  return resMenuMock;

};
export default useRestaurantMenu;
