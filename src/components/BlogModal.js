import React, { useState, useEffect, useCallback } from "react";
import style from "../assets/css/blogmodal.module.css";
import { Link } from "react-router-dom";
import FindByProp from "./FindByProp";

export default function () {
  const [isModalOpen, setModalOpen] = useState(true);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setModalOpen(false);
    }
  }, []);

  const closeHandler = () => {
    setModalOpen(false);
    window.sessionStorage.setItem("info-modal", "showed");
  };

  useEffect(() => {
    const isModalShowed = window.sessionStorage.getItem("info-modal");
    if (isModalShowed === "showed") {
      setModalOpen(false);
    }
    console.log(window.sessionStorage);
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div>
      <div
        className={`${style["modal-overlay"]} ${
          isModalOpen ? "" : style["closed"]
        }`}
        id="modal-overlay"
      ></div>
      <div
        className={`${style["modal"]} ${isModalOpen ? "" : style["closed"]}`}
        id="modal"
      >
        <div className={`${style["modal-body"]} `}>
          <div className={`${style["text-wrapper"]}`}>
            <button
              className={`${style["close-button"]}`}
              onClick={() => closeHandler()}
            >
              &#215;
            </button>
            <div className={`${style["text-body"]}`}>
              <h2 className={`size-54 extra-bold`}>COVID tájékoztató</h2>
              <p className={`size-20`}>
                Iskolánkban az alábbi óvintézkedésket tettük mindannyiunk
                érdekében: A csoportok elkülönülve öltözködnek
              </p>
              <Link
                className={`${style["button"]} size-16 extra-bold`}
                onClick={() => {
                  closeHandler();
                }}
                to={{
                  pathname: "/blog_entry",
                  state: FindByProp("blog", "cards", "index", "covid"),
                }}
              >
                Tovább olvasom
              </Link>
            </div>
          </div>
          <img
            className={`${style["image"]}`}
            src={require(`../assets/img/modal.png`)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
