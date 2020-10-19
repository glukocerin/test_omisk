import React from "react";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";

import pagesConfig from "../assets/pagesConfig";

const { blog } = pagesConfig;

const BlogCards = function() {
  return blog.cards.map((card, index) => (
    <Link to={{ pathname: "/blog_entry", state: card }} key={index}>
      <div className="card">
        <div className="picture-box">
          <img src={require(`../assets/img/blog/${card.picture}`)} alt="" />
          <label className="picture-title size-28 extra-bold">
            {card.picture_title}
          </label>
        </div>
        <div className="text-box">
          <label className="blog-entry-date size-15 extra-bold">{card.date}</label>
          <label className="blog-entry-desc size-24 extra-bold">{card.title}</label>
          <label className="blog-entry-text size-15 thin">{ splitText(card.text) }</label>
        </div>
      </div>
    </Link>
  ));
};

function splitText(text) {
  return text.replace(/<[^>]+>/g, '').replace(/\n/g,' ').slice(0, 120) + "...";
}

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-header"></div>
      <label className="title size-90 extra-bold">Blog</label>
      <div className="blog-cards">
        <BlogCards />
      </div>
    </div>
  );
}
