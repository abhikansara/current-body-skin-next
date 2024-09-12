import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";
import { useWindowSize } from "./useWindowSize";

const useIsMobile = (ssr = false) => {
  const { isMobile } = useContext(GlobalContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;
  return (ssr && isMobile) || isBrowserMobile;
};

export default useIsMobile;
