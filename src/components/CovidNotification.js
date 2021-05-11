import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/covidNotification.css";
import pagesConfig from "../assets/pagesConfig";
import { ReactComponent as CovidIcon } from "../assets/img/icons/covid.svg";

export default function CovidNotification() {
  const [closed, closeCookies] = useState(false);
  const { blog } = pagesConfig;
  const covidBlogEntry = blog.cards.filter(
    (entry) => entry.index === "lockdown"
  )[0];

  return (
    <div className={`covid-block ${closed && "hidden"}`}>
      <div className="first-section">
        <button className="btn close" onClick={() => closeCookies(true)}>
          &#215;
        </button>
        <label className="size-20 thin covid-label">
          <CovidIcon className="icon" />
          Jelenleg online folytatjuk kurzusainkat,<span>&nbsp;&nbsp;</span>
          <Link
            onClick={() => {
              closeCookies(true);
            }}
            to="/contact"
            className="link"
          >
            melyre itt tudsz jelentkezni.
          </Link>
          <span>&nbsp;&nbsp;</span>A Szarvas Gábor 20-22-ben már helyszíni
          órákat tartunk.
        </label>
      </div>
      <div>
        <Link
          to={{ pathname: "/blog_entry", state: covidBlogEntry }}
          className="btn accept"
        >
          Bővebben
        </Link>
      </div>
    </div>
  );
}
