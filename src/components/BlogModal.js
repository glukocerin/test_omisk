import React, { useState, useEffect, useCallback } from "react";
import style from "../assets/css/blogmodal.module.css";
import { Link } from "react-router-dom";
import FindByProp from "./FindByProp";

export default function ({isOpen, setModalOpen}) {
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setModalOpen(false);
    }
  }, [setModalOpen]);

useEffect(() => {
  document.addEventListener("keydown", escFunction, false);

  return () => {
    document.removeEventListener("keydown", escFunction, false);
  };
}, [escFunction]);

  return (
    <div>
      <div
        className={`${style["modal-overlay"]} ${
          isOpen ? "" : style["closed"]
        }`}
        id="modal-overlay"
      ></div>
      <div
        className={`${style["modal"]} ${isOpen ? "" : style["closed"]}`}
        id="modal"
      >
        <div className={`${style["modal-body"]} `}>
          <div className={`${style["text-wrapper"]}`}>
            <button
              className={`${style["close-button"]}`}
              onClick={() => setModalOpen(false)}
            >
              &#215;
            </button>
            <div className={`${style["text-body"]}`}>
              <h2 className={`size-54 extra-bold ${style["text-body-title"]}`}>Beiratkozási időpontok</h2>
              <p className={`size-20 ${style["text-body-paragraph"]}`}>
                A következő helyszíni beiratkozás 2021 augusztusában lesz.<br/>
                Addig is lehet jelentkezni azokba a csoportokba, ahol még van szabad hely.<br/>
                Ha ezzel kapcsolatban szeretnél érdeklődni, vedd fel a kapcsolatot irodánkkal !<br/>
                06-20-9460-848<br/>
                06-20-2000-138<br/>
                iroda@omisk.hu
              </p>
              {/* <Link
                className={`${style["button"]} size-16 extra-bold`}
                onClick={() => {
                  setModalOpen(false);
                }}
                to={{
                  pathname: "/blog_entry",
                  state: FindByProp("blog", "cards", "index", "covid"),
                }}
              >
                Tovább olvasom
              </Link> */}
            </div>
          </div>
          {/* <img
            className={`${style["image"]}`}
            src={require(`../assets/img/modal.png`)}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}
