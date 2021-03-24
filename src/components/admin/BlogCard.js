import React, { useState, useEffect } from "react";

import { ReactComponent as CreateIcon } from "../../assets/img/icons/create-24px.svg";
import { ReactComponent as DeleteIcon } from "../../assets/img/icons/delete-24px.svg";

import style from "./blogCard.module.css";

console.log(style);

export const BlogCard = ({ entry }) => {
  const [isActive, setActive] = useState(entry.isActive);

  function clickHandler(event) {
    setActive(event);
  }

  return (
    <div
      className={`${isActive ? style["active"] : style["draft"]} ${
        style["entry"]
      }`}
      key={entry.index}
    >
      <div className={style["title-wrapper"]}>
        <label className={`${style["title"]} text size-18 extra-bold`}>
          {entry.title}
        </label>
        <label className="text size-14">{entry.date}</label>
      </div>
      <div className={style["icons-wrapper"]}>
        <label className={style["switch"]}>
          <input
            onChange={(e) => {
              clickHandler(e.target.checked);
            }}
            type="checkbox"
            checked={isActive}
          />
          <span className={`${style["slider"]} ${style["round"]}`}></span>
        </label>
        <CreateIcon className={style["icon"]}></CreateIcon>
        <DeleteIcon className={style["icon"]}></DeleteIcon>
      </div>
    </div>
  );
};
