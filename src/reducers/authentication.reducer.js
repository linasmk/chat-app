import * as types from "../constants/ActionTypes";
/* ===============================================
============ AUTHENTICATION REDUCER ============
================================================= */
const authenticationDefaultState = {
  isLoggedIn: false,
  loggenInEmail: "",
  loggedInPassword: "",
};

const authentication = (state = authenticationDefaultState, action) => {
  switch (action.type) {
    case types.SEND_AUTHENTICATION:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        loggenInEmail: action.loggenInEmail,
        loggedInPassword: action.loggedInPassword,
      };
    default:
      return state;
  }
};
export default authentication;
