/* ===== App Dependencies ===== */
import React from "react";
import { NavLink } from "react-router-dom";
import { BsChatQuoteFill, BsPeopleCircle } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
/* ============ Redux =========== */
import { connect } from "react-redux";
import { sendAuthentication } from "../actions/action-creators";
/* ============ Code =========== */
const Header = (props) => {
  const handleLogOut = () => {
    props.dispatch(false);
  };
  function toggleSidebar() {
    props.setSidebarOpen(!props.sidebarOpen);
  }
  return (
    <header className="header">
      <div className="header__inner-wrapper">
        <h2 className="header__title">Chat App</h2>
        <nav>
          <ul className="header__nav-ul">
            <li>
              <div className="new-message__btn-holder">
                {props.sidebarOpen ? (
                  <AiOutlineClose
                    className="main__sidebar--close"
                    onClick={toggleSidebar}
                  />
                ) : (
                  <AiOutlineMenu
                    className="main__sidebar--open"
                    onClick={toggleSidebar}
                  />
                )}
              </div>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="is-active"
                className="header__navlink"
                exact={true}
                title="Chat">
                <BsChatQuoteFill className="header__icon" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                exact={true}
                activeClassName="is-active"
                className="header__navlink"
                title="Profile">
                <BsPeopleCircle className="header__icon" />
              </NavLink>
            </li>
            <li>
              <button className="header__logout-btn" onClick={handleLogOut}>
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
const mapDispatchToProps = (dispatch) => ({
  dispatch: (isLoggedIn) => {
    dispatch(sendAuthentication(isLoggedIn));
  },
});
export default connect(null, mapDispatchToProps)(Header);
