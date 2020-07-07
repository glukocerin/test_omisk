import React from "react";
import style from "../assets/css/courseCard.module.css";

export default function Card(props) {
  return (
    <div className={style.wrapper}>
      <div className={style["image-wrapper"]}>
        <img />
      </div>
      <div className={style["content"]}>
        <div className={style["text"]}>
          <span className={style["title"]}>Muveszeti torna</span>
          <span className={style["details"]}>4 ev felett</span>
          <span className={style["details"]}>II., III., IV.</span>
          <span className={style["details"]}>Keruletekben</span>
        </div>
      </div>
    </div>
  );
}
