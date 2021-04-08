import React from "react";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";

import { isMobile } from "react-device-detect";

import pagesConfig from "../assets/pagesConfig";

const { blog } = pagesConfig;

const BlogCards = function () {
  return blog.cards.map((card, index) => {
    const image = card["picture_card"]
      ? require(`../assets/img/blog/${card.picture_card}`).default
      : require(`../assets/img/blog/${card.picture}`).default;

    return (
      <Link to={{ pathname: "/blog_entry", state: card }} key={index}>
        <div className="card">
          <div className="picture-box">
            <img src={image} alt="" />
            <label className="picture-title size-28 extra-bold">
              {card.picture_title}
              <br />
              <span className="date-for-mobile">{card.date}</span>
            </label>
          </div>
          <div className="text-box">
            <label className="blog-entry-date size-15 extra-bold">
              {card.date}
            </label>
            <label className="blog-entry-desc size-24 extra-bold">
              {card.title}
            </label>
            <label className="blog-entry-text size-15 thin">
              {splitText(card.text_first)}
            </label>
          </div>
        </div>
      </Link>
    );
  });
};

function splitText(text) {
  var mobileCalc = Math.round((((window.innerWidth - 68) / 13) * 3) / 10) * 10;

  return (
    text
      .replace(/<[^>]+>/g, "")
      .replace(/\n/g, " ")
      .slice(0, isMobile ? mobileCalc : 120) + "..."
  );
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
