import { useParams } from "react-router-dom";
import { getArticleById, incrementArticleVotes } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import Comments from "./Comments";

function Article() {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [displayedVotes, setDisplayedVotes] = useState(0);
  const [newVote, setNewVote] = useState(1);
  const { muteMode, setMuteMode } = useContext(MuteModeContext);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  function popwithcomments() {
    setShowComments(!showComments);
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
  }

  function popwithupvote() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setDisplayedVotes(displayedVotes + 1);

    incrementArticleVotes(article_id, 1).catch(() => {
      setError(true);
      setDisplayedVotes(displayedVotes - 1);
    });
  }

  function popwithdownvote() {
    muteMode=== "soundon" ? new Audio(popSound).play() : null;
    setDisplayedVotes(displayedVotes - 1);

    incrementArticleVotes(article_id, -1).catch(() => {
      setError(true);
      setDisplayedVotes(displayedVotes + 1);
    });
  }

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Opps, an error occurred! Better try that again, please.</p>;
  } else if (loading) {
    return (
      <h2>Loading the article with ID {article_id}! Please wait a moment.</h2>
    );
  } else {
    return (
      <div className={`articleCard-${darkMode}`}>
        <h2>{article.title}</h2>
        <p className="ArticleCardBodyText">
          written by {article.author}, on the topic of; {article.topic}.
        </p>
        <img
          src={article.article_img_url}
          alt="an image relating to the topic"
        />
        <p className="ArticleCardBodyText">{article.body}</p>
        <p>
          Total votes {article.votes + displayedVotes}, and there are{" "}
          {article.comment_count} comments
        </p>
        <nav className={`article-button-container-${darkMode}`}>
          <button id="red-button" onClick={popwithupvote}>
            {" "}
            upvote{" "}
          </button>
          <button id="grey-button" onClick={popwithcomments}>
            {" "}
            {showComments ? "Hide" : "Show"} comments
          </button>
          <button id="blue-button" onClick={popwithdownvote}>
            downvote
          </button>
        </nav>
        {showComments ? (
          <Comments
            setShowComments={setShowComments}
            showComments={showComments}
          />
        ) : null}
      </div>
    );
  }
}

export default Article;
