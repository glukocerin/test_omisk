import React from "react";
import style from "../assets/css/courses.module.css";

import Card from "../components/CourseCard";

export default function Courses() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>Kurzusaink</h1>
      </div>

      <div className={style.courses}>
        <Card />
      </div>
    </div>
  );
}
