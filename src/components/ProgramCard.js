import React from "react";
import style from "../assets/css/programs.module.css";
import { Link } from "react-router-dom";

function ProgramCard(props) {
  return (
    <div className={style["card"]}>
      <div className={style["image-wrapper"]}>
        <Link to={`/programs/${props.details.link}`}>
          <img
            src={
              require(`../assets/img/programs/${props.details.img}.jpg`).default
            }
            alt=""
          />
        </Link>
      </div>
      <div className={style["text-wrapper"]}>
        <h4 className="size-28 extra-bold">{props.details.title}</h4>
      </div>
    </div>
  );
}

export default ProgramCard;
