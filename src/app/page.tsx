import Navbar from "@/components/Navbar";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";
import { isMobileDevice } from "@/helper/deviceDetect";

export default async function Home() {
  const isMobile = await isMobileDevice();
  return (
    <GlobalProvider isMobile={isMobile}>
      <Navbar />
    </GlobalProvider>
  );
}
