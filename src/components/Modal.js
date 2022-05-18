import React, { useState, useEffect, useCallback } from "react";
import style from "../assets/css/modal.module.css";

function compare(a, b) {
  if (a.year > b.year) {
    return -1;
  }
  if (a.year > b.year) {
    return 1;
  }
  return 0;
}

const Years = function ({ videos, setVideo, selectedVideo }) {
  return videos.sort(compare).map((el, idx) => {
    return (
      <span
        key={el.year + "-" + idx}
        onClick={() => setVideo(el.link)}
        className={`${style["year"]} ${
          el.link === selectedVideo ? style["selected-year"] : ""
        } size-15`}
      >
        {el.title ? el.title : el.year}
      </span>
    );
  });
};

export default function ({ isOpen, setModalOpen, videos }) {
  let sortedVideos = videos.sort(compare);

  const [actualVideo, setVideo] = useState(sortedVideos[0]["link"]),
    escFunction = useCallback(
      (event) => {
        if (event.keyCode === 27) {
          setModalOpen(false);
        }
      },
      [setModalOpen]
    );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    setVideo(sortedVideos[0]["link"]);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, sortedVideos]);

  return (
    <div>
      <div
        className={`${style["modal-overlay"]} ${isOpen ? "" : style["closed"]}`}
        id="modal-overlay"
      ></div>
      <div
        className={`${style["modal"]} ${isOpen ? "" : style["closed"]}`}
        id="modal"
      >
        <div className={`${style["modal-header"]} `}>
          <button
            className={`${style["close-button"]}`}
            onClick={() => setModalOpen(false)}
          >
            &#215;
          </button>
        </div>
        <div className={`${style["modal-body"]} `}>
          {isOpen && (
            <iframe
              className={`${style["video"]} `}
              title="video"
              src={actualVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className={`${style["years"]}`}>
            <Years
              videos={videos}
              setVideo={setVideo}
              selectedVideo={actualVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
