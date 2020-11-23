/* ================ Dependencies ============== */
import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
/* =================================================
================== ACTION CREATORS ================
================================================= */
export const sendAuthentication = (
  isLoggedIn,
  loggenInEmail,
  loggedInPassword
) => ({
  type: types.SEND_AUTHENTICATION,
  isLoggedIn,
  loggenInEmail,
  loggedInPassword,
});
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: uuidv4(),
  message,
  author,
});
export const removeMessage = (id) => ({
  type: types.REMOVE_MESSAGE,
  id,
});
export const addUser = (name, email, password) => ({
  type: types.ADD_USER,
  id: uuidv4(),
  name,
  email,
  password,
});
export const addConversation = (name = "") => ({
  type: types.ADD_CONVERSATION,
  id: uuidv4(),
  name,
});
export const editProfile = (id, name, email, password) => ({
  type: types.EDIT_PROFILE,
  id,
  name,
  email,
  password,
});
export const setDisappearingMessage = (isMessageDisappearing) => ({
  type: types.SET_DISAPPEARING_MESSAGE,
  isMessageDisappearing,
});
