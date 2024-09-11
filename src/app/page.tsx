import Navbar from "@/components/Navbar";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import { isMobileDevice } from "@/helper/deviceDetect";
import HeadLines from "@/components/HeadLines";
import Benefits from "@/components/Benefits";

export default async function Home() {
  const isMobile = await isMobileDevice();
  return (
    <GlobalProvider isMobile={isMobile}>
      {/* <Navbar /> */}
      {/* <HeadLines /> */}
      <Benefits />
    </GlobalProvider>
  );
}
