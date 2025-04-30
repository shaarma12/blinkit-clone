import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
      <div className="w-[10%]"></div>
    </div>
  );
};

export default Header;
