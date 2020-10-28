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
        path="/login"
        component={LoginForm}
        submitForm={submitLoginForm}
      />
      <PropsRoute
        path="/signup"
        component={SignUpForm}
        submitForm={submitSignupForm}
      />
      <Redirect from="/" exact to="/login" />
    </Switch>
  );
};

AuthRouting.propTypes = {
  submitSignupForm: PropTypes.func.isRequired,
  submitLoginForm: PropTypes.func.isRequired,
};
export default withRouter(AuthRouting);
