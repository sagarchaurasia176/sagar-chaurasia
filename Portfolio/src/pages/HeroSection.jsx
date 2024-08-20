import React from "react";
import { TypedJS } from "@/lib/TypedJS";
import Header from "./Header";
import ShapeBottom from "./ShapeDivider/ShapeBottom";

const HeroSection = () => {
  return (
    <div>
      <div className="  bg-slate-900   text-white  p-1">
        <Header />
      </div>
      <div
        className=" lg:block flex-wrap lg:justify-evenly  block h-[350px]  
      gap-3 bg-slate-900 text-white p-1"
      >
        <div className="text-section flex  justify-center items-center">
          <TypedJS />
        </div>
        <br></br>

        <div className=" items-center flex justify-center">
          <span className=" text-red-200 mb-14 text-center sm:text-1xl ">
            Building Software to solve real life Problem
          </span>
        </div>

        {/* map fucntions apply here */}
      </div>

      <ShapeBottom />
    </div>
  );
};

export default HeroSection;
