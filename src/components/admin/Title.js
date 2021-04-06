import React, { useEffect } from "react";

import style from "./title.module.css";

export function Title({ onTitleChange }) {
  return (
    <label className={style["label"]}>
      Bejegyzés Címe:
      <input
        className={style["input"]}
        onChange={(e) => onTitleChange(e.target.value)}
      />
    </label>
  );
}
