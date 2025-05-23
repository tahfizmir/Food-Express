// hooks/useHandleAddClick.js
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const useHandleAddClick = () => {
  const dispatch = useDispatch();

  const handleAddClick = (item) => {
    dispatch(addItems(item?.card?.info?.name));
  };

  return handleAddClick;
};

export default useHandleAddClick;
