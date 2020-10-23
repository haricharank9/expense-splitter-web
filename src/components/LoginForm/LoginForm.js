import { Button, Grid, InputAdornment } from "@material-ui/core";
import { AlternateEmail } from "@material-ui/icons";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import PropTypes from "prop-types";
import React from "react";
import { object, string } from "yup";
import FormikBase from "../FormikBase/FormikBase";
import PasswordEntry from "../PasswordEntry/PasswordEntry";

const LoginFormFields = props => (
  <Form>
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      <Field
        component={TextField}
        id="username"
        name="username"
        fullWidth
        type="email"
        required
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmail color="secondary" fontSize="small" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        className="Text_Field"
      />
      <PasswordEntry name="password" />
    </Grid>
    <Grid container direction="column" justify="center" alignItems="stretch">
      {props.children}
    </Grid>
  </Form>
);

const LoginForm = ({ submitForm }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = object({
    username: string().email("Invalid email address").required("Required"),
    password: string().required("Required"),
  });
  return (
    <FormikBase
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {({ isValid, isSubmitting }) => (
        <LoginFormFields isValid={isValid} isSubmitting={isSubmitting}>
          <Button
            className="Rounded_Button"
            variant="contained"
            disabled={!isValid || isSubmitting}
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </LoginFormFields>
      )}
    </FormikBase>
  );
};

LoginForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default LoginForm;
