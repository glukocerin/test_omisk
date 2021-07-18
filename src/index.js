import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.layout.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import ScrollIntoView from "./components/ScrollIntoView";
import ReactGA from "react-ga";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// import { browserHistory } from "react-router";

import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
console.log(history);
const trackingId = "UA-37328756-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen((location) => {
  let title = document.getElementsByTagName("title")[0];

  if (location.pathname === "/") {
    title.innerHTML = "OMISK | Tánckurzusok | Tánctáborok";
  } else {
    title.innerHTML =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
  }

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
