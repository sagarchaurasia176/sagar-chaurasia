import React from "react";
import myimg from "../img/HomeImg.png";
// mernstack icons
import express from "../img/express.png";
import mongo from "../img/mongo.jpg";
import node from "../img/node.png";
import ReactIcon from "../img/React.png";
import tailwind from "../img/tailwind.png";

const HeroSection = () => {
  return (
    <div>
      <div class="duration-75  p-3  h-auto">
      
        <div class=" flex justify-center  h-auto  ...">
          
          <div className="text-black  bg-slate-300  sm:w-[200px]  h-min p-4 rounded-lg">
            <div className=" ">
              <span className=" text-5xl ">👋</span>
              <p className=" font-light">Hey, there I'm</p>
              <span className=" font-bold text-3xl ">Sagar</span>
            </div>
         
          </div>
     

         
          <div className="">
          {/* 02 */}
          <div className=" sm:rounded-full" >
            <img src={myimg} className="  opacity-1" alt="sagarimg" />
          </div>
        </div>

        </div>



      </div>
    </div>
  );
};

export default HeroSection;
