import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

const useIsMobile = () => {
  const { isMobile } = useContext(GlobalContext);
  return isMobile;
};

export default useIsMobile;
