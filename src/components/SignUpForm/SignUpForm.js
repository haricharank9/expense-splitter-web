import { Button, Grid, InputAdornment } from "@material-ui/core";
import { AlternateEmail } from "@material-ui/icons";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import PropTypes from "prop-types";
import React from "react";
import { object, string } from "yup";
import PasswordEntry from "../PasswordEntry/PasswordEntry";

const SignUpForm = props => {
  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
  };
  const { submitForm } = props;

  const validationSchema = object({
    firstName: string().min(2).required("Required"),
    middleName: string().optional(),
    lastName: string().min(2).required("Required"),
    username: string().email("Invalid email address").required("Required"),
    password: string()
      .required("Required")
      .matches(
        "[0-9]+|[#?!@$%^&*-]+",
        "Contains Number or Special Characters (#?!@$%^&*-)."
      )
      .matches("[A-Z]+", "Contains Upper Case letter.")
      .matches("[a-z]+", "Contains Lower Case letter.")
      .min(8),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
      initialErrors={initialValues}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
          >
            <Field
              component={TextField}
              id="firstName"
              name="firstName"
              type="text"
              required
              fullWidth
              label="First Name"
              variant="outlined"
              className="Text_Field"
            />
            <Field
              component={TextField}
              id="middleName"
              name="middleName"
              fullWidth
              type="text"
              label="Middle Name"
              variant="outlined"
              className="Text_Field"
            />
            <Field
              component={TextField}
              id="lastName"
              name="lastName"
              fullWidth
              type="text"
              required
              label="Last Name"
              variant="outlined"
              className="Text_Field"
            />
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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
          >
            <Button
              className="Rounded_Button"
              variant="contained"
              disabled={isSubmitting || !isValid}
              type="submit"
              color="primary"
            >
              Sign Up
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

SignUpForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
export default SignUpForm;
