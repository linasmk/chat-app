/* ===== App Dependencies ===== */
import React, { useState } from "react";
import { Link } from "react-router-dom";
/* ===== Code ===== */
const ConversationItem = ({ name, id }) => {
  return (
    <li>
      <Link className="conversation__item" to={`/edit/${id}`}>
        {name}
      </Link>
    </li>
  );
};
export default ConversationItem;
