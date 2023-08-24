import { useState } from "react";
import "./comment.css";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
  userId,
  username,
  productId,
  parentId,
  commentId
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(submitLabel);
    if(submitLabel === "Reply"){
      handleSubmit(userId, username, productId, text, parentId)
    }else if(submitLabel === "Add"){
      handleSubmit(userId, username, productId, text);
    }else{
      handleSubmit(text);
    }
    
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your comment"
      />
      <div class="button-container">
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
      </div>
    </form>
  );
};

export default CommentForm;