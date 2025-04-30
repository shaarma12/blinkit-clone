import React from "react";
import Product from "./Product";

const ProductList = ({ heading, data }) => {
  return (
    <div className="w-[85rem]">
      <p className="mb-3 font-bold text-lg">{heading}</p>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        {data.map((prod) => {
          return <Product key={prod?.id} productData={prod} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
