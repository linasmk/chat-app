/* ===== Redux ===== */
import { connect } from "react-redux";
import { sendAuthentication } from "../actions/action-creators";
/* ====== Components ===== */
import LoginPageComponent from "../components/LoginPage";

/* ========= Code ========= */
const mapDispatchToProps = (dispatch) => ({
  dispatch: (isLoggedIn, loggenInEmail, loggedInPassword) => {
    dispatch(sendAuthentication(isLoggedIn, loggenInEmail, loggedInPassword));
  },
});
export const LoginPage = connect(
  (state) => ({
    users: state.users,
  }),
  mapDispatchToProps
)(LoginPageComponent);
