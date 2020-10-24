import React, { Fragment, useEffect, useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import api from "../../utils/api";

export const withErrorHandler = WrappedComponent => () => {
  const [errorMessage, setErrorMessage] = useState("");

  const formatErrorMessage = error => {
    let formattedMessage = "";
    if (error?.message === "Network Error") {
      formattedMessage =
        "Having trouble connecting to server. Please check the internet connection and try again.";
    } else {
      switch (error?.response?.status) {
        case 401:
          formattedMessage = "Session Timeout, Please try again Logging In";
          break;
        case 403:
          formattedMessage =
            "Sorry, Operation could not be completed.\n Access denied to resource requested";
          break;
        case 404:
          formattedMessage =
            "Sorry, Operation could not be completed. Requested resource is either broken or not found";
          break;
        case 409:
          formattedMessage = `Sorry, Operation could not be completed. \nRecord already exists. Procceding with this operation could cause duplicate`;
          break;
        case 500:
          formattedMessage =
            "Sorry, Operation could not be completed at this time.\n Back-end returned with an Internal Server Error.Please contact customer support";
          break;
        default:
          formattedMessage = `Sorry, Operation could not be completed. \n Possible reason(s): \n
              ${error.data.error}`;
          break;
      }
    }
    setErrorMessage(formattedMessage);
  };

  useEffect(() => {
    const resInterceptor = api.interceptors.response.use(
      res => res,
      error => {
        formatErrorMessage(error);
      }
    );
    return () => {
      api.interceptors.response.eject(resInterceptor);
    };
  }, []);

  const confirmDialogHandler = () => {
    setErrorMessage("");
  };

  return (
    <Fragment>
      <ConfirmDialog
        confirmHandler={confirmDialogHandler}
        dialogOpener={errorMessage ? true : false}
        dialogTitle={"Error!!"}
        dialogText={errorMessage}
      ></ConfirmDialog>
      <WrappedComponent />
    </Fragment>
  );
};
