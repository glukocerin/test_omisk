import React from "react";
import "../assets/css/blog.entry.css";

import { Link } from "react-router-dom";

export default function BlogEntry({ config }) {
  return (
    <div className="blog-entry">
      <div className="blog-entry-header"></div>
      <label className="state-location size-13">
        <Link to="/blog">Vissza a blogra</Link>
      </label>
      <label className="title size-90 extra-bold">{config.title}</label>
      <div className="blog-entry-box">
        <label className="date size-15 bold">{config.date}</label>
        <label
          className="details-first details size-20 thin"
          dangerouslySetInnerHTML={createMarkup(config.text_first)}
        ></label>
        <img
          src={require(`../assets/img/blog/${config.picture}`).default}
          alt=""
        />
        <label
          className="details size-20 thin"
          dangerouslySetInnerHTML={createMarkup(config.text_second)}
        ></label>
      </div>
    </div>
  );
}

function createMarkup(markup) {
  return { __html: markup };
}
