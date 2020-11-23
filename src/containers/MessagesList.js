/* ===== Redux ===== */
import { connect } from "react-redux";
/* ====== Components ===== */
import MessagesListComponent from "../components/MessagesList";
/* ========= Code ========= */
export const MessagesList = connect(
  (state) => ({
    messages: state.messages,
  }),
  {}
)(MessagesListComponent);
