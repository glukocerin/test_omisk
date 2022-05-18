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

function getMetaContent(pages, url) {
  let desc = pages.filter((page) => {
    return page.url === url;
  })[0].meta;

  return desc === ""
    ? "1990-ben alapított iskolánkban 3 budapesti kerületben  tanítunk művészi tornát(rg), balettet, modern táncot, jazzbalettet és kondicionáló tornát óvodástól felnőttkorig"
    : desc;
}

const history = createBrowserHistory();
console.log(history);
const trackingId = "UA-37328756-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
history.listen((location) => {
  let title = document.getElementsByTagName("title")[0];
  let metaDesc = document.getElementsByTagName("meta").description;

  const pages = [
    {
      url: "muveszi-torna",
      title: "Művészi torna",
      meta: "Berczik Sára módszere alapján tanítjuk, melynek ényege a tudatos mozgásra nevelés, így biztos alapot nyújt minden késöbbi mozgás tanuláshoz és jó testtartást alakít ki.",
    },
    {
      url: "modern-tanc",
      title: "Modern tánc",
      meta: "A klasszikus balett  alapjaira épül, de inkább a természetes mozgást keresi. Dinamikus , de ugyanakkor lágy és kifejező táncstílus. Biztos testtudatot alakít ki.",
    },
    {
      url: "klasszikus-balett",
      title: "Klasszikus balett",
      meta: "Kecses, légies mozgásforma de elajátítása kitartó gyakorlást ígényel. Elemei a legtöbb táncstílusban előfordulnak, így nagy segítséget jelent más stílus tanulásához is.",
    },
    {
      url: "mozdulatmuveszet",
      title: "Mozdulatművészet",
      meta: "A gimnasztika precizitására épülő, de annál szabadabb, zenével szoros összhangban álló, táncstílus. Tartalmazza a klasszikus balett és modern technikák elemeit",
    },
    {
      url: "jazz-tanc",
      title: "Jazztánc",
      meta: "Könnyed, laza , látványos műfaj pörgős , mai zenére. Iskola után tartalmas kikapcsolódás, de közben fejleszti a ritmusérzéket, felszabadít",
    },
    {
      url: "pre-balett",
      title: "Pre balett",
      meta: "",
    },
    {
      url: "noi-torna",
      title: "Női torna",
      meta: "A test minden izmát átmozgató tradicionális gimnasztika Berczik Sára módszere alapján. Nőíes, harmonikus, esztétikai alapelvekre épülő mozgás klasszikus zenére.",
    },
    {
      url: "nyilvanos-ora",
      title: "Nyilvános órák",
      meta: "",
    },
    {
      url: "versenyek",
      title: "Versenyek",
      meta: "",
    },
    {
      url: "evzaro-eloadas",
      title: "Évzáró előadások",
      meta: "",
    },
    {
      url: "omisk",
      title: "Omisk Gála",
      meta: "",
    },
    {
      url: "mozdulatmuhely",
      title: "Mozdulatműhely",
      meta: "",
    },
    {
      url: "tanaraink",
      title: "Tanáraink",
      meta: "",
    },
    {
      url: "blog",
      title: "Blog",
      meta: "",
    },
    {
      url: "mukodesunk",
      title: "Működésünk",
      meta: "",
    },
    {
      url: "beiratkozas",
      title: "Beiratkozás",
      meta: "",
    },
    {
      url: "kapcsolat",
      title: "Kapcsolat",
      meta: "",
    },
    {
      url: "kurzusok",
      title: "Kurzusaink",
      meta: "Művészi tornától ( ritmikus gimnasztika) a kondicionáló tornáig, klasszikus balettől a modern táncig, 4 évestől felnőttkorig  tanítunk különböző táncstílusokat.",
    },
    {
      url: "programok",
      title: "Programjaink",
      meta: "",
    },
    {
      url: "tanar",
      title: "Tanár",
      meta: "Művészi tornától ( ritmikus gimnasztika) a kondicionáló tornáig, klasszikus balettől a modern táncig, 4 évestől felnőttkorig  tanítunk különböző táncstílusokat.",
    },
    {
      url: "beiratkozas_uj",
      title: "Beiratkozás",
      meta: "",
    },
    {
      url: "eredmenyeink",
      title: "Eredményeink",
      meta: "",
    },
    {
      url: "nyari-tabor",
      title: "Nyári tábor",
    },
    {
      url: "nyari-tabor",
      title: "Nyári tábor",
    },
  ];

  if (location.pathname === "/") {
    title.innerHTML =
      "ritmikus gimnasztika és balett órák, modern és jazztánc kurzusok";
  } else if (
    location.pathname.split("/")[location.pathname.split("/").length - 2] ===
    "blog"
  ) {
    let url =
      location.pathname.split("/")[location.pathname.split("/").length - 2];
    const filtered = pages.filter((page) => {
      return page.url === url;
    });

    if (!filtered.length) return;
    title.innerHTML =
      filtered[0].title +
      " | ritmikus gimnasztika és balett órák, modern és jazztánc kurzusok | OMISK";
  } else {
    let url =
      location.pathname.split("/")[location.pathname.split("/").length - 1];

    const filtered = pages.filter((page) => {
      return page.url === url;
    });

    if (!filtered.length) return;
    title.innerHTML =
      filtered[0].title +
      " | ritmikus gimnasztika és balett órák, modern és jazztánc kurzusok | OMISK";

    console.log(metaDesc);
    metaDesc.setAttribute("content", getMetaContent(pages, url));
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
