import { useParams } from "react-router-dom";
import { getArticleById, incrementArticleVotes } from "../utils/api";
import { useContext, useEffect, useState } from "react";
import popSound from "../assets/popSound.mp3";

import Comments from "./Comments";

function Article() {
  const { article_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [displayedVotes, setDisplayedVotes] = useState(0);
  const [newVote, setNewVote] = useState(1);

  function popwithcomments() {
    setShowComments(!showComments);
    new Audio(popSound).play();
  }

  function popwithupvote() {
    new Audio(popSound).play();
    setDisplayedVotes(displayedVotes + 1);
    setNewVote(1);
    incrementArticleVotes(article_id, newVote).catch(() => {
      setError(true);
      setDisplayedVotes(displayedVotes - 1);
    });
  }

  function popwithdownvote() {
    new Audio(popSound).play();
    setDisplayedVotes(displayedVotes - 1);
    setNewVote(-1);
    incrementArticleVotes(article_id, newVote).catch(() => {
      setError(true);
      setDisplayedVotes(displayedVotes - 1);
    });
  }

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setLoading(false);
        console.log(article.votes);
        console.log(data);
        setDisplayedVotes(article.votes || 0);
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
      <div className="articleCard">
        <h2>{article.title}</h2>
        <p className="ArticleCardBodyText">
          written by {article.author}, on the topic of; {article.topic}.
        </p>
        <p className="ArticleCardBodyText">
          {" "}
          Total votes {displayedVotes}, and there are {article.comment_count}{" "}
          comments
        </p>
        <img
          src={article.article_img_url}
          alt="an image relating to the topic"
        />
        <p>{article.body}</p>
        <nav className="article-button-container">
          <button id="red-button" onClick={popwithupvote}>
            {" "}
            upvote{" "}
          </button>
          <button id="white-button" onClick={popwithcomments}>
            {" "}
            {showComments ? "Hide" : "Show"} the comments
          </button>
          <button id="blue-button" onClick={popwithdownvote}>
            downvote
          </button>
        </nav>
        {showComments ? <Comments /> : null}
      </div>
    );
  }
}

export default Article;
