import React from "react";
import '../assets/css/teacher.css';

import { Link, useLocation } from "react-router-dom";

const ListItems = function(props) {
  return props.list.map((item, index) => (
    <li className="list-item size-15" key={index}>{item}</li>
  ));
};

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
      <div className="columns">
        <div className="column-left">
          <label className="name size-36 extra-bold">{ teacher.name }</label>
          <label className="desc size-15 thin">{ teacher.desc }</label>
          <label className="details size-20">{ teacher.details }</label>
        </div>
        <div className="column-right">
          <label className="text size-24 bold">Végzettségek</label>
          <ul className="list">
            <ListItems list={teacher.education} />
          </ul>
          <label className="text size-24 bold">Eredmények</label>
          <ul className="list">
            <ListItems list={teacher.achievements} />
          </ul>
        </div>
      </div>
    </div>
  );
}