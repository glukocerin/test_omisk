import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/hamburger.menu.css";
import { ReactComponent as Logo } from "../assets/img/icons/logo.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

export default function HamburgerMenu() {
  const [toggled, toggle] = useState(false),
    location = useLocation().pathname;

  return (
    <div className={`hamburger-menu ${toggled && "toggled"}`}>
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
        <Link
          className={`link size-36 extra-bold ${location === "/" && "active"}`}
          onClick={() => toggle(!toggled)}
          to="/"
        >
          Kezdő
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location.includes("nyari-tabor") && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/programok/nyari-tabor"
        >
          Nyári Tánctábor 2022
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location.includes("course") && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/kurzusok"
        >
          Kurzusaink
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location.includes("programok") &&
            !location.includes("programok/nyari-tabor") &&
            "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/programok"
        >
          Programjaink
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location.includes("teacher") && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/tanaraink"
        >
          Tanáraink
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location.includes("blog") && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location === "/mukodesunk" && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/mukodesunk"
        >
          Működésünk
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location === "/beiratkozas" && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/beiratkozas"
        >
          Beiratkozás
        </Link>
        <Link
          className={`link size-36 extra-bold ${
            location === "/kapcsolat" && "active"
          }`}
          onClick={() => toggle(!toggled)}
          to="/kapcsolat"
        >
          Kapcsolat
        </Link>
        <div className="sm-icons">
          <a
            href="https://www.instagram.com/o_m_i_s_k/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/omisk.hu/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
}
