/* ================ Dependencies ============== */
import { v4 as uuidv4 } from "uuid";
import * as types from "../constants/ActionTypes";
/* =================================================
=========== CONVERSATIONS REDUCER =====================
================================================= */
const conversationsReducerDefaultState = [
  {
    id: uuidv4(),
    name: "Small Talk",
  },
];
const conversations = (state = conversationsReducerDefaultState, action) => {
  switch (action.type) {
    case types.ADD_CONVERSATION:
      return [...state, { id: action.id, name: action.name }];
    default:
      return state;
  }
};
export default conversations;
