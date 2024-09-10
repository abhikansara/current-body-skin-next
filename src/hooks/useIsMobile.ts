import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import { useWindowSize } from "./useWindowSize";

const useIsMobile = () => {
  const { isMobile } = useContext(GlobalContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;
  return isMobile || isBrowserMobile;
};

export default useIsMobile;
