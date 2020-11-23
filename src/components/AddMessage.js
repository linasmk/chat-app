/* ===== App Dependencies ===== */
import React from "react";
import { BiSend } from "react-icons/bi";
/* ===== Code ===== */

const AddMessage = (props) => {
  let input;
  const sentMessageWithKeyPress = (e) => {
    if (e.key === "Enter") {
      props.addMessage(input.value, "Me");
      input.value = "";
    }
  };
  const sendMessageOnClick = (e) => {
    if (props.conversationId) {
      props.addMessage(input.value, "Me");
      input.value = "";
    }
  };

  return (
    <section className="new-message">
      <div className="new-message__textarea--wrapper">
        <textarea
          className="new-message__textarea"
          autoFocus={true}
          rows="2"
          placeholder="Text something"
          onKeyPress={sentMessageWithKeyPress}
          type="text"
          ref={(node) => {
            input = node;
          }}
        />
        <BiSend
          onClick={sendMessageOnClick}
          className="new-message__send-btn"
        />
      </div>
    </section>
  );
};

export default AddMessage;
