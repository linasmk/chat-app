/* ===== App Dependencies ===== */
import { connect } from "react-redux";
import { removeMessage } from "../actions/action-creators";
/* ====== Components ===== */
import MessageComponent from "../components/Message";
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  removeMessage: (id) => {
    dispatch(removeMessage(id));
  },
});
export const Message = connect(
  () => ({}),
  mapDispatchToProps
)(MessageComponent);
