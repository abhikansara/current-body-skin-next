"use client";

import React from "react";
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
  return (
    <div>
      <Navbar />
      <HeadLines />
      <Benefits />
      <VideoSection />
      <GetYoursToday />
      <GameChanger />
      <Ingredients />
      <BladderBliss />
      <Reviews />
      <GetGlow />
      <About />
      <Guarentee />
      <FAQ />
      <Footer />
      <OrderNow />
    </div>
  );
};

export default LandingPage;
