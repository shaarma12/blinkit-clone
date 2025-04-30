import React, { useEffect, useState } from "react";
import axios from "axios";
import { APPLIANCES_API } from "../utils/constant";
import ProductList from "./ProductList";

const Appliances = () => {
  const [products, setProducts] = useState([]);
  const getApppliance = async () => {
    try {
      const response = await axios.get(APPLIANCES_API);
      console.log("Appliances", response?.data?.products);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getApppliance();
  }, []);
  return (
    products && (
      <div>
        <ProductList data={products} heading="Appliances" />
      </div>
    )
  );
};

export default Appliances;
