import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllArticles, getCommentsByArticleID } from "../utils/api";
import popSound from "../assets/popSound.mp3";

import { useParams } from "react-router-dom";
import AddNewComment from "./AddNewComment";

function Comments() {
  const [comments, setComments] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { article_id } = useParams();
  const [addComment, setAddComment] = useState(false);

  function popwithAddComment() {
    setAddComment(true);
    new Audio(popSound).play();
  }

  useEffect(() => {
    getCommentsByArticleID(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <p>error!</p>;
  } else if (loading) {
    return <p>Loading comments for this article! Please wait a moment.</p>;
  } else {
    if (comments.length === 0) {
      return <h3> There are no comments yet! Would you like to write one?</h3>;
    } else {
      return (
        <ul>
          <button id="white-button" onClick={popwithAddComment}>
            add a comment
          </button>
          {addComment ? (
            <AddNewComment comments={comments} setComments={setComments} />
          ) : null}
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="Listcomments">
                <p>comment by {comment.author}</p>
                <p>Votes: {comment.votes}</p>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}
export default Comments;
