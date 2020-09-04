import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import appLogo from "../../assets/images/accounting.png";
// import classes from "./AppLogo.module.scss";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: "50%",
    border: "2px solid",
    width: "5rem",
    height: "5rem",
    padding: "3px",
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.background.paper,
  },
  img: {
    borderRadius: "50%",
    height: "4.5rem",
    width: "4.5rem",
  },
}));

const AppLogo = props => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <div className={classes.root}>
        <img src={appLogo} className={classes.img} alt="logo"></img>
      </div>
    </Grid>
  );
};

export default AppLogo;
