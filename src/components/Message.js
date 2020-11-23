/* ===== App Dependencies ===== */
import React from "react";
/* ===== Code ===== */
const Message = ({ id, msgTxt, msgSender, msgColor, removeMessage }) => {
  return (
    <section className="message">
      <p style={{ backgroundColor: msgColor }} className="message__txt">
        <i>{msgSender}:</i> {msgTxt}
      </p>
    </section>
  );
};

export default Message;
