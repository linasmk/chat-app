/* ===== Redux ===== */
import { connect } from "react-redux";
import { addMessage } from "../actions/action-creators";
import { removeMessage } from "../actions/action-creators";
/* ====== Components ===== */
import ChatViewComponent from "../components/ChatView";

/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, author) => {
    dispatch(addMessage(message, author));
  },
  removeMessage: (id) => {
    dispatch(removeMessage(id));
  },
});
export const ChatView = connect(
  (state, props) => ({
    messages: state.messages,
    disappearing: state.settings,
    params: props.match.params.id,
    conversationId: state.conversations
      .map((conversation) => {
        return conversation.id;
      })
      .filter(
        (conversation) => conversation.toString() === props.match.params.id
      )
      .toString(),
  }),
  mapDispatchToProps
)(ChatViewComponent);
