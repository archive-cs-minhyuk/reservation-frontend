import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthRequest from "routes/AuthRequest";
import Profile from "routes/Profile";
import ResetPassword from "routes/ResetPassword";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import AfterNavigation from "./AfterNavigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <AfterNavigation />}
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route
            path="/profile"
            component={() => <Profile userObj={userObj} />}
            exact
          />
          <Redirect from="*" to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={Auth} exact />
          <Route
            path="/authRequest"
            component={() => <AuthRequest userObj={userObj} />}
            exact
          />
          <Route
            path="/resetPassword"
            component={() => <ResetPassword />}
            exact
          />
          <Redirect from="*" to="/login" />
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
