import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import HamburgerMenu from "../components/HamburgerMenu";

import { updatePageindex } from "../actions/navigation";

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/icons/logo.svg";
import FindByProp from "../components/FindByProp";

export default function Navigation(props) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      {isVisible ? (
        <div className="header-banner">
          <div className="banner-title">
            <span className="size-24 extra-bold">Covid tájékoztató</span>
          </div>
          <div className="banner-text">
            <span className="size-20">
              Az érvényben lévő kormányrendeletnek megfelelően iskolánkban 2020.
              november 11-től áttértünk az online oktatásra. Ennek részleteiről{" "}
              <Link
                to={{
                  pathname: "/blog_entry",
                  state: FindByProp("blog", "cards", "index", "lockdown"),
                }}
              >
                itt
              </Link>{" "}
              tájékozódhatsz.
            </span>
          </div>
          <div>
            <button onClick={(e) => setVisible(false)} className="banner-close">
              &#215;
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={`header background-${props.BackgroundColor} ${
          props.isHeaderFixed && "fixed"
        } ${props.activeDot === 1 && "big"} ${
          location === "/" && "text-inverse"
        }`}
      >
        <Link onClick={() => dispatch(updatePageindex({ payload: 1 }))} to="/">
          <Logo
            className={`logo ${
              location === "/" && props.activeDot !== 1 && "inverse"
            } ${location !== "/" ? "logo-white" : ""}`}
          />
        </Link>
        <div className="links">
          <Link
            className={`${location === "/" && "active"}`}
            onClick={() => dispatch(updatePageindex({ payload: 1 }))}
            to="/"
          >
            Kezdő
          </Link>
          <label
            className={`plus-sign ${location.includes("course") && "active"}`}
          >
            <Link to="/courses">Kurzusaink</Link>
            <div className="dropdown-menu">
              <div className="row">
                <Link to="/courses/eurhythmics">
                  <span className="size-14 extra-bold">Művészi torna</span>
                  <span className="size-14 thin">4 éves kortól</span>
                </Link>
                <Link to="/courses/modern">
                  <span className="size-14 extra-bold">Modern tánc</span>
                  <span className="size-14 thin">8 éves kortól</span>
                </Link>
                <Link to="/courses/ballet">
                  <span className="size-14 extra-bold">Klasszikus balett</span>
                  <span className="size-14 thin">6 éves kortól</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/courses/callisthenics">
                  <span className="size-14 extra-bold">Mozdulatművészet</span>
                  <span className="size-14 thin">10 éves kortól</span>
                </Link>
                <Link to="/courses/jazz">
                  <span className="size-14 extra-bold">Jazz tánc</span>
                  <span className="size-14 thin">6 éves kortól</span>
                </Link>
                <Link to="/courses/pre_ballet">
                  <span className="size-14 extra-bold">Pre balett</span>
                  <span className="size-14 thin">4 éves kortól</span>
                </Link>
                <Link to="/courses/lady">
                  <span className="size-14 extra-bold">Női torna</span>
                  <span className="size-14 thin">Hölgyeknek</span>
                </Link>
              </div>
            </div>
          </label>
          <label
            className={`plus-sign programs ${
              location.includes("program") && "active"
            }`}
          >
            <Link to="/programs">Programjaink</Link>
            <div className="dropdown-menu">
              <div className="row">
                <Link to="/programs/public_class">
                  <span className="size-14 extra-bold">Nyilvános órák</span>
                </Link>
                <Link to="/programs/competitions">
                  <span className="size-14 extra-bold">Versenyek</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/programs/speech_day">
                  <span className="size-14 extra-bold">Évzáró előadások</span>
                </Link>
                <Link to="/programs/omisk">
                  <span className="size-14 extra-bold">Omisk Gála</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/programs/callisthenics">
                  <span className="size-14 extra-bold">Mozdulatműhely</span>
                </Link>
                <Link to="/programs/camp">
                  <span className="size-14 extra-bold">Nyári táborok</span>
                </Link>
              </div>
            </div>
          </label>
          <Link
            className={`${location.includes("teacher") && "active"}`}
            to="/teachers"
          >
            Tanáraink
          </Link>
          <Link
            className={`${location.includes("blog") && "active"}`}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className={`${location === "/operation" && "active"}`}
            to="/operation"
          >
            Működésünk
          </Link>
          <Link
            className={`${location === "/enrollment" && "active"}`}
            to="/enrollment"
          >
            Beiratkozás
          </Link>
          <Link
            className={`${location === "/contact" && "active"}`}
            to="/contact"
          >
            Kapcsolat
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
}
