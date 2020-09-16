import React, { useState, useEffect } from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/actuals.css";

import { Link } from "react-router-dom";
import pagesConfig from "../assets/pagesConfig";
import Modal from "../components/Modal";

const { actuals, ...rest } = pagesConfig;

const Images = function ({ gallery }) {
  const images = gallery.map((img, index) => {
    return require(`../assets/img/programs/${img}.jpg`);
  });

  return images.map((img, index) => {
    return (
      <img className={style[`image-${index}`]} key={index} src={img} alt="" />
    );
  });
};

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

export default function ProgramPage(props) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`);

  const [isModalOpen, setModalOpen] = useState(false);

  let width = useCurrentWitdh();

  let bg = require(`../assets/img/programs/${props.opt.videoImg}.jpg`);
  return (
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
        <label className={`${style["header-title"]} size-90 extra-bold`}>
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
            <div className={`${style["video-wrapper"]}`}>
              <button
                className={`${style["open-video"]}`}
                onClick={() => setModalOpen(true)}
              >
                <label
                  className={`${style["open-video-label"]} size-36 extra-bold`}
                >
                  Évzáró előadások
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
      <div className={style["images"]} style={{ height: width/2 }}>
        <Images gallery={props.opt.gallery} />
      </div>
    </div>
  );
}
