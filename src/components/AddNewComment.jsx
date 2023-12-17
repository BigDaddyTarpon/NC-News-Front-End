import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentToArticleByID } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import popSound from "../assets/popSound.mp3";
import { MuteModeContext } from "../contexts/MuteModeContext";

function AddNewComment({ comments, setComments, setAddComment }) {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState({ username: user, body: "" });
  const [error, setError] = useState(false); const { muteMode, setMuteMode } = useContext(MuteModeContext);

  const { article_id } = useParams();

  function removeCommentBox() {
    setAddComment(false);
    muteMode=== "soundon" ? new Audio(popSound).play() : null
  }

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
        setNewComment({ username: user, body: "" });
        muteMode=== "soundon" ? new Audio(popSound).play() : null;
      })

      .catch(() => {
        setError(true);
      });
  };

  return (
    <>
      <button id="grey-button" onClick={removeCommentBox}>
        close comment box
      </button>
      <form
        className="new-comment-form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          {" "}
          Please enter your new comment here:
          <textarea
            required
            value={newComment.body}
            id="new-comment-textarea"
            onChange={(event) => {
              handleChange(event);
            }}
            name="comment"
          ></textarea>
        </label>
        <button id="blue-button" type="submit">
          {" "}
          Submit your comment{" "}
        </button>
      </form>

      {error ? <p>Failed to post comment, try again later</p> : null}
    </>
  );
}

export default AddNewComment;
