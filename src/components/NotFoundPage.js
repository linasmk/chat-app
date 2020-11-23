/* ===== App Dependencies ===== */
import React from "react";
import { Link } from "react-router-dom";
/* ===== Redux ===== */
import { connect } from "react-redux";
/* ===== Code ===== */
const NotFoundPage = (props) => (
  <div className="main">
    <div className="main__inner-wrapper">
      <section className="not-found-page">
        <h2 className="not-found-page__primary-heading">404 PAGE NOT FOUND</h2>
        <h3 className="not-found-page__secondary-heading">
          Not the right spot you want to be at?
        </h3>
        {!props.isAuthenticated ? (
          <Link className="not-found-page__btn" to="/">
            Go back to Login Page
          </Link>
        ) : (
          <Link className="not-found-page__btn" to="/">
            Go back to your Chat
          </Link>
        )}
      </section>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isLoggedIn,
});
export default connect(mapStateToProps)(NotFoundPage);
