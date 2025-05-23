import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const useClearCart=()=>{
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return handleClearCart;
}
export default useClearCart;