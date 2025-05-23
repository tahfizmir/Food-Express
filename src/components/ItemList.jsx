import { MEDIA_URL } from "../utils/constants";
import useHandleAddClick from "../handlers/handleAddClick";
const ItemList = ({ items }) => {

const handleAddClick=useHandleAddClick();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="flex justify-between items-start border-b border-gray-200 pb-4"
        >
          {/* Text Section */}
          <div className="w-9/12 pr-4">
            <div className="mb-1">
              <h4 className="text-base font-medium text-gray-800">
                {item.card.info.name}
              </h4>
              <p className="text-sm text-gray-600">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Image & Button */}
          <div className="w-3/12 relative">
            <img
              src={MEDIA_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-auto rounded-lg object-cover"
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-black text-white text-sm font-semibold shadow-md hover:bg-gray-900 transition" onClick={()=>handleAddClick(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
