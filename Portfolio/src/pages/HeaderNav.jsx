import React from "react";
import { Button } from "@/components/ui/button";

const HeaderNav = () => {
  return (
    <div>
      <div className=" bg-slate-900  text-white  sm:w-[100%]  sm:shadow-sm p-1">
        {/* header nav div */}
        <div className=" flex justify-evenly  mx-auto    max-w-[1200px]">
          <div className=" text-blue-800  font-bold font-sans">
            Sagar_
            <span className=" text-white   ">Chaurasia</span>
          </div>  
          {/* navmenus bars */}
          <ul className="font-sans flex  lg:space-x-6 ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Coding</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
