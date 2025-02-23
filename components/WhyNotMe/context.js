import { createContext, useContext } from "react"

export const WContext = createContext({
  answer: null,
  setAnswer: () => {},
  messageSent: false,
  setMessageSent: () => {},
});

export const useWContext = () => {
  return useContext(WContext);
};

