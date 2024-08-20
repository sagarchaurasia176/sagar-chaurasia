import React from "react";
import myImg from "../img/HomeImg.png";
import { about } from "@/Api/Aboutme";
const AboutSection = () => {
  return (
    <div>
      {/* div for text purpose about sections */}
     

      <div className=" flex container max-w-[1200px] h-[73vh]  items-center flex-col md:flex-row ">
        {/* two box */}
      <span className=" p-3 items-center flex sm:text-center text-white  text-3xl font-bold">
          About &nbsp;
          <b className=" text-blue-800 font-bold  animate-bounce">Me</b>
        </span>
       
        <div className=" md:w-[50%]">
          <div className="flex  flex-grow-0  justify-center items-center">
          <img className="  rounded-full w-2/3" src={myImg} alt="" />
          </div>
        </div>
        <br></br>
        <div className=" md:w-[50%]  flex items-center bg-slate-50 justify-center text-white font-sans capitalize space-x-2">
          <p className=" w-[23rem]">
            {about.map((Val) => (
              <>
              {/* <span>{Val.title}</span> */}
                <br />
                <span className=" space-x-4">{Val.about}</span>
              </>
            ))}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default AboutSection;
