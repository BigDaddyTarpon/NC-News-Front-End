import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import popSound from "../assets/popSound.mp3";
import { Link } from "react-router-dom";
import Articles from "./Articles";

function ArticleOptionsNavbar({order, setOrder, sort, setSort}) {
  const [article, setArticle] = useState(false);
  const [topic, setTopic] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function popwithDate() {
    new Audio(popSound).play();
    setSort(created_at)
    // setArticle(true);
    // setTopic(false);
  }

  function popwithFlip() {
    new Audio(popSound).play();
    setOrder(order === "asc"? "desc" : "asc")
  }

  function popwithComments() {
    new Audio(popSound).play();
    setSort(article.votes)
    // setTopic(true);
    // setArticle(false);
  }
  function popwithVotes() {
    new Audio(popSound).play();
  }

  return (
    <nav className="ArticleOptionsNavbar-grid-container">
      <button id="red-button" onClick={popwithDate}>
        {" "}
        sort by Date{" "}
      </button>
      <button id="grey-button" onClick={popwithFlip}>
        flip order
      </button>
      <button id="white-button" onClick={popwithComments}>
        sort by comments
      </button>
      <button id="blue-button" onClick={popwithVotes}>
        sort by votes
      </button>
    </nav>
  );
}

export default ArticleOptionsNavbar;
