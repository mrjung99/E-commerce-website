import { createContext, useContext } from "react";

export const MessageContext = createContext();

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage is must be used inside MessageProvider");
  }

  return context;
};
