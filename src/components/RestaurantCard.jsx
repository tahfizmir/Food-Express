import { MEDIA_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, locality, avgRatingString, cuisines } = resData?.info || {};
  const imageUrl = `${MEDIA_URL}${resData?.info?.cloudinaryImageId}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-amber-100 transition duration-300 overflow-hidden w-full h-80 flex flex-col">
      {/* Image takes top half */}
      <img
        src={imageUrl}
        alt={`${name}`}
        className="w-full h-40 object-cover"
      />

      {/* Content area fills remaining space */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 truncate">{name}</h4>
          <p className="text-sm text-gray-500 truncate">{locality}</p>
        </div>
        <div>
          <p className="text-sm text-yellow-600 font-medium mt-2">Rated: {avgRatingString}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{cuisines?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};
export const promotedRes = () => {
  return (props) => {
    const prefix = props.resData?.info?.aggregatedDiscountInfoV3?.header;
    const suffix = props.resData.info?.aggregatedDiscountInfoV3?.subHeader
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-br-md shadow">{prefix + " " + suffix}</label>

        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
