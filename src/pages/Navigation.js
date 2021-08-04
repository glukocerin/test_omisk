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
          {/* <Link
            className={`${
              location.includes("/programok/nyari_tabor") && "active"
            }`}
            to="/programok/nyari_tabor"
          >
            Nyári Tánctábor 2021
          </Link> */}
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
            <Link to="/kurzusok">Kurzusaink</Link>
            <div className="dropdown-menu">
              <div className="row">
                <Link to="/kurzusok/muveszi-torna">
                  <span className="size-14 extra-bold">Művészi torna</span>
                  <span className="size-14 thin">4 éves kortól</span>
                </Link>
                <Link to="/kurzusok/modern_tanc">
                  <span className="size-14 extra-bold">Modern tánc</span>
                  <span className="size-14 thin">8 éves kortól</span>
                </Link>
                <Link to="/kurzusok/klasszikus_balett">
                  <span className="size-14 extra-bold">Klasszikus balett</span>
                  <span className="size-14 thin">6 éves kortól</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/kurzusok/mozdulatmuveszet">
                  <span className="size-14 extra-bold">Mozdulatművészet</span>
                  <span className="size-14 thin">10 éves kortól</span>
                </Link>
                <Link to="/kurzusok/jazz-tanc">
                  <span className="size-14 extra-bold">Jazz tánc</span>
                  <span className="size-14 thin">6 éves kortól</span>
                </Link>
                <Link to="/kurzusok/pre_balett">
                  <span className="size-14 extra-bold">Pre balett</span>
                  <span className="size-14 thin">4 éves kortól</span>
                </Link>
                <Link to="/kurzusok/noi_torna">
                  <span className="size-14 extra-bold">Női torna</span>
                  <span className="size-14 thin">Hölgyeknek</span>
                </Link>
              </div>
            </div>
          </label>
          <label
            className={`plus-sign programs ${
              location.includes("programok") &&
              !location.includes("programok/nyari_tabor") &&
              "active"
            }`}
          >
            <Link to="/programok">Programjaink</Link>
            <div className="dropdown-menu">
              <div className="row">
                <Link to="/programok/nyilvanos_ora">
                  <span className="size-14 extra-bold">Nyilvános órák</span>
                </Link>
                <Link to="/programok/versenyek">
                  <span className="size-14 extra-bold">Versenyek</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/programok/evzaro_eloadas">
                  <span className="size-14 extra-bold">Évzáró előadások</span>
                </Link>
                <Link to="/programok/omisk">
                  <span className="size-14 extra-bold">Omisk Gála</span>
                </Link>
              </div>
              <div className="row">
                <Link to="/programok/mozdulatmuhely">
                  <span className="size-14 extra-bold">Mozdulatműhely</span>
                </Link>
                {/* <Link to="/programs/camp">
                  <span className="size-14 extra-bold">Nyári tánctábor</span>
                </Link> */}
              </div>
            </div>
          </label>
          <Link
            className={`${location.includes("tanaraink") && "active"}`}
            to="/tanaraink"
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
            className={`${location === "/mukodesunk" && "active"}`}
            to="/mukodesunk"
          >
            Működésünk
          </Link>
          <Link
            className={`${location === "/beiratkozas" && "active"}`}
            to="/beiratkozas"
          >
            Beiratkozás
          </Link>
          <Link
            className={`${location === "/kapcsolat" && "active"}`}
            to="/kapcsolat"
          >
            Kapcsolat
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  );
}
