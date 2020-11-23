/* ================ Dependencies ============== */
import { v4 as uuidv4 } from "uuid";
import * as types from "../constants/ActionTypes";
/* ===============================================
================= USERS REDUCER ================
================================================= */
const addUserDefaultState = [
  {
    id: uuidv4(),
    name: "Linas",
    email: "linas@mail.lt",
    password: "admin",
  },
];
const users = (state = addUserDefaultState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return [...state, action.id, action.name, action.email, action.password];

    case types.EDIT_PROFILE:
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            name: action.name,
            email: action.email,
            password: action.password,
          };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};
export default users;
