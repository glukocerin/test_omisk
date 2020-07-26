import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/hamburger.menu.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Facebook } from "../assets/img/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
import { ReactComponent as Youtube } from "../assets/img/youtube.svg";

export default function HamburgerMenu() {
  const [toggled, toggle] = useState(false);

  return (
    <div className={`hamburger-menu ${ toggled && "toggled"}`}>
      <div className="menu-header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="hamburger-toggle" onClick={() => toggle(!toggled)}>
          <div className="toggle-fragment"></div>
          <div className="toggle-fragment"></div>
          <div className="toggle-fragment"></div>
        </div>
      </div>
      <div className="menu-list">
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/">Kezdő</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/courses">Kurzusaink</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/programs">Programjaink</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/teachers">Tanáraink</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/actual">Aktuális</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/operation">Működésünk</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/enrollment">Beiratkozás</Link>
        <Link className="link size-36 extra-bold" onClick={() => toggle(!toggled)} to="/contact">Kapcsolat</Link>
        <div className="sm-icons">
            <div className="icon">
                <Instagram/>
            </div>
            <div className="icon">
                <Facebook/>
            </div>
            <div className="icon">
                <Youtube/>
            </div>
        </div>
      </div>
    </div>
  );
}
