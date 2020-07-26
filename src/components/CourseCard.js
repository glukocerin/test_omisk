import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/css/courseCard.module.css";

export default function Card(props) {
  return (
    <div className={`${style.wrapper} ${style[props.details.backgroundColor]}`}>
      <div className={style["image-wrapper"]}>
        <img src={require(`../assets/img/${props.details.image}.png`)} alt="" />
      </div>
      <div className={style["content"]}>
        <div className={style["text"]}>
          <span className={style["title"]}>{props.details.title}</span>
          <span className={style["details"]}>{props.details.age}</span>
          <span className={style["details"]}>{props.details.districts}</span>
          <span className={style["details"]}>{props.details.bottomText}</span>
        </div>
      </div>
      <div className={style["buttons"]}>
        <div className={style["sign-up"]}>
          <span>Jelentkezem</span>
        </div>
        <Link className={style["link"]} to={`/courses/${props.details.link}`}>
          <div className={style["more-details"]}>
            <span className={`${style["dot"]}`}>•••</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
