import * as actionTypes from "../actions/action-types";

const initialState = {
  isLoading: false,
  requestList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IS_LOADING:
      return setIsLoading(state, action);
    case actionTypes.PUSH_REQUEST:
      return pushRequest(state, action);
    case actionTypes.REMOVE_REQUEST:
      return removeRequest(state);
    case actionTypes.NOTIFY_LOADER:
      return notifyLoader(state);
    default:
      return state;
  }
};

const setIsLoading = (state, action) => {
  return {
    ...state,
    isLoading: action.isLoading,
  };
};
const notifyLoader = state => {
  return {
    ...state,
    isLoading: state.requestList.length !== 0,
  };
};

const removeRequest = state => {
  const newArray = [...state.requestList];
  newArray.splice(-1, 1);
  return {
    ...state,
    requestList: newArray,
  };
};

const pushRequest = state => {
  const newArr = [...state.requestList];
  newArr.length++;
  return {
    ...state,
    requestList: newArr,
  };
};

export default reducer;
