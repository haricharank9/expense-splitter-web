import { IconButton, InputAdornment } from "@material-ui/core";
import { Visibility, VisibilityOff, VpnKeyRounded } from "@material-ui/icons";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import PropTypes from "prop-types";
import React, { useState } from "react";

const PasswordEntry = ({ name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Field
      component={TextField}
      id={name}
      name={name}
      fullWidth
      type={showPassword ? "text" : "password"}
      required
      label="Password"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <VpnKeyRounded color="secondary" fontSize="small" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      variant="outlined"
      className="Text_Field"
    />
  );
};

PasswordEntry.propTypes = {
  name: PropTypes.string,
};

export default PasswordEntry;
