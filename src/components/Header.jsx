import { useContext, useEffect, useState } from "react";
//import { darkMode } from "../contexts/DarkModeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { MuteModeContext } from "../contexts/MuteModeContext";
import popSound from "../assets/popSound.mp3";

function Header() {

  const { muteMode, setMuteMode } = useContext(MuteModeContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [dark, setDark] = useState("dark");


  function popwithmute() {
    setMuteMode(muteMode==="soundon" ? "soundoff" : "soundon")
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
  }
 

  function popwiththeme(){
    setDarkMode(darkMode==="dark"? "light" : "dark")
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
  }
  return (
    //  <nav className="options-bar"> 
    <div className={`top-grid-container-${darkMode}`}>
      <button id="red-button" onClick={popwithmute}> 
            {muteMode === "soundon"? "click to mute" : "click for sounds"}
          </button>
      <h1 className={`header-${darkMode}`}> NC News</h1>
      <button id="blue-button" onClick={popwiththeme}>
            {darkMode==="dark"? "cancel DarkMode" : "activate DarkMode"}
          </button>
        
    </div>
      // </nav> 
  );
}

export default Header;
