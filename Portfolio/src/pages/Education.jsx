import React from "react";
import { TechSkillImg } from "@/lib/ImgSkillLib";
import { Experience } from "@/lib/Experience";
const Education = () => {
  return (
    <div>
      <div className="  mt-24  bg-slate-900   text-black  mb-44  p-4 h-[800px]  flex-wrap ">
        <div className=" flex items-center justify-center">
          <h2 className=" font-medium text-3xl">
            Skills & &nbsp;
            <span className=" text-blue-900 font-sans">Experiences</span>
          </h2>
        </div>
        <br></br>
        {/* skills icons */}
        <div className=" md:flex md:justify-center sm:block  p-1">
          {/* skill img here */}

          <div className="border-l-slate-50  p-4 grid grid-cols-4 sm:w-[400px]">
            {/* experience  */}
            {Experience.map((experience) => (
              <>
                <div key={experience.id} className=" col-span-2">
                  <span className=" text-center  text-black font-semibold">
                    {experience.time}
                  </span>
                  <div className="  ml-11"></div>
                  <span className="  text-blue-900  font-extrabold">
                    {experience.companyname}
                  </span>
                </div>
                <div className="  col-span-2 ">
                  <span className=" font-semibold">{experience.work}</span>
                </div>
              </>
            ))}
          </div>
          
          <div className=" mt-12 grid grid-cols-3 gap-7 ">
            {TechSkillImg.map((skillImg) => (
              <>
                <div className="" key={skillImg.img}>
                  <div className=" cursor-pointer  hover:animate-bounce duration-200">
                    <img
                      className=" md:w-20 w-15  sm:flex rounded-lg"
                      src={skillImg.src}
                      alt=""
                    />
                    <br></br>
                    <span className=" font-semibold  flex items-center justify-center">
                      {skillImg.name}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className=" border  border-s-black border-none border-l-slate-950 ml-11"></div>

          {/* experience text */}
      
        </div>
      </div>
    </div>
  );
};

export default Education;
