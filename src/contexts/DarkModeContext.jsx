import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState("dark");
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};