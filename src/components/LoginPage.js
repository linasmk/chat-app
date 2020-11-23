/* ===== App Dependencies ===== */
import React, { Fragment, useState } from "react";

/* ===== Code ===== */
const LoginPage = ({ users, dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState({
    emptyLoginData: false,
    incorrectLoginData: false,
    passwordTooShort: false,
    passwordTooLong: false,
    noAtSign: false,
  });

  const handleEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
    setError({ emptyLoginData: false });
    setError({ incorrectLoginData: false });
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError({ emptyLoginData: false });
    setError({ incorrectLoginData: false });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    users.filter((user) => {
      if (email.length === 0 || password.length === 0) {
        setError({ emptyLoginData: true });
      } else if (password.length <= 4) {
        setError({ passwordTooShort: true });
      } else if (password.length > 25) {
        setError({ passwordTooLong: true });
      } else if (email.indexOf("@") === -1) {
        setError({ noAtSign: true });
      } else if (user.email !== email || user.password !== password) {
        setError({ incorrectLoginData: true });
      } else if (user.email === email && user.password === password) {
        dispatch(true, email, password);
      }
    });
  };
  const handleErrors = () => {
    if (errors.emptyLoginData === true) {
      return "Email and password fields should not stay empty!";
    } else if (errors.passwordTooShort) {
      return "Password should contain more than 4 characters!";
    } else if (errors.passwordTooLong) {
      return "Password should not exceed 7 characters!";
    } else if (errors.noAtSign) {
      return "This is not a valid email!";
    } else if (errors.incorrectLoginData === true) {
      return "Your email or/and password is incorrect!";
    }
  };
  return (
    <article className="login-container">
      <div className="login-box">
        <h2 className="login-title">Chat App</h2>
        <form className="login-form" onSubmit={handleOnSubmit}>
          <p className="login-form__warnings">{handleErrors()}</p>
          <input
            className="login-form__input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="login-form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
          <button className="login-form__submit" type="submit">
            Log In
          </button>
        </form>
      </div>
    </article>
  );
};
export default LoginPage;
