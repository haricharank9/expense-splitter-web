import React, { Component, createContext } from "react";

export const AuthContext = createContext(null);
export default class AuthContextProvider extends Component {
  state = {
    isLoggedIn: localStorage.getItem("auth_token") ? true : false,
  };
  setIsLoggedIn = authToken => {
    localStorage.setItem("auth_token", authToken);
    this.setState({ isLoggedIn: true });
  };
  logout = () => {
    localStorage.removeItem("auth_token");
    this.setState({ isLoggedIn: false });
  };
  getAuthToken = () => {
    return localStorage.getItem("auth_token");
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          setIsLoggedIn: this.setIsLoggedIn,
          logout: this.logout,
          getAuthToken: this.getAuthToken,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
