import ItemList from "./ItemList.jsx";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full">
      <div className="w-11/12 md:w-8/12 mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
        {/* Header */}
        <div
          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`transform transition-transform duration-300 ${
              showItems ? "rotate-180" : ""
            }`}
          >
            ⬇️
          </span>
        </div>

        {/* Collapsible Content */}
        {showItems && (
          <div className="p-4 pt-0">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
