import React, { useEffect, useState } from "react";
import { AUDIO_API } from "../utils/constant";
import axios from "axios";
import ProductList from "./ProductList";

const Audio = () => {
  const [products, setProducts] = useState([]);
  const getAudio = async () => {
    try {
      const response = await axios.get(AUDIO_API);
      console.log("audio", response?.data?.products);
      setProducts(response?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAudio();
  }, []);

  return (
    products && (
      <div>
        <ProductList data={products} heading="Audio" />
      </div>
    )
  );
};

export default Audio;
