import React from "react";
import { Link } from "react-router-dom";
import style from "../../assets/css/coursesHeader.module.css";

export default function CoursesHeader(props) {
  const backgroundImage = require(`../../assets/img/courses/header/${props.opt.img}.jpg`);
  const colors = {
    pink: "#F4A7B7",
    blue: "#19B3FC",
    green: "#0CB3A1"
  };
  const color = colors[props.opt.color];

  return (
    <div className={style["header-wrapper"]}>
      <div
        className={style["header"]}
        style={{ backgroundImage: "url(" + backgroundImage + ")" }}
      ></div>
      <label className={`${style["state-location"]} size-13`}>
        <Link to="/courses">kurzusaink</Link> > {props.opt.courseName}
      </label>
      <label className={`${style["header-title"]} size-90 extra-bold`}>
        {props.opt.courseName}
        <p className={`${style["course"]} size-90 extra-bold`}>kurzus</p>
      </label>
      <button className={style["button"]} style={{ color: color }}>
        Jelentkezem
      </button>
    </div>
  );
}
