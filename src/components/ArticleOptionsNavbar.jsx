import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";
import { Link } from "react-router-dom";
import Articles from "./Articles";

function ArticleOptionsNavbar({order, setOrder, sort, setSort}) {
  const [article, setArticle] = useState(false);
  const [topic, setTopic] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { muteMode, setMuteMode } = useContext(MuteModeContext);

  function popwithDate() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setSort('created_at')
    
  }

  function popwithFlip() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setOrder(order === "asc"? "desc" : "asc")
  }

  function popwithComments() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setSort('comment_count')
    
  }
  function popwithauthor() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setSort('author')
  }

  function popwithvotes() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setSort('articles.votes')
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
      <button id="grey-button" onClick={popwithvotes}>
        sort by votes
        </button>
      <button id="blue-button" onClick={popwithauthor}>
        sort by author
      </button>
    </nav>
  );
}

export default ArticleOptionsNavbar;
