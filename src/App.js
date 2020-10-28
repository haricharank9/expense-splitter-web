import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoaderIndicator from "./components/LoaderIndicator/LoaderIndicator";
import AuthContextProvider from "./context/AuthContextProvider";
import AppRouting from "./router/AppRouting/AppRouting";
import store from "./store/store";
import theme from "./utils/theming";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AuthContextProvider>
            <LoaderIndicator />
            <AppRouting />
          </AuthContextProvider>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
