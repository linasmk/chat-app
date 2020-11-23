/* ========= App Dependencies ============= */
import React from "react";
import ReactDOM from "react-dom";
/* =========== Redux ================== */
import store from "./store/configureStore";
import { Provider } from "react-redux";
/* =========== Router ================== */
import AppRouter from "./routers/AppRouter";

/* ========== Styles and Components ========== */
import "normalize.css/normalize.css";
import "./styles/styles.scss";
/* ========== Perormance ========== */
import reportWebVitals from "./reportWebVitals";
import { addUser } from "./actions/action-creators";
/* ========== Code ========== */

// store.dispatch(addUser("Me"));
const root = document.getElementById("root");
const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(jsx, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
