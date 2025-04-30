import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const totalQuantity = cartItem.reduce((acc, item) => acc + item.count, 0);
  return (
    <div className="flex bg-white shadow-md fixed top-0 right-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center bg-white p-4 w-[10%]">
        <Link to="/">
          <img src="https://couponzania.com/wp-content/uploads/2025/03/Blinkit-Logo-e1741167448909.webp" />
        </Link>
      </div>
      <div className="w-[80%] flex items-center justify-evenly">
        <div className="w-[25%] flex flex-col justify-center items-center">
          <p className="font-bold text-lg">Delivery in 8 minutes</p>
          <p className="text-sm">542, Sakdarpur, Shahdara, Delhi...</p>
        </div>
        <input
          type="text"
          placeholder="search for groceries"
          className="w-[65%] border-[1px] text-lg placeholder-gray-600 rounded-xl p-2 bg-transparent"
        />
        <button className="w-[10%] text-lg cursor-pointer">Login</button>
      </div>
      <div className="w-[10%] flex justify-center items-center">
        <Link to="/cart">
          <p className="relative top-3 left-4">{totalQuantity}</p>
          <img
            src="https://img.icons8.com/?size=100&id=CE7rP-35_XQR&format=png&color=000000"
            className="w-12 -mt-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
