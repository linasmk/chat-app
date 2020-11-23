/* ===== App Dependencies ===== */
import React, { Fragment } from "react";
/* ===== Components ===== */
import MessagesList from "../components/MessagesList";
import AddMessage from "../components/AddMessage";

/* ===== Code ===== */
const ChatView = (props) => {
  let disappearing = props.disappearing.isMessageDisappearing.valueOf();
  return (
    <Fragment>
      <MessagesList
        disappearing={disappearing}
        removeMessage={props.removeMessage}
        params={props.params}
        messages={props.messages}
        conversationId={props.conversationId}
      />
      <AddMessage
        addMessage={props.addMessage}
        conversationId={props.conversationId}
      />
    </Fragment>
  );
};
export default ChatView;
