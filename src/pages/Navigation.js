import React from "react";

import { Link, useLocation } from "react-router-dom";

import HamburgerMenu from "../components/HamburgerMenu";

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";

export default function Navigation(props) {
  const location = useLocation().pathname;

  return (
    <div className={`header background-${props.BackgroundColor} ${props.isHeaderFixed && "fixed"}`}>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="links">
        <Link className={`plus-sign ${ location === "/courses" && "active" }`} to="/courses">Kurzusaink</Link>
        <Link className={`plus-sign ${ location === "/programs" && "active" }`} to="/programs">Programjaink</Link>
        <Link className={`${ location === "/teachers" && "active" }`} to="/teachers">Tanáraink</Link>
        <Link className={`${ location === "/actual" && "active" }`} to="/actual">Aktuális</Link>
        <Link className={`${ location === "/operation" && "active" }`} to="/operation">Működésünk</Link>
        <Link className={`${ location === "/enrollment" && "active" }`} to="/enrollment">Beiratkozás</Link>
        <Link className={`${ location === "/contact" && "active" }`} to="/contact">Kapcsolat</Link>
      </div>
      <HamburgerMenu />
    </div>
  );
}
