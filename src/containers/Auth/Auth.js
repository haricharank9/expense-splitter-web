import { Box, Card, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppLogo from "../../components/AppLogo/AppLogo";
import AuthTabs from "../../components/AuthTabs/AuthTabs";
import AuthRouting from "../../router/AuthRouting/AuthRouting";
import { loginUser } from "../../store/actions/index";
import api from "../../utils/api";
import classes from "./Auth.module.scss";

class Auth extends Component {
  postSignUpUser = (values, { resetForm }) => {
    api
      .post("/auth/signup", values)
      .then(res => console.log(res))
      .catch(err => console.log(JSON.stringify(err)))
      .finally(_ => resetForm({ values: "" }));
  };

  postLoginUser = (values, { resetForm }) => {
    api
      .post("/auth/login", values)
      .then(res => {
        this.loginUser(res.data.auth_token);
      })
      .catch(err => resetForm({ values: "" }));
  };

  loginUser = authToken => {
    localStorage.setItem("authToken", authToken);
    this.props.loginUser(authToken);
    this.props.history.push("/home");
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.Root}
      >
        <Card className={classes.AuthCard}>
          <Box p={0.5} bgcolor="primary.main">
            <AppLogo />
          </Box>
          <Box mb={0.5}>
            <AuthTabs>
              <AuthRouting
                submitSignupForm={this.postSignUpUser}
                submitLoginForm={this.postLoginUser}
              />
            </AuthTabs>
          </Box>
        </Card>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: authToken => dispatch(loginUser(authToken)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
