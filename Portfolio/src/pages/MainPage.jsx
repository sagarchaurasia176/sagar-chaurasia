import React from "react";
import HeaderNav from "./HeaderNav";
import LocomotiveScroll from "locomotive-scroll";
import HeroSection from "./HeroSection";
import Education from "./Education";
import AboutSection from "./AboutSection";
import SkillSection from "./SkillSection";
import ProjectSection from "./ProjectSection";
import ShapeBottom from "./ShapeDivider/ShapeBottom";
import CodingProfile from "./CodingProfile";
import ContactPage from "./ContactPage";

// locmotiveScroll
const locomotiveScroll = new LocomotiveScroll();

const MainPage = () => {
  return (
    <div>
      <div>
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
      <ContactPage/>
        {/* <SkillSection/> */}
      </div>
    </div>
  );
};

export default MainPage;
