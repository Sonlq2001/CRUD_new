import * as React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import SimpleSnackbar from "components/SimpleSnackbar/SimpleSnackbar";
import store, { persistor } from "redux/store";
import Routes from "routes/Routes";

const App: React.FC = () => (
  <Provider store={store} key="provider">
    <PersistGate loading={null} persistor={persistor}>
      <SimpleSnackbar />
      <Router>
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
