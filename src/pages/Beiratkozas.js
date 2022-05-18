import React, { useState, useEffect } from "react";
import style from "../assets/css/beiratkozas.module.css";
import { Link } from "react-router-dom";

import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  infinitePlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "react-glidejs/dist/index.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function SiteContainer({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  );
}
function handleClick(e) {
  e.preventDefault();

  const enrollmentDates = document.getElementById("enrollment-dates");
  enrollmentDates.scrollIntoView({ behavior: "smooth" });
}

export default function Beiratkozas() {
  let images = [
    require(`../assets/img/gallery/muveszi-torna-2.jpg`).default,
    require(`../assets/img/gallery/modern-tanc-1.jpg`).default,
    require(`../assets/img/gallery/klasszikus-balett-2.jpg`).default,
    require(`../assets/img/gallery/jazztanc-2.jpg`).default,
    require(`../assets/img/gallery/ritmikus-gimnasztika-2.jpg`).default,
    require(`../assets/img/gallery/keziszeres-gimnasztika-1.jpg`).default,
    require(`../assets/img/gallery/mozdulatmuveszet-2.jpg`).default,
    require(`../assets/img/gallery/modern-tanc-2.jpg`).default,
    require(`../assets/img/gallery/keziszeres-gimnasztika-2.jpg`).default,
    require(`../assets/img/gallery/modern-tanc-3.jpg`).default,
    require(`../assets/img/gallery/jazztanc-1.jpg`).default,
    require(`../assets/img/gallery/ritmikus-gimnasztika-1.jpg`).default,
    require(`../assets/img/gallery/klasszikus-balett-1.jpg`).default,
    require(`../assets/img/gallery/esztetikus-testkepzes-1.jpg`).default,
    require(`../assets/img/gallery/mozdulatmuveszet-1.jpg`).default,
    require(`../assets/img/gallery/esztetikus-testkepzes-2.jpg`).default,
    require(`../assets/img/gallery/muveszi-torna-1.jpg`).default,
  ];

  function onChangeHandler(props) {
    // console.log(props);
  }

  return (
    <div>
      <div className={style[`header-wrapper`]}>
        <div className={style[`title-wrapper`]}>
          <h1>Beiratkozás 2021/22</h1>
        </div>
      </div>
      <div className={`${style["gallery-wrapper"]}`}>
        <Carousel
          onChange={onChangeHandler}
          plugins={[
            "centered",
            "infinite",
            {
              resolve: infinitePlugin,
              options: {
                numberOfInfiniteClones: 3,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 4000,
              },
            },
          ]}
          breakpoints={{
            1280: {
              plugins: [
                "infinite",
                {
                  resolve: infinitePlugin,
                  options: {
                    numberOfInfiniteClones: 3,
                  },
                },
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
                {
                  resolve: autoplayPlugin,
                  options: {
                    interval: 4000,
                  },
                },
              ],
            },
          }}
          animationSpeed={1000}
        >
          {images.map((el) => (
            <div className="image-siled-wrapper">
              <img
                className={style[`image-slide`]}
                style={{}}
                key={""}
                src={el}
                alt={el}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <SiteContainer className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className={`col-lg-6 ${style["dates-and-places"]}`}>
            <h3>
            Év közben is lehet csatlakozni azokhoz a csoporthoz, amelyek nem teltek be. A kurzusaink almenűiben megtalàlható, hogy melyik helyszínen és milyen időpontokban vannak órák. A szabad helyekről Mikusik Márta iskolatitkár ad felvilágosítást.
            </h3>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className={`row ${style[`contact-wrapper`]}`}>
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className={`row ${style[`contact-details-wrapper`]}`}>
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className={`${style["contact-image-wrapper"]}`}>
                  <div>
                    <img
                      className={`${style["contact-image"]}`}
                      src={`${require(`../assets/img/kapcsolat.jpg`).default}`}
                      alt=""
                    ></img>
                    <div className={`${style["contact-person-wrapper"]}`}>
                      <p className={`${style["contact-name"]}`}>
                        Mikusik Márta
                      </p>
                      <p className={`${style["contact-position"]}`}>
                        iskolatitkár
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`col-lg-5 ${style[`contact-us`]}`}>
                <h2>Lépj kapcsolatba velünk</h2>
                <div>
                  <p>Telefon: 06-1-2000-138</p>
                  <p>Mobil: 06-20-9460-848</p>
                  <p>E-mail: iroda@omisk.hu</p>
                  <p>Posta: 1021 Budapest, Széher út 77.</p>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </SiteContainer>
    </div>
  );
}
