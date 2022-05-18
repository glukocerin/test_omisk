import React, { useState, useEffect } from "react";
import { ReactComponent as DownloadIcon } from "../assets/img/icons/arrow_down.svg";
import style from "../assets/css/programPage.module.css";

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

function createMarkup(markup) {
  return { __html: markup };
}

export default function ProgramPage(props) {
  let width = useCurrentWitdh();

  return (
    <div style={{ position: "relative" }}>
      <div className={style["body"]}>
        <div className={style["info"]}>
          <div className={style["details"]}>
            <label
              className={`${style["camp-header-title"]} size-90 extra-bold ${style["padding-top-title"]}`}
            >
              {props.opt.title}
            </label>
            <p
              className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-top-first-paragraph"]} size-20`}
              dangerouslySetInnerHTML={createMarkup(props.opt.detailsOne)}
            ></p>
            {props.opt.isDownloadContent && (
              <a
                href="https://omisk.hu/documents/beleegyezo_nyilatkozat.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${style["download-content"]} size-20 thin`}
              >
                <DownloadIcon
                  className={`${style["download-icon"]} size-20 thin`}
                />
                <label className="download-text size-20 thin">
                  Egészségügy nyilatkozat + Hozzájárulás fotó- és videó
                  felvételek készítéséhez.
                </label>
              </a>
            )}
            <p
              className={`${style["details-text"]} ${style["padding-bottom-before-images"]} size-20`}
              dangerouslySetInnerHTML={createMarkup(props.opt.detailsTwo)}
            ></p>
          </div>
        </div>
      </div>

      <div className={style["images"]} style={{ height: width / 2 }}>
        <Images gallery={props.opt.gallery} />
      </div>
      <div className={style["details"]}>
        <p
          className={`${style["details-text"]} ${style["padding-bottom"]} size-20`}
          dangerouslySetInnerHTML={createMarkup(props.opt.detailsThree)}
        ></p>
      </div>
    </div>
  );
}
