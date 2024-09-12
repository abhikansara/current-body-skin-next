import Navbar from "@/components/Navbar";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import { isMobileDevice } from "@/helper/deviceDetect";
import HeadLines from "@/components/HeadLines";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import GetYoursToday from "@/components/GetYoursToday";
import GameChanger from "@/components/GameChanger";
import Ingredients from "@/components/Ingredients";
import BladderBliss from "@/components/BladderBliss";
import Reviews from "@/components/Reviews";
import GetGlow from "@/components/GetGlow";

export default async function Home() {
  const isMobile = await isMobileDevice();
  return (
    <GlobalProvider isMobile={isMobile}>
      {/* <Navbar /> */}
      {/* <HeadLines /> */}
      <Benefits />
      <VideoSection />
      <GetYoursToday />
      <GameChanger />
      <Ingredients />
      <BladderBliss />
      <Reviews />
      <GetGlow />
    </GlobalProvider>
  );
}
