import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantPage = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy Data";
  console.log("resMenu", resMenu)


  if (resMenu === null) {
    return <Shimmer />;
  }
  // const menuArray =
  //   resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
  //     ?.card?.itemCards || [];
  const resName = resMenu?.data?.cards[0]?.card?.card?.text;
  // console.log('menuArray', menuArray);
  const categories =
    resMenu?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {resName}
      </h2>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex((prev)=>(prev===index ? null : index))}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantPage;
