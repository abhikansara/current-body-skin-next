import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import { isMobileDevice } from "@/helper/deviceDetect";
import LandingPage from ".";

export default async function Home() {
  const isMobile = await isMobileDevice();

  return (
    <GlobalProvider isMobile={isMobile}>
      <LandingPage />
    </GlobalProvider>
  );
}
