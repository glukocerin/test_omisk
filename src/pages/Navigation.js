import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import HamburgerMenu from "../components/HamburgerMenu";

import {updatePageindex} from '../actions/navigation'

import "../assets/css/navigation.css";
import { ReactComponent as Logo } from "../assets/img/icons/logo.svg";

export default function Navigation(props) {
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  return (
    <div className={`header background-${props.BackgroundColor} ${props.isHeaderFixed && "fixed"} ${props.activeDot === 1 && 'big'}`}>
      <Link onClick={()=> dispatch(updatePageindex({payload: 1}))} to="/">
        <Logo className={`logo ${location === '/' && props.activeDot !== 1 && 'inverse'}`} />
      </Link>
      <div className="links">
        <Link className={`plus-sign ${ location.includes("course") && "active" }`} to="/courses">Kurzusaink</Link>
        <Link className={`plus-sign ${ location.includes("program") && "active" }`} to="/programs">Programjaink</Link>
        <Link className={`${ location.includes("teacher") && "active" }`} to="/teachers">Tanáraink</Link>
        <Link className={`${ location.includes("actual") && "active" }`} to="/actuals">Aktuális</Link>
        <Link className={`${ location === "/operation" && "active" }`} to="/operation">Működésünk</Link>
        <Link className={`${ location === "/enrollment" && "active" }`} to="/enrollment">Beiratkozás</Link>
        <Link className={`${ location === "/contact" && "active" }`} to="/contact">Kapcsolat</Link>
      </div>
      <HamburgerMenu />
    </div>
  );
}
