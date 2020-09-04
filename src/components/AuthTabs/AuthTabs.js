import { Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PersonAddRounded, VpnKeyRounded } from "@material-ui/icons";
import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import TabPanel from "./TabPanel/TabPanel";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "0 0 3rem 3rem",
    borderColor: theme.palette.primary.main,
  },
  tabs: {
    borderRadius: "0 0 3rem 3rem",
  },
}));

const AuthTabs = props => {
  const classes = useStyles();

  const { history, children } = props;
  return (
    <Fragment>
      <Paper className={classes.root}>
        <Tabs
          value={history.location.pathname}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          className={classes.tabs}
        >
          <Tab
            label="Login"
            value={props.match.path + "/login"}
            icon={<VpnKeyRounded />}
            component={Link}
            to={props.match.path + "/login"}
          />
          {/* <Divider orientation="vertical" flexItem /> */}
          <Tab
            label="Sign Up"
            value={props.match.path + "/signup"}
            icon={<PersonAddRounded />}
            component={Link}
            to={props.match.path + "/signup"}
          />
        </Tabs>
      </Paper>
      <TabPanel>{children}</TabPanel>
    </Fragment>
  );
};

export default withRouter(AuthTabs);
