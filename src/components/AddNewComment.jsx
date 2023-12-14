import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentToArticleByID } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function AddNewComment({ comments, setComments }) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({ username: user, body: "" });
  const [error, setError] = useState(false);

  const { article_id } = useParams();

  const handleChange = (event) => {
    setNewComment((newComment) => {
      const edit = { ...newComment };
      edit.body = event.target.value;

      return edit;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCommentToArticleByID(article_id, newComment)
      .then((response) => {
        setComments([response, ...comments]);
        
      })
    
      .catch(() => {
        setError(true);
      });
  };
  
  return (
    <>
      <form
        className="new-comment-form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label> Please enter your new comment here:</label>
        <textarea
          required
          id="new-comment-textarea"
          onChange={(event) => {
            handleChange(event);
          }}
          name="comment"
        ></textarea>
        <button id="submit-comment-button" type="submit">
          {" "}
          Submit your comment{" "}
        </button>
      </form>
    </>
  );
}

export default AddNewComment;
