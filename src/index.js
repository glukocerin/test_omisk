import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.layout.scss";
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
  const pages = [
    {
      url: "muveszi-torna",
      title: "Művészi torna",
    },
    {
      url: "modern_tanc",
      title: "Modern tánc",
    },
    {
      url: "klasszikus_balett",
      title: "Klasszikus balett",
    },
    {
      url: "mozdulatmuveszet",
      title: "Mozdulatművészet",
    },
    {
      url: "jazz-tanc",
      title: "Jazztánc",
    },
    {
      url: "pre_balett",
      title: "Pre balett",
    },
    {
      url: "noi_torna",
      title: "Női torna",
    },
    {
      url: "nyilvanos_ora",
      title: "Nyilvános órák",
    },
    {
      url: "versenyek",
      title: "Versenyek",
    },
    {
      url: "evzaro_eloadas",
      title: "Évzáró előadások",
    },
    {
      url: "omisk",
      title: "Omisk Gála",
    },
    {
      url: "mozdulatmuhely",
      title: "Mozdulatműhely",
    },
    {
      url: "tanaraink",
      title: "Tanáraink",
    },
    {
      url: "blog",
      title: "Blog",
    },
    {
      url: "mukodesunk",
      title: "Működésünk",
    },
    {
      url: "beiratkozas",
      title: "Beiratkozás",
    },
    {
      url: "kapcsolat",
      title: "Kapcsolat",
    },
    {
      url: "kurzusok",
      title: "Kurzusaink",
    },
    {
      url: "programok",
      title: "Programjaink",
    },
    {
      url: "tanar",
      title: "Tanár",
    },
    {
      url: "beiratkozas_uj",
      title: "Beiratkozás",
    },
  ];

  if (location.pathname === "/") {
    title.innerHTML =
      "ritmikus gimnasztika és balett órák, modern és jazztánc kurzusok";
  } else {
    let url =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    title.innerHTML =
      pages.filter((page) => {
        return page.url === url;
      })[0].title +
      " | ritmikus gimnasztika és balett órák, modern és jazztánc kurzusok";
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
