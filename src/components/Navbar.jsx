import { useState } from "react";
import popSound from "../assets/popSound.mp3";

function Navbar() {
  const [article, setArticle] = useState(false);
  const [topic, setTopic] = useState(false);

  function popwithArticle() {
    new Audio(popSound).play();
    setArticle(true);
    setTopic(false);
  }

  function popwithLogin() {
    new Audio(popSound).play();
  }

  function popwithTopic() {
    new Audio(popSound).play();
    setTopic(true);
    setArticle(false);
  }
  return (
    <nav className="Navbar-grid-container">
      <button id="red-button" onClick={popwithArticle}>
        {" "}
        Articles
      </button>
      <button id="white-button" onClick={popwithLogin}>
        {" "}
        Logged in as "nobody"{" "}
      </button>
      <button id="blue-button" onClick={popwithTopic}>
        {" "}
        Topics
      </button>
    </nav>
  );
}

export default Navbar;
