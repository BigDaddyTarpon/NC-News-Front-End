import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [article, setArticle] = useState(false);
  const [topic, setTopic] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { muteMode, setMuteMode } = useContext(MuteModeContext);

  function popwithArticle() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setArticle(true);
    setTopic(false);
  }

  function popwithLogin() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
  }

  function popwithTopic() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setTopic(true);
    setArticle(false);
  }
  function pop() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
  }

  return (
    <nav className="Navbar-grid-container">
      <button id="red-button" onClick={popwithArticle}>
        <Link to="/articles"> Articles </Link>
      </button>
      <button id="grey-button" onClick={pop}>
        <Link to="/">🏠</Link>
      </button>
      <button id="white-button" onClick={popwithLogin}>
        <Link to="/users">Logged in as : {user}</Link>{" "}
      </button>
      <button id="blue-button" onClick={popwithTopic}>
        <Link to="/topics">Topics </Link>
      </button>
    </nav>
  );
}

export default Navbar;
