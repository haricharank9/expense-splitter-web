import * as actionTypes from "./action-types";

export const setIsLoaded = isLoading => {
  return {
    type: actionTypes.SET_IS_LOADING,
    isLoading,
  };
};

export const pushRequest = () => {
  return {
    type: actionTypes.PUSH_REQUEST,
  };
};

export const removeRequest = () => {
  return {
    type: actionTypes.REMOVE_REQUEST,
  };
};

export const notifyLoader = () => {
  return {
    type: actionTypes.NOTIFY_LOADER,
  };
};
