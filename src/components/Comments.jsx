import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { getAllArticles, getCommentsByArticleID } from "../utils/api";

import { useParams } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleID(article_id)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  if (error) {
    return <p>error!</p>;
  } else if (loading) {
    return <p>Loading comments for this article! Please wait a moment.</p>;
  } else {
    if(comments.length === 0){return (
      <h3> There are no comments yet! Would you like to write one?</h3>
    )}
    else{
    return (
      <ul>
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
