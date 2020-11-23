import * as types from "../constants/ActionTypes";
/* ===============================================
============ SETTINGS REDUCER ============
================================================= */
const settingsDefaultState = {
  isMessageDisappearing: false,
};
const settings = (state = settingsDefaultState, action) => {
  switch (action.type) {
    case types.SET_DISAPPEARING_MESSAGE:
      return {
        ...state,
        isMessageDisappearing: action.isMessageDisappearing,
      };
    default:
      return state;
  }
};
export default settings;
