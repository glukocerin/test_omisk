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
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Kurzusaink</h1>
      </div>

      <div className={style.courses}>
        <CourseCards />
      </div>
    </div>
  );
}
