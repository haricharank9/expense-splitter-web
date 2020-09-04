import { Box } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const TabPanel = props => {
  const { children } = props;

  return <Box p={3}>{children}</Box>;
};

TabPanel.propTypes = {
  children: PropTypes.node,
};

export default TabPanel;
