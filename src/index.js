import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.layout.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import ScrollIntoView from "./components/ScrollIntoView";


import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollIntoView>
          <App />
        </ScrollIntoView>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
