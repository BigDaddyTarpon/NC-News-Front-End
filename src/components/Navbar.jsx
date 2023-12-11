import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import popSound from "../assets/popSound.mp3";
import { Link } from "react-router-dom";
import Articles from "./Articles";

function Navbar() {
  const [article, setArticle] = useState(false);
  const [topic, setTopic] = useState(false);
  const { user, setUser } = useContext(UserContext);

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
  function pop() {
    new Audio(popSound).play();
  }

  return (
    <nav className="Navbar-grid-container">
      <button id="red-button" onClick={popwithArticle}>
        {" "}
        <Link to="/articles"> Articles </Link>
      </button>
      <button id="grey-button" onClick={pop}>
        <Link to="/">🏠</Link>
      </button>
      <button id="white-button" onClick={popwithLogin}>
        {" "}
        <Link to="/users">Logged in as : {user}</Link>{" "}
      </button>
      <button id="blue-button" onClick={popwithTopic}>
        {" "}
        <Link to="/topics">Topics </Link>
      </button>
    </nav>
  );
}

export default Navbar;
