import React, { useEffect, useState } from "react";
import { TV_API } from "../utils/constant";
import axios from "axios";
import ProductList from "./ProductList";

const TV = () => {
  const [products, setProducts] = useState([]);
  const getTV = async () => {
    try {
      const response = await axios.get(TV_API);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTV();
  }, []);

  return (
    products && (
      <div>
        <ProductList data={products} heading="TV" />
      </div>
    )
  );
};

export default TV;
