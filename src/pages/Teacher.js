import React from "react";
import "../assets/css/teacher.css";

import { Link, useLocation } from "react-router-dom";

const ListItems = function (props) {
  return props.list.map((item, index) => (
    <li className="list-item size-15" key={index}>
      {item}
    </li>
  ));
};

export default function Teacher() {
  let teacher = useLocation().state;

  return (
    <div className="teacher">
      <div className="teacher-header"></div>
      <label className="state-location size-13">
        <Link to="/tanaraink">Vissza tanárainkra</Link>
      </label>
      <h1 className="title size-90 extra-bold">{teacher.name}</h1>
      <img
        className="profile-picture"
        
        src={`${process.env.PUBLIC_URL}/assets/img/teachers/${teacher.picture}`}
        alt={teacher.alt}
        />
      <label className="desc size-20 thin">{teacher.desc}</label>
      <div className="columns">
        <div className="column-left">
          <label className="details size-20">{teacher.details}</label>
          {teacher.hasActionPicture ? <img
            className="action-picture"
            src={`${process.env.PUBLIC_URL}/assets/img/teachers/action/${teacher.picture}`}
            alt={teacher.alt}
          /> : ''}
        </div>
        <div className="column-right">
          <label className="text size-24 bold">Végzettségek:</label>
          <ul className="list">
            <ListItems list={teacher.education} />
          </ul>
          <label
            className={`text size-24 bold ${
              teacher.achievements.length === 0 && "hidden"
            }`}
          >
            Kitüntetések, díjak:
          </label>
          <ul className="list">
            <ListItems list={teacher.achievements} />
          </ul>
          <label
            className={`text size-24 bold ${
              teacher.courses.length === 0 && "hidden"
            }`}
          >
            Óratípusok:
          </label>
          <ul className="list">
            <ListItems list={teacher.courses} />
          </ul>
        </div>
      </div>
    </div>
  );
}
