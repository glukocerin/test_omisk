import React, { useState, useEffect } from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/actuals.css";

import { Link } from "react-router-dom";
import pagesConfig from "../assets/pagesConfig";
import Modal from "../components/Modal";

const { actuals, ...rest } = pagesConfig;

const ImageGallery = function (props) {
  const images = props.list.map((img, inde) => {
    return require(`../assets/img/programs/${img}.jpg`);
  });

  return images.map((img, index) => {
    return <img key={index} src={img} alt="" />;
  });
};

export default function ProgramPage(props) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`);

  const [isModalOpen, setModalOpen] = useState(false);

  let bg = require(`../assets/img/programs/evzaroeloadas/evzaro_eloadasok_bg.jpg`);
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
        <label className="">
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
              className={`${style["details-text"]} ${style["first-paragraph"]} size-20`}
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
            <p className={`${style["details-text"]} size-20`}>
              {props.opt.detailsTwo}
            </p>
            <p className={`${style["details-text"]} size-20`}>
              {props.opt.detailsThree || ""}
            </p>
            <p className={`${style["details-text"]} size-20`}>
              {props.opt.detailsFour || ""}
            </p>
          </div>
        </div>
      </div>
      <div className={style["images"]}></div>
    </div>
  );
}
