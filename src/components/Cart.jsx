import { useSelector } from "react-redux";
import useHandleRemoveClick from "../handlers/handleRemoveClick";
import useClearCart from "../handlers/handleClearCart";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartt", cartItems);
    const handleClearCart = useClearCart()
    const handleRemoveClick = useHandleRemoveClick();
    return (
        <div>
            {cartItems.map((item) => (
                <div className="flex">
                    <div>{item}</div>
                    <button onClick={() => handleRemoveClick(item)}>➖</button>
                </div>
            ))}
            <button onClick={() => handleClearCart()}> Clear cart</button>
        </div>
    )
}
export default Cart; 