import React from "react";
import '../assets/css/actual.css';

import { Link, useLocation } from "react-router-dom";

export default function Actual() {
  let actual = useLocation().state;

  return (
    <div className="actual">
      <div className="actual-header"></div>
      <label className="state-location size-13">
        <Link to="/actuals">Vissza az aktuálisra</Link>
      </label>
      <label className="title size-90 extra-bold">{ actual.title }</label>
      <div className="actual-box">
        <label className="date size-15 bold">{ actual.date }</label>
        <label className="box-title size-36 extra-bold">{ actual.picture_title }</label>
        <label className="details-header size-36 thin">{ actual.details_header }</label>
        <label className="details size-20 thin">{ actual.details }</label>
      </div>
      <div className="color-box"></div>
    </div>
  );
}
