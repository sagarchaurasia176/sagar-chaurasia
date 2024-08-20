// import { Button } from "@/components/ui/button";
import React from "react";

const ProjectSection = () => {
  return (
    <div className="  sm:h-96 text-white  flex-row">
      <div className=" flex  justify-center items-center p-3">
        <span className=" sm:text-center  text-3xl font-bold">
          Some Recent &nbsp;
          <b className=" text-blue-800 font-bold">Projects</b>
        </span>
        {/* paragraph section */}
      </div>
      <div className=" flex sm:w-auto  justify-center space-x-2 items-center p-1 ">
        <button className=" text-center bg-slate-800 text-white p-2 rounded-md ">
          Personal
        </button>
        <button className=" text-center bg-slate-800 text-white p-2 rounded-md ">
          Internship
        </button>
        <button className=" text-center bg-slate-800 text-white p-2 rounded-md ">
          Freelance
        </button>
        <button className=" text-center bg-slate-800 text-white p-2 rounded-md ">
          All
        </button>
      </div>

      <h1>comming soon</h1>
    </div>
  );
};

export default ProjectSection;
