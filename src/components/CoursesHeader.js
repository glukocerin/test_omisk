import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/coursesHeader.module.css";

export default function CoursesHeader(props) {
  const backgroundImage = require(`../assets/img/courses/header/${props.opt.img}.jpg`)
    .default;

  return (
    <div className={style["header-wrapper"]}>
      <div
        className={style["header"]}
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      ></div>
      <label className={`${style["state-location"]} size-13`}>
        <Link to="/courses">Vissza kurzusainkra</Link>
      </label>
      <div>
        <h1 className={`${style["header-title"]} size-90 extra-bold`}>{props.opt.courseName}</h1>
        <h1 className={`${style["course"]} size-90 extra-bold`}>kurzus</h1>
      </div>
    </div>
  );
}
