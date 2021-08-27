// TODO: remove below key - key to prevent source code leaking
// yAiTV0SAOxu8Z1zWduDs3DGlh8X5B95Z8kBRcl9W
import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import ReactDOM from "react-dom";

import { getAppTheme } from "styles/theme";

import * as serviceWorker from "./serviceWorker";

const render = () => {
  // eslint-disable-next-line global-require
  const App = require("./App").default;

  ReactDOM.render(
    <ThemeProvider theme={getAppTheme()}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
    document.getElementById("root")
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
