import React, { Component, Fragment } from "react";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import api from "../../utils/api";

class ErrorHandler extends Component {
  state = {
    error: null,
    errorMessage: "",
  };

  componentWillMount() {
    this.reqInterceptor = api.interceptors.request.use(req => {
      this.setState({ error: null });
      return req;
    });
    this.resInterceptor = api.interceptors.response.use(
      res => res,
      error => {
        this.setErrorMessage(error);
        this.setState({ error });
      }
    );
  }

  setErrorMessage(error) {
    let errorMessage = "";
    switch (error.status) {
      case 401:
        errorMessage = "Session Timeout, Please try again Logging In";
        break;
      case 403:
        errorMessage =
          "Sorry, Operation could not be completed.\n Access denied to resource requested";
        break;
      case 404:
        errorMessage =
          "Sorry, Operation could not be completed. Requested resource is either broken or not found";
        break;
      case 409:
        errorMessage = `Sorry, Operation could not be completed. \nRecord already exists. Procceding with this operation could cause duplicate`;
        break;
      case 500:
        errorMessage =
          "Sorry, Operation could not be completed at this time.\n Back-end returned with an Internal Server Error.Please contact customer support";
        break;
      default:
        errorMessage = `Sorry, Operation could not be completed. \n Possible reason(s): \n
              ${error.data.error}`;
        break;
    }
    this.setState({ errorMessage });
  }

  componentWillUnmount() {
    api.interceptors.request.eject(this.reqInterceptor);
    api.interceptors.response.eject(this.resInterceptor);
  }

  errorConfirmedHandler = () => {
    this.setState({ error: null });
  };
  render() {
    return (
      <Fragment>
        <ConfirmDialog
          confirmHandler={this.errorConfirmedHandler}
          dialogOpener={this.state.error ? true : false}
          dialogTitle={"Error!!"}
          dialogText={this.state.errorMessage}
        ></ConfirmDialog>
        {this.props.children}
      </Fragment>
    );
  }
}

export default ErrorHandler;
