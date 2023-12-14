import { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import {
  deleteCommentbyID,
  getAllArticles,
  getCommentsByArticleID,
} from "../utils/api";
import popSound from "../assets/popSound.mp3";

import { useParams } from "react-router-dom";
import AddNewComment from "./AddNewComment";

function Comments({ showComments, setShowComments }) {
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

  function popwithdeleteComment(comment_id) {
    deleteCommentbyID(comment_id);
    new Audio(popSound)
      .play()
      .then((response) => {
        
        setComments(
          comments.filter((comment) => {
            return comment.comment_id !== comment_id;
            
          })
        );
      })
      .catch(() => {
        setError(true);
      });
      return(
        error ? <p>error deleting that comment! Better try again later</p> : null
      )
      
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
  } else if (comments.length === 0) {
    return (
      <h3>
        {" "}
        There are no comments yet! Would you like to write one?
        <button id="white-button" onClick={popwithAddComment}>
          add a comment
        </button>
      </h3>
    );
  } else {
    return (
      <ul>
        <button id="red-button" onClick={popwithAddComment}>
          add a comment
        </button>
        {addComment ? (
          <AddNewComment comments={comments} setComments={setComments} setShowComments={setShowComments} showComments={showComments} />
        ) : null}
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="Listcomments">
              <p>comment by {comment.author}</p>
              <p>
                Votes: {comment.votes} {"   "}
                {user !== comment.author ? null : (
                  <button
                    id="blue-button"
                    onClick={() => popwithdeleteComment(comment.comment_id)}
                  >
                    delete your comment
                  </button>
                )}
              </p>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Comments;
