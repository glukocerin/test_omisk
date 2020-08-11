import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/courseCard.module.css";

export default function Card(props) {
  return (
    <Link to={`/courses/${props.details.link}`} className={`${style.wrapper}`}>
      <labe className={`${style.title} size-28 extra-bold`}>
        {props.details.title}
      </labe>
      <div className={style["image-wrapper"]}>
        <img
          src={require(`../assets/img/courses/${props.details.image}.jpg`)}
          alt=""
        />
      </div>
    </Link>
  );
}
