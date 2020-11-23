/* ===== App Dependencies ===== */
import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/* ===== Redux ===== */
import { connect } from "react-redux";
/* ===== Components ===== */
import { LoginPage } from "./../containers/LoginPage";
import Header from "../components/Header";
import ChatApp from "../components/ChatApp";
import { Profile } from "../containers/Profile";
import { ChatView } from "../containers/ChatView";
import { Sidebar } from "../containers/Sidebar";
import NotFoundPage from "./../components/NotFoundPage";

const AppRouter = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {!props.isAuthenticated ? (
          <Fragment>
            <Switch>
              <Route path="/" exact={true} component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Fragment>
        ) : (
          <Fragment>
            <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            <Sidebar sidebarOpen={sidebarOpen} />
            <Switch>
              <Route exact={true} path="/" component={ChatApp} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit/:id?" component={ChatView} />
              <Route component={NotFoundPage} />
            </Switch>
          </Fragment>
        )}
      </div>
    </BrowserRouter>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isLoggedIn,
});
export default connect(mapStateToProps)(AppRouter);
