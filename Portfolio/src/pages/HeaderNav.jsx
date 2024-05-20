import React from "react";
import { Button } from "@/components/ui/button";

const HeaderNav = () => {
  return (
    <div>
      <div className=" bg-white flex  justify-evenly  sm:w-full shadow-sm p-4">
        {/* header */}
        <div className=" text-blue-700 font-sans">
          Sagar_
          <span className=" text-black ">Chaurasia</span>
        </div>

        {/* navmenus bars */}
          <ul className=" flex items-center justify-center font-sans lg:space-x-6 ">
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Work</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Coding</a></li>
            <li><a href="">Contact</a></li>
          </ul>
    
      
      </div>


    </div>
  );
};

export default HeaderNav;
