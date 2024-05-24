import { Button } from "@/components/ui/button";
import React from "react";

const AboutSection = () => {
  return (
    <div>
      {/* div for text purpose about sections */}
      <div className="  p-1 bg-slate-50  sm:h-96 text-center m-auto  sm:my-36 text-black">
        <div className=" flex  justify-center items-center p-3">
          <span className=" sm:text-center  text-3xl font-bold">
            About &nbsp;
            <b className=" text-blue-800 font-bold">Me</b>
          </span>
          {/* paragraph section */}
        </div>
        <div className="flex justify-center sm:my-10  p-3  font-light">
          <span className=" sm:w-[820px]">
          Hello there! I'm Sagar Chaurasia,a passionate Programmer
           and Developer whose target is to convert
           the thought process into a program and build the craziest things.
           <br></br>
           Always eager to enhance my knowledge, collaborate with people and make projects

          </span>
          <div>
          </div>
        </div>
        <div className=" flex justify-center items-center space-x-4">
        <Button>Checkout Resume</Button>
        <Button>Connect with me</Button>
    

        </div>
       

      </div>
   
    </div>
  );
};

export default AboutSection;
