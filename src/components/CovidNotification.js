import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/covidNotification.css";
import pagesConfig from "../assets/pagesConfig";

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
        <label className="size-20 thin">
          Jelenleg online folytatjuk kurzusainkat,{" "}
          <Link
            onClick={() => {
              closeCookies(true);
            }}
            to="/contact"
            className="link"
          >
            melyre itt tudsz jelentkezni
          </Link>
        </label>
      </div>
      <div>
        <Link
          to={{ pathname: "/blog_entry", state: covidBlogEntry }}
          className="btn accept"
          onClick={() => {
            closeCookies(true);
          }}
        >
          Bővebben
        </Link>
      </div>
    </div>
  );
}
