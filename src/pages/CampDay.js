import React, { useState, useEffect } from "react";
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
              className={`${style["header-title"]} size-90 extra-bold ${style["padding-top-title"]}`}
            >
              {props.opt.title}
            </label>
            <p
              className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-top-first-paragraph"]} ${style["padding-bottom-before-images"]} size-20`}
              dangerouslySetInnerHTML={createMarkup(props.opt.detailsOne)}
            ></p>
          </div>
        </div>
      </div>
      <div className={style["images"]} style={{ height: width / 2 }}>
        <Images gallery={props.opt.gallery} />
      </div>
      <div className={style["details"]}>
        <p
          className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} size-20`}
          dangerouslySetInnerHTML={createMarkup(props.opt.detailsTwo)}
        ></p>
      </div>
    </div>
  );
}
