import React from "react";
import HeaderNav from "./HeaderNav";
import LocomotiveScroll from "locomotive-scroll";
import HeroSection from "./HeroSection";
import Education from "./Education";
import AboutSection from "./AboutSection";
import { Contact } from "lucide-react";
import SkillSection from "./SkillSection";

// locmotiveScroll
const locomotiveScroll = new LocomotiveScroll();

const MainPage = () => {
  return (
    <div>
      <div>
        <HeaderNav />
        <div>
        <HeroSection />
        </div>
        <AboutSection/>
        {/* <Education /> */}
        {/* <Contact/> */}
        {/* <SkillSection/> */}

      </div>
    </div>
  );
};

export default MainPage;
