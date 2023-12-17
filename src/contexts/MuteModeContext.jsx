import { createContext, useState } from "react";

export const MuteModeContext = createContext();

export const MuteModeProvider = (props) => {
  const [muteMode, setMuteMode] = useState("soundon");
  return (
    <MuteModeContext.Provider value={{ muteMode, setMuteMode }}>
      {props.children}
    </MuteModeContext.Provider>
  );
};