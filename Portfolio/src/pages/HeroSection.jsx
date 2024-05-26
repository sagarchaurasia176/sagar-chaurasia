import React from "react";
import myimg from "../img/HomeImg.png";
import { TypedJS } from "@/lib/TypedJS";
const HeroSection = () => {
  return (
    <div>
      <div className=" flex  justify-between h-[280px]  md:h-[380px]  gap-3 bg-slate-900 text-white p-1">
        <div className=" text-section sm:ml-48 ">
         
          <TypedJS />
        </div>

        <div className=" img-sections">
          <img
            src={myimg}
            className="  sm:w-2/3  sm:flex-grow-0 rounded-xl  max-sm:w-36  shadow-md "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
