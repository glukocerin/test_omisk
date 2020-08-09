import React from "react";

export default function CoursesHeader() {
  return (
    <div className={style["header-wrapper"]}>
      <div className={style["header"]}></div>
      <label className={`${style["state-location"]} size-13"`}>
        <Link to="/courses">Tanáraink</Link> > Pre balett kurzus
      </label>
      <label className={`${style["header-title"]} size-90 extra-bold`}>
        Pre balett kurzus
      </label>
      <button className={style["button"]}>Jelentkezem</button>
    </div>
  );
}
