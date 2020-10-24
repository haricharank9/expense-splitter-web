import axios from "axios";
import {
  notifyLoader,
  pushRequest,
  removeRequest,
  setIsLoaded,
} from "../store/actions/index";
import store from "../store/store";
const apiInstance = axios.create({
  baseURL: "http://localhost:5001",
});

apiInstance.interceptors.request.use(req => {
  onRequest();
  return req;
});

apiInstance.interceptors.response.use(
  res => {
    onResponse();
    return res;
  },
  error => {
    console.log(error);
    onResponse();
    return Promise.reject(error);
  }
);
export default apiInstance;
function onRequest() {
  store.dispatch(setIsLoaded(true));
  store.dispatch(pushRequest());
}

function onResponse() {
  store.dispatch(removeRequest());
  store.dispatch(notifyLoader());
}
