import { Fab, Icon, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(theme => ({
  // fab: {
  //   position: "absolute",
  //   bottom: theme.spacing(2),
  //   right: theme.spacing(2),
  // },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingButton = props => {
  const classes = useStyles();
  return (
    <Fab
      variant="extended"
      color="secondary"
      aria-label="add"
      className={props.className}
      onClick={props.onClicked}
    >
      <Icon className={classes.extendedIcon}>add</Icon>
      Add
    </Fab>
  );
};

FloatingButton.propTypes = {
  // bla: PropTypes.string,
};

FloatingButton.defaultProps = {
  onClicked: PropTypes.func.isRequired,
};

export default FloatingButton;
