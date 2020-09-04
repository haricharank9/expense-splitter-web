import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";

const styles = theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
});

class LoaderIndicator extends Component {
  render() {
    return (
      <div>
        <Backdrop
          className={this.props.classes.backdrop}
          open={this.props.open}
        >
          {this.props.open ? (
            <CircularProgress color="secondary" size="4.5rem" thickness={4.0} />
          ) : null}
        </Backdrop>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.ldr.isLoading,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(LoaderIndicator));
