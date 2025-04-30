import axios from "axios";
import React, { useEffect, useState } from "react";
import { MOBILE_API } from "../utils/constant";
import ProductList from "./ProductList";

const Mobile = () => {
  const [products, setProducts] = useState([]);
  const getMobile = async () => {
    try {
      const response = await axios.get(MOBILE_API);
      console.log("Mobile", response?.data?.products);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMobile();
  }, []);

  return (
    products && (
      <div>
        <ProductList data={products} heading="Mobile" />
      </div>
    )
  );
};

export default Mobile;
