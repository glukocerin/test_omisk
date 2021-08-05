import React from "react";
import "../assets/css/teachers.css";

import { Link } from "react-router-dom";

import pagesConfig from "../assets/pagesConfig";

const { teachers } = pagesConfig;

const TeacherCards = function () {
  return teachers.cards.map((card, index) => (
    <Link to={{ pathname: "/tanar", state: card }} key={index}>
      <div className="card">
        <img
          src={require(`../assets/img/teachers/${card.picture}`).default}
          alt=""
        />
        <label className="teacher-name size-28 extra-bold">{card.name}</label>
      </div>
    </Link>
  ));
};

export default function Teachers() {
  return (
    <div className="teachers">
      <div className="teachers-header"></div>
      <h1 className="title size-90 extra-bold">Tanáraink</h1>
      <div className="teacher-cards">
        <TeacherCards />
      </div>
    </div>
  );
}
