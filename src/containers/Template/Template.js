import PropTypes from "prop-types";
import React from "react";
import Header from "./Header/Header";

export const Template = ({ onLogout }) => {
  return (
    <>
      <Header logoutClicked={onLogout}></Header>
    </>
  );
};

Template.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Template;
