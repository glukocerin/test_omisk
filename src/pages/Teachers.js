import React from "react";
import '../assets/css/teachers.css';

import pagesConfig from "../assets/pagesConfig";

const { teachers, ...rest } = pagesConfig;

const TeacherCards = function() {
  return teachers.cards.map((card, index) => (
    <div className="card" key={index}>
      <img src={ require(`../assets/img/teachers/${card.picture}`)} alt="" />
      <label className="teacher-name size-36 extra-bold">{card.name}</label>
      <label className="teacher-desc size-15 thin">{card.desc}</label>
      <label className="dot-dot-dot size-36 extra-bold">...</label>
    </div>
  ));
};

export default function Teachers() {
  return (
    <div className="teachers">
      <div className="teachers-header"></div>
      <label className="title size-90 extra-bold">Tanáraink</label>
      <div className="teacher-cards">
        <TeacherCards />
      </div>
    </div>
  );
}
