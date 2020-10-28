import React, { useContext } from "react";
import { Route, Switch } from "react-router";
import Auth from "../../containers/Auth/Auth";
import Home from "../../containers/Home/Home";
import { AuthContext } from "../../context/AuthContextProvider";
import { withErrorHandler } from "../../hoc/withErrorHandler";

const AppRouting = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Switch>
      <Route path="/" component={isLoggedIn ? Home : Auth} />
    </Switch>
  );
};

export default withErrorHandler(AppRouting);
