import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCommentToArticlebByID } from "../utils/api";
import { user } from "pg/lib/defaults";
import { UserContext } from "../contexts/UserContext";

function CommentAdder() {

    const user = usecontext(UserContext)
    const [newComment, setNewComment] = useState({username: user, body:""})

    const handleChange = (event) =>{
setNewComment((newComment)=>{const edit = {...newComment};
edit.body = event.target.value;
return edit})
    }
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

export default CommentAdder;
