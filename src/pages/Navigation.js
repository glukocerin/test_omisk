import React from "react";

import { Link } from "react-router-dom";

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

import Courses from "../pages/Courses";
import Course from "../pages/Course";

export default function Navigation() {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="links">
        <Link to="/courses">+ Kurzusaink</Link>
        <Link to="/programs">+ Programjaink</Link>
        <Link to="/teachers">+ Tanáraink</Link>
        <Link to="/actual">+ Aktuális</Link>
        <Link to="/operation">+ Működésünk</Link>
        <Link to="/enrollment">+ Beiratkozás</Link>
        <Link to="/contact">+ Kapcsolat</Link>
      </div>
    </div>
  );
}
