import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const Active = createContext();

export const ActiveProvider = ({ children }) => {
  const [activeBackground, setActiveBackground] = useState(false);
  const [enterData, setEnterData] = useState(false);
  return (
    <Active.Provider
      value={{ activeBackground, setActiveBackground, enterData, setEnterData }}
    >
      {children}
    </Active.Provider>
  );
};

export const useActive = () => useContext(Active);
