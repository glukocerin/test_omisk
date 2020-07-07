import React from "react";

import { Link } from "react-router-dom";

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

import Courses from "../pages/Courses";
import Course from "../pages/Course";

export default function Navigation() {
  return (
    <div className="header">
      <Logo className="logo" />
      <div className="links">
        <Link to="/courses">Courses</Link>
        <Link to="/course_one">Course one</Link>
        <Link to="/course_two">courses two link</Link>
      </div>
    </div>
  );
}
