import React from "react";
import myimg from "../img/HomeImg.png";
import { TypedJS } from "@/lib/TypedJS";

const HeroSection = () => {
  return (
    <div>
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

        <div className=" img-section ">
          <img
            src={myimg}
            className="w-52 ml-[130px]  md:ml-[500px] sm:flex sm:items-center md:w-60 transition-all  rounded-xl   shadow-md "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
