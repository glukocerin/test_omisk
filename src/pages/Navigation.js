import React from "react";

import { Link } from "react-router-dom";

import HamburgerMenu from "../components/HamburgerMenu";

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

export default function Navigation(props) {
  return (
    <div className={`header background-${props.BackgroundColor}`}>
      <Link to="/">
        <Logo className={`logo logo-${props.LogoColor}`} />
      </Link>
      <div className="links">
        <Link to="/courses">+ Kurzusaink</Link>
        <Link to="/programs">+ Programjaink</Link>
        <Link to="/teachers">Tanáraink</Link>
        <Link to="/actual">Aktuális</Link>
        <Link to="/operation">Működésünk</Link>
        <Link to="/enrollment">Beiratkozás</Link>
        <Link to="/contact">Kapcsolat</Link>
      </div>
      <HamburgerMenu />
    </div>
  );
}
