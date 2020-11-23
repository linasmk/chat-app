/* ================ Dependencies ============== */
import * as types from "../constants/ActionTypes";
/* =================================================
=========== MESSAGES REDUCER =====================
================================================= */

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
        },
      ]);
    case types.REMOVE_MESSAGE:
      return state.filter((message) => {
        return message.id !== action.id;
      });
    default:
      return state;
  }
};
export default messages;
