import React from "react";
import { Code } from "@/lib/Code";

const CodingProfile = () => {
  return (
    <div>
      <div className=" p-1  sm:h-96 text-center m-auto  mb-16 text-black">
        <div className=" text-center p-3">
          <span className=" sm:text-center  text-3xl font-bold">
            Coding &nbsp;
            <b className=" text-blue-800 font-bold">Profiles</b>
          </span>
          {/* paragraph section */}
        </div>
        <div className=" flex  justify-evenly flex-wrap items-center">
          {/* experience  */}
          {Code.map((codes) => (
            <>
              <div key={codes.id} className="">
                <img
                  className=" rounded-2xl cursor-pointer  duration-100 "
                  src={codes.src}
                  alt=""
                />
                <div className="">
                  <h3>{codes.heading}</h3>
                  <span className=" font-semibold">{codes.text}</span>
                </div>
              </div>
            </>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default CodingProfile;
