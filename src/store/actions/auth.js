import * as actionTypes from "./action-types";

export const loginUser = authToken => {
  return {
    type: actionTypes.LOGIN_USER,
    authToken,
  };
};
