/* ===== Redux ===== */
import { connect } from "react-redux";
import { addConversation } from "../actions/action-creators";
/* ====== Components ===== */
import SidebarComponent from "../components/Sidebar";
/* ========= Code ========= */
/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  addConversation: (name) => {
    dispatch(addConversation(name));
  },
});
export const Sidebar = connect(
  (state) => ({
    conversations: state.conversations,
  }),
  mapDispatchToProps
)(SidebarComponent);
