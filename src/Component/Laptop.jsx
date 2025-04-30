import axios from "axios";
import React, { useEffect, useState } from "react";
import { LAPTOP_API } from "../utils/constant";
import ProductList from "./ProductList";

const Laptop = () => {
  const [products, setProducts] = useState([]);
  const getLaptop = async () => {
    try {
      const response = await axios.get(LAPTOP_API);
      console.log("Laptop", response?.data?.products);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLaptop();
  }, []);

  return (
    products && (
      <div>
        <ProductList data={products} heading="Laptop" />
      </div>
    )
  );
};

export default Laptop;
