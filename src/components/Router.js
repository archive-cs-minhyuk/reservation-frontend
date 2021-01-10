import React, { useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthRequest from "routes/AuthRequest";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import AfterNavigation from "./AfterNavigation";
import BeforeNavigation from "./BeforeNavigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <AfterNavigation />}
      {!isLoggedIn && <BeforeNavigation />}
      {isLoggedIn ? (
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
          <Redirect from="*" to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Auth} exact />
          <Route path="/authRequest" component={AuthRequest} exact />
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
