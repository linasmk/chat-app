/* ===== App Dependencies ===== */
import React, { useState } from "react";
/* ===== Components ===== */
import ConversationItem from "./ConversationItem";
/* ===== Code ===== */
const Sidebar = ({ conversations, addConversation, sidebarOpen }) => {
  const [convesation, setConversation] = useState("");
  const handleInputChange = (e) => {
    setConversation(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addConversation(convesation);
    setConversation("");
  };
  return (
    <aside className={sidebarOpen ? "sidebar--open" : "sidebar"}>
      <section className="conversations">
        <h3 className="conversations__heading">Conversations List</h3>
        <ul className="conversations__ul">
          {conversations.map((conversation) => (
            <ConversationItem key={conversation.id} {...conversation} />
          ))}
        </ul>
      </section>
      <section className="create-conversation">
        <form className="create-conversation__form" onSubmit={handleOnSubmit}>
          <input
            className="create-conversation__input"
            value={convesation}
            type="text"
            onChange={handleInputChange}
            placeholder="Add conversation"
          />
          <button type="submit" className="create-conversation__btn">
            Add
          </button>
        </form>
      </section>
    </aside>
  );
};

export default Sidebar;
