/* ===== Redux ===== */
import { connect } from "react-redux";
import { editProfile } from "../actions/action-creators";
import { setDisappearingMessage } from "../actions/action-creators";
import userMatchAuthenticationDetails from "../selectors/userMatchAuthenticationDetails";
import { sendAuthentication } from "../actions/action-creators";
/* ====== Components ===== */

import ProfileComponent from "../components/Profile";

/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  sendAuthentication: (isLoggedIn, loggenInEmail, loggedInPassword) => {
    dispatch(sendAuthentication(isLoggedIn, loggenInEmail, loggedInPassword));
  },
  editProfile: (id, name, email, password) => {
    dispatch(editProfile(id, name, email, password));
  },
  setDisappearingMessage: (isMessageDisappearing) => {
    dispatch(setDisappearingMessage(isMessageDisappearing));
  },
});

export const Profile = connect(
  (state) => ({
    profile: userMatchAuthenticationDetails(state.authentication, state.users),
  }),
  mapDispatchToProps
)(ProfileComponent);
