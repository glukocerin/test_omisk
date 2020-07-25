import React from "react";
import '../assets/css/teacher.css';

import { Link, useLocation } from "react-router-dom";

export default function Teacher() {
  let teacher = useLocation().state;

  return (
    <div className="teacher">
      <div className="teacher-header"></div>
      <label className="state-location size-13">
        <Link to="/teachers">Tanáraink</Link> > { teacher.name }
      </label>
      <label className="title size-90 extra-bold">{ teacher.name }</label>
      <img className="profile-picture" src={ require(`../assets/img/teachers/${teacher.picture}`)} alt="" />
    </div>
  );
}
