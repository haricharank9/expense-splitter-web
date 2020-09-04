import PropTypes from "prop-types";
import React from "react";
import { Redirect, Switch, withRouter } from "react-router";
import LoginForm from "../../components/LoginForm/LoginForm";
import PropsRoute from "../../components/PropsRoute/PropsRoute";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const AuthRouting = props => {
  const { submitSignupForm, submitLoginForm } = props;
  return (
    <Switch>
      <PropsRoute
        path={props.match.path + "/signup"}
        component={SignUpForm}
        submitForm={submitSignupForm}
      />
      <PropsRoute
        path={props.match.path + "/login"}
        component={LoginForm}
        submitForm={submitLoginForm}
      />
      <Redirect from="/auth" exact to="/auth/login" />
    </Switch>
  );
};

AuthRouting.propTypes = {
  submitSignupForm: PropTypes.func.isRequired,
  submitLoginForm: PropTypes.func.isRequired,
};
export default withRouter(AuthRouting);
