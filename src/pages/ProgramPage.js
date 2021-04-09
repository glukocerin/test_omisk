import React, { useState, useEffect } from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";
import Modal from "../components/Modal";

import { ReactComponent as Kupa } from "../assets/img/icons/kupa.svg";

const Images = function ({ gallery }) {
  const images = gallery.map((img, index) => {
    return require(`../assets/img/programs/${img}.jpg`).default;
  });

  let top = useCurrentScrollTop(),
    imageWrapper = document.querySelector('[class*="images"]'),
    imageWrapperTop = imageWrapper ? imageWrapper.offsetTop : 0,
    imageWrapperHeight = imageWrapper ? imageWrapper.offsetHeight : 0,
    topToApply =
      top > imageWrapperTop - imageWrapperHeight + imageWrapperHeight / 3
        ? (top - imageWrapperHeight - imageWrapperHeight / 3) / 5
        : 0;

  return images.map((img, index) => {
    return (
      <img
        className={style[`image-${index}`]}
        style={{ top: topToApply, bottom: topToApply }}
        key={index}
        src={img}
        alt=""
      />
    );
  });
};

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

const getScrollTop = () => document.getElementById("root").scrollTop;

function useCurrentScrollTop() {
  // save current window width in the state object
  let [top, setTop] = useState(getScrollTop());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const scrollListener = () => {
      // change width from the state object
      setTop(document.querySelector(".App").scrollTop || getScrollTop());
    };
    // set resize listener
    window.addEventListener("scroll", scrollListener, true);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("scroll", scrollListener, true);
    };
  }, []);

  return top;
}

export default function ProgramPage(props) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`)
    .default;

  const [isModalOpen, setModalOpen] = useState(false);

  let width = useCurrentWitdh();

  let bg = require(`../assets/img/programs/${props.opt.videoImg}.jpg`).default;
  return props.opt.title !== 'Nyári tánctábor' ? 
    (
      <div style={{ position: "relative" }}>
        <Modal
          isOpen={isModalOpen}
          setModalOpen={setModalOpen}
          videos={props.opt.videos}
        />
        <div className={style["header-wrapper"]}>
          <div
            className={style["header"]}
            style={{ backgroundImage: "url(" + backgroundImage + ")" }}
          ></div>
          <label className={`${style["state-location"]} size-13`}>
            <Link to="/programs">Vissza programjainkra</Link>
          </label>
          <label
            className={`${style["header-title"]} size-90 extra-bold ${
              props.opt.title === "Versenyek" && style["achievement"]
            }`}
          >
            {props.opt.title}
          </label>
          {props.opt.title === "Versenyek" ? (
            <div className={`${style["achievement-wrapper"]}`}>
              <Kupa />
              <Link
                className={`${style["achievement-button"]} size-12`}
                to="/programs/achievements"
              >
                Versenyeredményeink
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={style["body"]}>
          <div className={style["info"]}>
            <div className={style["details"]}>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} ${style["first-paragraph"]} size-20`}
              >
                {props.opt.detailsOne}
              </p>
              <div className={`${style["video-wrapper"]}`}>
                <button
                  className={`${style["open-video"]}`}
                  onClick={() => setModalOpen(true)}
                >
                  <label
                    className={`${style["open-video-label"]} size-36 extra-bold`}
                  >
                    {props.opt.title}
                  </label>
                  <span className="size-15 extra-bold">Videó lejátszása</span>
                </button>
                <img
                  className={`${style["video-bg"]}`}
                  src={bg}
                  alt="super meaningfull text"
                />
              </div>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${
                  !!props.opt.detailsThree ? "" : style["padding-bottom"]
                } size-20`}
              >
                {props.opt.detailsTwo}
              </p>
              {props.opt.detailsThree ? (
                <p
                  className={`${style["details-text"]} ${
                    !!props.opt.detailsFour ? "" : style["padding-bottom"]
                  } size-20`}
                >
                  {props.opt.detailsThree || ""}
                </p>
              ) : (
                ""
              )}
              {props.opt.detailsFour ? (
                <p
                  className={`${style["details-text"]} ${style["padding-bottom"]} size-20`}
                >
                  {props.opt.detailsFour || ""}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={style["images"]} style={{ height: width / 2 }}>
          <Images gallery={props.opt.gallery} />
        </div>
      </div>
    )
    : 
    (
      <div style={{ position: "relative" }}>
        <Modal
          isOpen={isModalOpen}
          setModalOpen={setModalOpen}
          videos={props.opt.videos}
        />
        <div className={style["header-wrapper"]}>
          <div
            className={style["header"]}
            style={{ backgroundImage: "url(" + backgroundImage + ")" }}
          ></div>
          <label className={`${style["state-location"]} size-13`}>
            <Link to="/programs">Vissza programjainkra</Link>
          </label>
          <label
            className={`${style["header-title"]} size-90 extra-bold`}
          >
            {props.opt.title}
          </label>
        </div>
        <div className={style["body"]}>
          <div className={style["info"]}>
            <div className={style["details"]}>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} ${style["first-paragraph"]} size-20`}
              >
                {props.opt.detailsOne}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
