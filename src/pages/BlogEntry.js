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
      <h1 className="title size-70 extra-bold">{config.title}</h1>
      <div className="blog-entry-box">
        <label className="date size-15 bold">{config.date}</label>
        <label
          className="details-first details size-20 thin"
          dangerouslySetInnerHTML={createMarkup(config.text_first)}
        ></label>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/blog/${config.picture}`}
          alt={config.alt}
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
