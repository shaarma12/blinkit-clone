import axios from "axios";
import React, { useEffect, useState } from "react";
import { GAMING_API } from "../utils/constant";
import ProductList from "./ProductList";

const Gaming = () => {
  const [products, setProducts] = useState([]);
  const getGames = async () => {
    try {
      const response = await axios.get(GAMING_API);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getGames();
  }, []);

  return (
    products && (
      <div>
        <ProductList data={products} heading="Gaming" />
      </div>
    )
  );
};

export default Gaming;
