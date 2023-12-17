import { useContext, useEffect, useState } from "react";
//import { darkMode } from "../contexts/DarkModeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

function Header() {

  function popwithmute() {}

  function popwiththeme(){}

  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [dark, setDark] = useState("dark");
  return (
    //  <nav className="options-bar"> 
    <div className={`top-grid-container-${darkMode}`}>
      <button id="red-button" onClick={popwithmute}> 
            sounds
          </button>
      <h1 className={`header-${darkMode}`}> NC News</h1>
      <button id="blue-button" onClick={popwiththeme}>
            theme
          </button>
        
    </div>
      // </nav> 
  );
}

export default Header;
