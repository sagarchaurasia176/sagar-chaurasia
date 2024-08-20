import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import HeroSection from "./HeroSection";
import Education from "./Education";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ShapeBottom from "./ShapeDivider/ShapeBottom";
import CodingProfile from "./CodingProfile";
import ContactPage from "./ContactPage";

// locmotiveScroll
const locomotiveScroll = new LocomotiveScroll({});

const MainPage = () => {
  return (
    <div>
      <div className=" bg-slate-900">
        <div className="  relative ">
          <HeroSection />
          <ShapeBottom />
        </div>
        <br></br>
        <AboutSection />
        <br></br>

        <ProjectSection />
        <Education />
        <br></br>
        <div className="">
          <CodingProfile />
        </div>
        <ContactPage />
        {/* <SkillSection/> */}
      </div>
    </div>
  );
};

export default MainPage;
