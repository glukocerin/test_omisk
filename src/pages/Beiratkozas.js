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
          <h1>Beiratkozás 2022/23</h1>
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
        {/* <div className="row">
          <div className="col-lg-3"></div> */}
        {/* <div className={`col-lg-6 ${style["dates-and-places"]}`}>
            <h3>
              Év közben is lehet csatlakozni azokhoz a csoporthoz, amelyek nem
              teltek be. A kurzusaink almenűiben megtalàlható, hogy melyik
              helyszínen és milyen időpontokban vannak órák. A szabad helyekről
              Mikusik Márta iskolatitkár ad felvilágosítást.
            </h3>
            <div>
              <Link to="/beiratkozas">
                <button
                  className={style[`enrollment-button`]}
                  onClick={(e) => handleClick(e)}
                >
                  Beiratkozási időpontok és helyszinek
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className={`row ${style[`content-wrapper`]}`}>
          <div className="col-lg-5">
            <div className={`${style[`image-wrapper`]}`}>
              <img
                className={`${style[`content-image`]}`}
                src={`${
                  require(`../assets/img/gallery/ritmikus-gimnasztika-3.jpg`)
                    .default
                }`}
                alt=""
              ></img>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className={`col-lg-5 ${style[`details-tile`]}`}>
            <div className={`${style[`details-wrapper`]}`}>
              <h2>4 évestől felnőtt korodig</h2>
              <p>
                lehetsz csapatunk tagja és választhatsz az életkorodnak
                megfelelő különböző kurzusok közül. Rendszeresen tartunk
                bemutatókat, gálaműsorokat és járhatsz olyan csoportba is,
                amelyek táncversenyeken is megmérettetik magukat.
                Programjainkról itt olvashatsz részletesebben:{" "}
              </p>
              <Link to="/programjaink">
                <button className={style[`green-button`]}>Programjaink</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div> */}
        {/* <div
          className={`row ${style[`content-wrapper`]} ${
            style[`content-wrapper-margin-top`]
          }`}
        >
          {useWindowDimensions().width <= 800 && (
            <div className="col-lg-5">
              <div className={`${style[`image-wrapper-inverse`]}`}>
                <img
                  className={`${style[`content-image-inverse`]}`}
                  src={`${
                    require(`../assets/img/gallery/modern-tanc-4.jpg`).default
                  }`}
                  alt=""
                ></img>
              </div>
            </div>
          )} */}
        {/* <div className="col-lg-1"></div> */}
        {/* <div className={`col-lg-5 ${style[`details-tile`]}`}>
            <div className={`${style[`details-wrapper`]}`}>
              <h2>Melyik kurzust válasszam?</h2>
              <p>
                Képzésünket 4 éves korban művészi tornával (ritmikus
                gimnasztika) kezdjük el. Az általunk követett Berczik módszer
                kiváló alapot ad a későbbiekben választható valamennyi műfajhoz.
                Iskolás kortól választható: balett, mozdulatművészet, modern
                tánc és jazztánc. A tanítás iskolaszerűen egymásra épülő
                évfolyamokban történik, de menet közben is lehet csatlakozni az
                életkornak illetve előképzettségnek megfelelő csoportba. A
                műfajokról itt olvashatsz bővebben:{" "}
              </p>
              <Link to="/kurzusok">
                <button className={style[`green-button`]}>Kurzusaink</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-1"></div>
          {useWindowDimensions().width >= 801 && (
            <div className="col-lg-5">
              <div className={`${style[`image-wrapper-inverse`]}`}>
                <img
                  className={`${style[`content-image-inverse`]}`}
                  src={`${
                    require(`../assets/img/gallery/modern-tanc-4.jpg`).default
                  }`}
                  alt=""
                ></img>
              </div>
            </div>
          )}
        </div> */}
        <div
          id={"enrollment-dates"}
          className={`row ${style[`enrollment-dates-wrapper`]}`}
        >
          {/* <div className="col-lg-3"></div> */}
          {/* <div className={`col-lg-6 ${style[`enrollment-dates-details`]}`}>
            <h3>
              A beiratkozást 2022-23-as tanévre az alábbi időpontokban tartjuk:
            </h3>
            <div className={`${style[`enrollment-dates-details-wrapper`]}`}>
              <p>20-22 - Fitness, XII. Szarvas Gábor út 20-22</p>
              <ul>
                <li>Növendékeinknek: Augusztus 29, (hétfő) 16.30-19.00</li>
                <li>Új jelentkezők: Szeptember 5, (hétfő) 16.30-19.00</li>
              </ul>
              <p>Óbudai Kulturális Központ, III. San Marco u. 81.</p>
              <ul>
                <li>Növendékeinknek: Augusztus 30, (kedd) 16.30-19.00</li>
                <li>Új jelentkezők: Szeptember 6, (kedd) 16.30-19.00</li>
              </ul>
              <p>Békásmegyeri Közösségi Ház, III. Csobánka tér 5.</p>
              <ul>
                <li>Növendékeinknek: Augusztus 31, (szerda) 16.30-19.00</li>
                <li>Új jelentkezők: Szeptember 7, (szerda) 16.30-19.00</li>
              </ul>
              <p>MOM Kulturális Központ, XII. Csörsz u. 18.</p>
              <ul>
                <li>Növendékeinknek: Szeptember 1, (csütörtök) 16.30-19.00</li>
                <li>Új jelentkezők: Szeptember 8, (csütörtök) 16.30-19.00</li>
              </ul>
              <p>VII. ker. Táncstúdió, VII. Wesselényi u. 41.</p>
              <ul>
                <li>
                  Növendékeinknek és új jelentkezők: Szeptember 2 és Szeptember
                  9 (péntek) 17.00-18.00
                </li>
              </ul>
            </div>
          </div> */}
          <div className={`${style[`enrollment-details-wrapper`]}`}>
            <div className={`${style[`enrollment-details`]}`}>
              <h3>
                A beiratkozás alkalmával találkozhatsz leendő tanáraiddal és
                Igen, a tanév folyamán is lehet csatlakozni, ha találunk olyan
                csoportot, amely életkorod, tudásszinted szerint megfelelő és a
                létszám is lehetővé teszi. Mikusik Márta iskolatitkárunkkal vedd
                fel a kapcsolatot telefonon vagy e-mailben, ha jelentkezni
                szeretnél! Ő tájékoztat pontos órarendünkről és arról, hogy
                melyek azok a csoportok, amelyekhez csatlakozni tudsz. A
                Kurzusaink menüpont alatt, az órák leírásánál megtalálod azt,
                hogy az egyes helyszíneken mely napokon tartunk órákat
              </h3>
              <div>
                <Link to="/kapcsolat">
                  <button className={style[`enrollment-button`]}>
                    Érdeklődöm
                  </button>
                </Link>
              </div>
            </div>
          </div>
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
