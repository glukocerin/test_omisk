import React from "react";
import style from "../assets/css/programs.module.css";

function ProgramCard(props) {
  return (
    <div className={style["card"]}>
      <div className={style["image-wrapper"]}>
        <img src={require(`../assets/img/eurhythmics_1.png`)} alt="" />
      </div>
      <div className={style["text-wrapper"]}>
        <h4 className="size-32 extra-bold">{props.details.title}</h4>
        <p className="size-20 thin">{props.details.textBody}</p>
      </div>
    </div>
  );
}

export default ProgramCard;
