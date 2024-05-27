import React from "react";
import HeaderNav from "./HeaderNav";
import LocomotiveScroll from "locomotive-scroll";
import HeroSection from "./HeroSection";
import Education from "./Education";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ShapeBottom from "./ShapeDivider/ShapeBottom";
import CodingProfile from "./CodingProfile";
import ContactPage from "./ContactPage";
import { Routes } from "react-router-dom";
import { Route } from "lucide-react";

// locmotiveScroll
const locomotiveScroll = new LocomotiveScroll({});

const MainPage = () => {
  return (
    <div>
      <div className=" ">
        <HeaderNav />
        <div className="  relative">
          <HeroSection />
          <ShapeBottom />
        </div>
        <AboutSection />
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
