import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AuthRequest from "routes/AuthRequest";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import AfterNavigation from "./AfterNavigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <AfterNavigation />}
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
          <Redirect from="*" to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/login" component={Auth} exact />
          <Route path="/authRequest" component={AuthRequest} exact />
          <Redirect from="*" to="/login" />
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
