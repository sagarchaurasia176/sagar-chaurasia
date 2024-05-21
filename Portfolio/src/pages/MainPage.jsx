import React from "react";
import HeaderNav from "./HeaderNav";
import LocomotiveScroll from 'locomotive-scroll';
import HeroSection from "./HeroSection";
import Education from "./Education";

// locmotiveScroll
const locomotiveScroll = new LocomotiveScroll();

const MainPage = () => {
  return (
    <div>
      <div className=" ">
        <HeaderNav />
        <HeroSection/>
        <Education/>
      </div>
    </div>
  );
};

export default MainPage;
