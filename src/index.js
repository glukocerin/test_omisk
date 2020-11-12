import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.layout.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import ScrollIntoView from "./components/ScrollIntoView";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';


import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";

const history = createBrowserHistory();

const trackingId = "UA-37328756-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
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
