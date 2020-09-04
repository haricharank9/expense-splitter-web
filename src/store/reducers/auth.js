import * as actionTypes from "../actions/action-types";

const initialState = {
  authToken: "",
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return setUserLogin(state, action);
    default:
      return state;
  }
};

const setUserLogin = (state, action) => {
  return {
    ...state,
    authToken: action.authToken,
    isLoggedIn: true,
  };
};

export default reducer;
