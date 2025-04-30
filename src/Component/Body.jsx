import React from "react";
import Appliances from "./Appliances";
import Audio from "./Audio";
import Gaming from "./Gaming";
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import TV from "./TV";

const Body = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-28">
      <Appliances />
      <Audio />
      <Gaming />
      <Laptop />
      <Mobile />
      <TV />
    </div>
  );
};

export default Body;
