import React from "react";
import '../assets/css/actuals.css';

import { Link } from "react-router-dom";

import pagesConfig from "../assets/pagesConfig";

const { actuals, ...rest } = pagesConfig;

const ActualsCards = function() {
  return actuals.cards.map((card, index) => (
    <Link to={{ pathname: "/actual", state: card }} key={index}>
      <div className="card">
        <div className="picture-box">
          <img src={ require(`../assets/img/actuals/${card.picture}`)} alt="" />
          <label className="picture-title size-36 extra-bold">{card.picture_title}</label>
        </div>
        <div className="text-box">
          <label className="actual-date size-15 extra-bold">{card.date}</label>
          <label className="dot-dot-dot size-36 extra-bold">...</label>
          <label className="actual-desc size-24 extra-bold">{card.title}</label>
          <label className="actual-text size-15 thin">{card.text}</label>
        </div>
      </div>
    </Link>
  ));
};

export default function Actuals() {
  return (
    <div className="actuals">
      <div className="actuals-header"></div>
      <label className="title size-90 extra-bold">Aktuális</label>
      <div className="actual-cards">
        <ActualsCards />
      </div>
    </div>
  );
}