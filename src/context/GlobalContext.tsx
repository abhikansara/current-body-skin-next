"use client";
import OrderNow from "@/components/OrderNow";
import { createContext } from "react";

export const GlobalContext = createContext<{
  isMobile: boolean;
}>({
  isMobile: false,
});

export const GlobalProvider = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <GlobalContext.Provider value={{ isMobile }}>
      <OrderNow />
      {children}
    </GlobalContext.Provider>
  );
};
