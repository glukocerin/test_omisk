import React from "react";
import "../assets/css/teachers.css";

import { Link } from "react-router-dom";

import pagesConfig from "../assets/pagesConfig";

const { teachers, ...rest } = pagesConfig;

const TeacherCards = function() {
  return teachers.cards.map((card, index) => (
    <Link to={{ pathname: "/teacher", state: card }} key={index}>
      <div className="card">
        <img src={require(`../assets/img/teachers/${card.picture}`)} alt="" />
        <label className="teacher-name size-36 extra-bold">{card.name}</label>
      </div>
    </Link>
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
