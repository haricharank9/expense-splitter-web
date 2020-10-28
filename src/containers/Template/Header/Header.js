//import { Test } from './Header.styles';
import { Box } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ logoutClicked }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Title</Typography>
            </Box>
            <div>
              <Button color="inherit" onClick={logoutClicked}>
                Logout
              </Button>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  logoutClicked: PropTypes.func.isRequired,
};

export default Header;
