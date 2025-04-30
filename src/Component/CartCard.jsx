import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const CartCard = ({ productData }) => {
  const { image, price, title, brand } = productData;
  const dispatch = useDispatch();
  const count = useSelector(
    (store) =>
      store.cart.items.find((item) => item.id === productData.id)?.count || 0
  );
  return (
    <div className="border flex flex-col justify-center items-center rounded-lg p-4 shadow hover:shadow-md transition duration-300 w-56">
      <img
        src={image}
        alt="productImg"
        className="h-20 w-full object-contain mb-3"
      />
      <h3 className="text-sm font-semibold mb-1 line-clamp-2">{title}</h3>
      <div className="flex -ml-4">
        <p className="text-green-600 font-bold mb-2 mr-6">{brand}</p>
        <p className="text-green-600 font-bold mb-2">&#8377;{price * 100}</p>
      </div>
      {count > 0 ? (
        <button className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 cursor-pointer">
          <div className="flex justify-between text-lg">
            <p
              onClick={() => {
                dispatch(removeItems(productData));
              }}
              className=""
            >
              -
            </p>
            <p className="mx-6">{count}</p>
            <p
              onClick={() => {
                dispatch(addItems(productData));
              }}
            >
              +
            </p>
          </div>
        </button>
      ) : (
        <button
          className="bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
          onClick={() => {
            dispatch(addItems(productData));
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default CartCard;
