import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const UserData = useContext(UserContext);
  console.log(UserData,"  UserData")

  const cartItems=useSelector((store)=>store.cart.items);

 
  return (
    <header className="flex justify-between items-center bg-pink-200 shadow-sm px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-40 sm:w-56" src={LOGO_URL} alt="logo" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6 text-lg font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-black transition-colors">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-black transition-colors">Grocery Express</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-black transition-colors">Cart({cartItems.length})</Link>
          </li>
        </ul>
      </nav>

      {/* Login/Logout Button */}
      <button
        className="ml-6 px-4 py-2 border border-black rounded-md bg-white hover:bg-black hover:text-white transition-colors"
        onClick={() => {
          setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"));
        }}
      >
        {btnName}
      </button>
      <input className="border border-black" value={UserData.loggedInUser} onChange={(e)=>{UserData.setUserName(e.target.value)}}></input>
    </header>
  );
};

export default Header;
