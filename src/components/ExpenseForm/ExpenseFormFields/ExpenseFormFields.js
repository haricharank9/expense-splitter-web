import React from "react";
//import { Test } from './ExpenseFormFields.styles';

const ExpenseFormFields = props => (
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

ExpenseFormFields.propTypes = {
  // bla: PropTypes.string,
};

ExpenseFormFields.defaultProps = {
  // bla: 'test',
};

export default ExpenseFormFields;
