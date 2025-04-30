import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.count, 0);
  let bill = 0;
  cartItems.map((i) => {
    let value = i.price * 100;
    return (bill += i.count * value);
  });
  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="mt-20">
          <button
            className="text-white text-lg bg-red-600 p-3 rounded-md ml-6 cursor-pointer"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </button>
          <div className="flex gap-4 overflow-x-scroll no-scrollbar mt-10 mx-6">
            {cartItems.map((item) => {
              return <CardCard key={item.id} productData={item} />;
            })}
          </div>
          <div className="mt-10 flex ml-[32rem] gap-6">
            <p className="text-lg font-semibold">Total Price:-</p>
            <p className="text-lg font-semibold">&#8377;{bill}</p>
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <p className="text-red-500 font-bold text-3xl text-center">
            Nothing in the cart!
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
