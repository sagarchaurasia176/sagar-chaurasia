import React from "react";
import myimg from "../img/HomeImg.png";
import { TypedJS } from "@/lib/TypedJS";
// // mernstack icons
// import express from "../img/express.png";
// import mongo from "../img/mongo.jpg";
// import node from "../img/node.png";
// import ReactIcon from "../img/React.png";
// import tailwind from "../img/tailwind.png";

const HeroSection = () => {
  return (
    <div>
      <div className=" flex  justify-between  gap-3   h-48  bg-slate-900 text-white p-1">
        <div className=" text-section sm:ml-48   sm:flex sm:items-center">
          <TypedJS />
        </div>
        <div className=" img-sections">
          <img
            src={myimg}
            className="  sm:w-2/3 sm:flex-grow-0  max-sm:w-36  shadow-md rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
