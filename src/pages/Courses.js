import React from "react";
import style from "../assets/css/courses.module.css";
import { Link } from "react-router-dom";

import Card from "../components/CourseCard";

import pagesConfig from "../assets/pagesConfig";

const { courses, ...rest } = pagesConfig;

const CourseCards = function () {
  return courses.cards.map((card, index) => (
    <Card key={index} details={card} />
  ));
};

export default function Courses() {
  return (
    <div className={style["courses-wrapper"]}>
      <div className={style["header"]}></div>
      <label className={`${style["header-text"]} size-90 extra-bold`}>
        Kurzusaink
      </label>
      <div className={style.courses}>
        <CourseCards className={style["cards"]} />
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Szeretnél csatlakozni?
        </h4>
        <div className={style["footer-buttons-wrapper"]}>
          <Link
            className={`${style["footer-button-details"]} size-15`}
            to="/contact"
          >
            Érdeklődöm
          </Link>
          <Link className={style["footer-button-sign-up"]} to="/enrollment">
            Jelentkezem
          </Link>
        </div>
      </div>
    </div>
  );
}
