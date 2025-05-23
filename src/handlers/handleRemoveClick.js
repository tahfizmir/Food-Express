import { useDispatch } from "react-redux";
import { removeItems } from "../utils/cartSlice";
const useHandleRemoveClick=()=>{
    const dispatch = useDispatch();
    const handleRemoveClick=(item)=>{
        dispatch(removeItems(item));

    }
    return handleRemoveClick;
}
export default useHandleRemoveClick;