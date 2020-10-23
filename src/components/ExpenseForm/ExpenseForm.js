import { Button, Grid, InputAdornment } from "@material-ui/core";
import { AlternateEmail } from "@material-ui/icons";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";

const ExpenseForm = ({ submitForm }) => (
  <Formik
  // initialValues={initialValues}
  // validationSchema={validationSchema}
  // onSubmit={submitForm}
  // initialErrors={initialValues}
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
            Login
          </Button>
        </Grid>
      </Form>
    )}
  </Formik>
);

ExpenseForm.propTypes = {
  // bla: PropTypes.string,
};

ExpenseForm.defaultProps = {
  // bla: 'test',
};

export default ExpenseForm;
