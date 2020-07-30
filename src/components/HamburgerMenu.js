import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/hamburger.menu.css";
import { ReactComponent as Logo } from "../assets/img/icons/logo.svg";
import { ReactComponent as Facebook } from "../assets/img/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/insta.svg";
import { ReactComponent as Youtube } from "../assets/img/youtube.svg";

export default function HamburgerMenu() {
  const [toggled, toggle] = useState(false),
        location = useLocation().pathname;

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
        <Link className={`link size-36 extra-bold ${ location === "/" && "active" }`} onClick={() => toggle(!toggled)} to="/">Kezdő</Link>
        <Link className={`link size-36 extra-bold ${ location === "/courses" && "active" }`} onClick={() => toggle(!toggled)} to="/courses">Kurzusaink</Link>
        <Link className={`link size-36 extra-bold ${ location === "/programs" && "active" }`} onClick={() => toggle(!toggled)} to="/programs">Programjaink</Link>
        <Link className={`link size-36 extra-bold ${ location === "/teachers" && "active" }`} onClick={() => toggle(!toggled)} to="/teachers">Tanáraink</Link>
        <Link className={`link size-36 extra-bold ${ location === "/actuals" && "active" }`} onClick={() => toggle(!toggled)} to="/actuals">Aktuális</Link>
        <Link className={`link size-36 extra-bold ${ location === "/operation" && "active" }`} onClick={() => toggle(!toggled)} to="/operation">Működésünk</Link>
        <Link className={`link size-36 extra-bold ${ location === "/enrollment" && "active" }`} onClick={() => toggle(!toggled)} to="/enrollment">Beiratkozás</Link>
        <Link className={`link size-36 extra-bold ${ location === "/contact" && "active" }`} onClick={() => toggle(!toggled)} to="/contact">Kapcsolat</Link>
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
