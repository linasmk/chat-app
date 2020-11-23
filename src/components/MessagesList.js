/* ===== App Dependencies ===== */
import React, { useState, useEffect, useMemo } from "react";
import Axios from "axios";
/* ====== Components ===== */
import Message from "./Message";

/* ===== Code ===== */
const MessagesList = (props) => {
  const [remoteMsg, setRemoteMsg] = useState("");

  const getMessage = () => {
    Axios.get("https://api.jsonbin.io/b/5fba8a1f04be4f05c928deb0", {
      headers: {
        "secret-key":
          "$2b$10$tV5zq3HEOlSUCki6WUuKwOwfeHuZcaZQbCTw1jtIHv5DUOSMtQ3LG",
      },
    }).then((response) => {
      const res = response.data.message;
      setRemoteMsg(res);
    });
  };
  useEffect(() => {
    getMessage();
  }, [remoteMsg]);
  return (
    <section className="messages-list">
      <ul className="messages-list__ul">
        <Message
          removeMessage={props.removeMessage}
          msgColor="#00FFFF"
          msgSender={"JSONbin"}
          msgTxt={remoteMsg}
        />

        {props.messages.map((message) => (
          <Message
            id={message.id}
            removeMessage={props.removeMessage}
            msgColor="#9296f0"
            msgSender={message.author}
            key={message.id}
            msgTxt={message.message}
          />
        ))}
      </ul>
    </section>
  );
};

export default MessagesList;
