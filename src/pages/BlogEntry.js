import React from "react";
import '../assets/css/blog.entry.css';

import { Link, useLocation } from "react-router-dom";

export default function BlogEntry() {
  let blogEntry = useLocation().state;

  return (
    <div className="blog-entry">
      <div className="blog-entry-header"></div>
      <label className="state-location size-13">
        <Link to="/blog">Vissza a blogra</Link>
      </label>
      <label className="title size-90 extra-bold">{ blogEntry.title }</label>
      <div className="blog-entry-box">
        <label className="date size-15 bold">{ blogEntry.date }</label>
        <label className="details size-20 thin" dangerouslySetInnerHTML={createMarkup(blogEntry.text)}></label>
      </div>
      <img src={require(`../assets/img/blog/${blogEntry.picture}`)} alt="" />
    </div>
  );
}

function createMarkup(markup) {
  return {__html: markup};
}