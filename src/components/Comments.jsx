import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllArticles, getCommentsByArticleID } from "../utils/api";
import { Link } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getCommentsByArticleID()
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (loading) {
    return <p>Loading comments for this article! Please wait a moment.</p>;
  }
  if (error) {
    return <p>error!</p>;
  }

  return (
    
    <ul>
    {comments.map((comment) => {
      return (
        <li key={comment.comment_id} className="Listcomments">
           
          <p>
          comment by {comment.author}
          </p>
          <p>Votes: {comment.voyes}</p>
          <p>{comment.body}</p>
           
        </li>
      );
    })}
  </ul>


  );
}

export default Comments;
