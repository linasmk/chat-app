/* ===== Redux ===== */
import { connect } from "react-redux";
import { addMessage } from "../actions/action-creators";
/* ====== Components ===== */
import AddMessageComponent from "../components/AddMessage";

/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, author) => {
    dispatch(addMessage(message, author));
  },
});

export const AddMessage = connect(
  () => ({}),
  mapDispatchToProps
)(AddMessageComponent);
