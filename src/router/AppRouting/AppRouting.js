import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Auth from "../../containers/Auth/Auth";
import Home from "../../containers/Home/Home";

const AppRouting = props => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/auth" component={Auth} />
    <Redirect from="/" exact to="/home" />
  </Switch>
);

export default AppRouting;