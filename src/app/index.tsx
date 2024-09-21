"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeadLines from "@/components/HeadLines";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import GetYoursToday from "@/components/GetYoursToday";
import GameChanger from "@/components/GameChanger";
import Ingredients from "@/components/Ingredients";
import BladderBliss from "@/components/BladderBliss";
import Reviews from "@/components/Reviews";
import GetGlow from "@/components/GetGlow";
import About from "@/components/About";
import Guarentee from "@/components/Guarentee";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import OrderNow from "@/components/OrderNow";

const LandingPage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const showComponent = document.getElementById("show-component");
    const hideComponent = document.getElementById("hide-component");

    if (showComponent && hideComponent) {
      const { top: thirdTop } = showComponent.getBoundingClientRect();
      const { bottom: secondLastBottom } =
        hideComponent.getBoundingClientRect();

      // Show button when the third component is in view and the second last component is not
      setShowButton(thirdTop <= window.innerHeight && secondLastBottom > 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HeadLines />
      <Benefits />
      <VideoSection id="show-component" />
      <GetYoursToday />
      <GameChanger />
      <Ingredients />
      <BladderBliss />
      <Reviews />
      <GetGlow />
      <About id="hide-component" />
      <Guarentee />
      <FAQ />
      <Footer />
      {showButton && <OrderNow />}
    </div>
  );
};

export default LandingPage;
