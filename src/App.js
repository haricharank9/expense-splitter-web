import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoaderIndicator from "./components/LoaderIndicator/LoaderIndicator";
import ErrorHandler from "./hoc/ErrorHandler/ErrorHandler";
import AppRouting from "./router/AppRouting/AppRouting";
import store from "./store/store";
import theme from "./utils/theming";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <LoaderIndicator />
          <ErrorHandler>
            <AppRouting />
          </ErrorHandler>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
