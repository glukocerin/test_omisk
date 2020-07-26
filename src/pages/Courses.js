import React from "react";
import style from "../assets/css/courses.module.css";

import Card from "../components/CourseCard";

import pagesConfig from "../assets/pagesConfig";

const { courses, ...rest } = pagesConfig;

const CourseCards = function() {
  return courses.cards.map((card, index) => (
    <Card key={index} details={card} />
  ));
};

export default function Courses() {
  return (
    <div>
      <div className={style["header"]}></div>
      <h1 className={`${style["header-text"]} size-90 extra-bold`}>
        Kurzusaink
      </h1>
      <div className={style.courses}>
        <CourseCards className={style["cards"]} />
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Évközben is tudsz jelentkezni
        </h4>
        <button className={style["footer-button"]}>Jelentkezem</button>
      </div>
    </div>
  );
}
