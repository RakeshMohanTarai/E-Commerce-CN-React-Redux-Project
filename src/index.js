import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer);

const root = document.getElementById("root");

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <Provider store={store}>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </Provider>
);
