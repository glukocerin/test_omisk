import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DelayLink from "../components/DelayLink";
import LeafletMap from "../components/LeafletMap";
import { useSelector, useDispatch } from "react-redux";
import FindByProp from "../components/FindByProp";

import { updatePageindex } from "../actions/navigation";

import "../assets/css/landing.css";

import { ReactComponent as Gymnast } from "../assets/img/gymnast.svg";
import { ReactComponent as MusicalNote } from "../assets/img/musical-note.svg";
import { ReactComponent as PaintBrush } from "../assets/img/paint-brush.svg";
import { ReactComponent as LogoWithTitle } from "../assets/img/icons/logo_w_title.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";
import { ReactComponent as FacebookTransparent } from "../assets/img/icons/facebook_transparent.svg";
import { ReactComponent as InstagramTransparent } from "../assets/img/icons/instagram_transparent.svg";
import { ReactComponent as YoutubeTransparent } from "../assets/img/icons/youtube_transparent.svg";
// import { ReactComponent as DoubleArrowDown } from "../assets/img/icons/double_arrow_down.svg";
import { ReactComponent as ArrowRight } from "../assets/img/icons/arrow_right.svg";
import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";
// import { ReactComponent as Stamp } from "../assets/img/icons/stamp.svg";

import pagesConfig from "../assets/pagesConfig";

import { isMobile } from "react-device-detect";

const { landing } = pagesConfig;

const Dots = function ({ setActiveDot, dotChange, activeDot, stopAutoScroll }) {
  const dots = [];

  for (let i = 1; i < 9; i++) {
    dots.push(
      <div
        key={i}
        onClick={() => {
          setActiveDot(i);
          dotChange(i);
          stopAutoScroll(true);
        }}
        className={`dot ${activeDot === i ? "active" : ""}`}
      ></div>
    );
  }

  return dots;
};

const keyHelper = [
  "no-one",
  "no-two",
  "no-three",
  "no-four",
  "no-five",
  "no-fix",
  "no-seven",
];

const MobileFloating = function (props) {
  return (
    <div
      className={`mobile-floating ${props.scrollTop > 0 && "active"}`}
      onClick={() => (document.querySelector(".App").scrollTop = 0)}
    >
      <ArrowRight className="arrow" />
    </div>
  );
};

const CoursesList = function (props) {
  const dispatch = useDispatch();

  return landing["list_courses"].list.map((item, index) => (
    <DelayLink
      onMouseEnter={() => props.setActiveFiveSwitch(keyHelper[index])}
      to={`/kurzusok/${item.link}`}
      className={`list-item ${
        props.activeFiveSwitch === keyHelper[index] && "active"
      }`}
      key={index}
      delay={500}
      onDelayStart={() => {
        dispatch(updatePageindex({ payload: props.activeDot }));
        props.setZoom(true);
      }}
    >
      <ArrowRight className="arrow" />
      <span className="text size-28 extra-bold">{item.text}</span>
    </DelayLink>
  ));
};

const WhatWeDo = function (props) {
  const dispatch = useDispatch();
  return landing["list_what_we_do"].list.map((item, index) => (
    <DelayLink
      onClick={() => dispatch(updatePageindex({ payload: props.activeDot }))}
      onMouseEnter={() => props.setActiveSevenSwitch(keyHelper[index])}
      to={`/programok/${item.link}`}
      className={`list-item ${
        props.activeSevenSwitch === keyHelper[index] && "active"
      }`}
      key={index}
      delay={500}
      onDelayStart={() => {
        dispatch(updatePageindex({ payload: props.activeDot }));
        props.setZoom(true);
      }}
    >
      <ArrowRight className="arrow" />
      <span className="text size-28 extra-bold">{item.text}</span>
    </DelayLink>
  ));
};

const getScrollTop = () => document.getElementById("root").scrollTop;

function useCurrentScrollTop() {
  let [top, setTop] = useState(getScrollTop());

  useEffect(() => {
    const scrollListener = () => {
      setTop(document.querySelector(".App").scrollTop || getScrollTop());
    };
    window.addEventListener("scroll", scrollListener, true);

    return () => {
      window.removeEventListener("scroll", scrollListener, true);
    };
  }, []);

  return top;
}

function restoreScrollTop(event) {
  event.persist();
  document.querySelector(".App").scrollTop = event.currentTarget.offsetTop;
}

export default function Landing({ dotChange }) {
  const pageIndex = useSelector((store) => store.navigation.landingPageIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pageIndex === 0 || !pageIndex) {
      setActiveDot(1);
    } else {
      setActiveDot(pageIndex);
    }
    return function () {
      // dispatch({ type: "SET_PREV_STEP", payload: stepName });
    };
  }, [pageIndex]);

  const [activeDot, setActiveDot] = useState(1),
    [activeLink, setActiveLink] = useState(0),
    [activePlace, setActivePlace] = useState({
      placeId: 0,
      position: null,
      zoom: null,
    }),
    [activeFiveSwitch, setActiveFiveSwitch] = useState("no-one"),
    [activeSevenSwitch, setActiveSevenSwitch] = useState("no-one"),
    [zoom, setZoom] = useState(false),
    [activeCard, setActiveCard] = useState(0),
    [stepDown, setStepDown] = useState(0),
    [stepUp, setStepUp] = useState(0),
    scroller = function (e) {
      if (e.deltaY > 0 && activeDot < 8) {
        setStepDown(stepDown + 1);
        if (stepDown % 5 === 0 && stepDown > 0) {
          setActiveDot(activeDot + 1);
          dotChange(activeDot + 1);
          setStepDown(0);
        }
      } else if (e.deltaY < 0 && activeDot > 1) {
        setStepUp(stepUp + 1);
        if (stepUp % 5 === 0 && stepUp > 0) {
          setActiveDot(activeDot - 1);
          dotChange(activeDot - 1);
          setStepUp(0);
        }
      }
    },
    [autoScrollStoped, stopAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScrollStoped && !isMobile) {
      const interval = setInterval(() => {
        activeDot <= 7 && setActiveDot(activeDot + 1);
        activeDot === 7 && setActiveDot(1);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeDot, autoScrollStoped]);

  return (
    <div className="landing" onWheel={(e) => scroller(e)}>
      <div className={`left one ${activeDot === 1 ? "active" : ""}`}>
        <div className="content-block">
          <div className="titles">
            <label className="title extra-bold size-54 new">
              Óbuda Tánc és Mozgásművészeti Iskola
            </label>
            <label className="title extra-bold size-54 new date-enrollment">
              Beiratkozás 2021
            </label>
            <label className="title extra-bold size-24 new date-enrollment">
              4 éves kortól
            </label>
          </div>
          {/* {isMobile ? (
            <label className="extra-bold size-20">{`06. 28 - 07. 02   Óbudai Kulturális Központ\n08. 02 - 08. 06   MOM Kulturális Központ\nKorosztályok:  6-12 és 13 -17`}</label>
          ) : (
            <label className="extra-bold size-20">{`06. 28 - 07. 02   Óbudai Kulturális Központ\n08. 02 - 08. 06   MOM Kulturális Központ\nMindkét helyszínen gyermek ( 6-12 )\nés ifjúsági ( 13 -17) turnus\nművészi torna,  mozdulatművészet,\nkéziszeres gimnasztika,  modern tánc,\nszabad tánc, koreográfia`}</label>
          )} */}
          <Link
            onClick={() => {
              dispatch(updatePageindex({ payload: activeDot }));
            }}
            to="/beiratkozas"
          >
            <button className="btn-enrollment">Részletek</button>
          </Link>
        </div>
      </div>
      <div className={`right one ${activeDot === 1 ? "active" : ""}`}></div>
      <div
        className={`mobile-card one ${activeCard === 1 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 1 ? setActiveCard(0) : setActiveCard(1);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Küldetésünk</label>
      </div>
      <div className={`left two ${activeDot === 2 ? "active" : ""}`}>
        <div className="text-box">
          <label className="text extra-bold size-48">
            „A tanítás első lépése
          </label>
          <label className="text extra-bold size-48">megszerettetni</label>
          <label className="text extra-bold size-48">a mozgástanulást,</label>
          <label className="text extra-bold size-48">amely nem más, mint</label>
          <label className="text extra-bold size-48">az ösztönös mozgás</label>
          <label className="text extra-bold size-48">
            fokozatos átalakítása
          </label>
          <label className="text extra-bold size-48">a tudatos felé.”</label>
          <div className="separator"></div>
          <label className="text size-24 thin">Berczik Sára</label>
        </div>
      </div>
      <div className={`right two ${activeDot === 2 ? "active" : ""}`}></div>
      <div
        className={`mobile-card inverse two ${activeCard === 2 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 2 ? setActiveCard(0) : setActiveCard(2);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Kik vagyunk?</label>
      </div>
      <div className={`left three ${activeDot === 3 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">Kik vagyunk?</label>
          <label className="article size-16">{`Mozgásművészeti iskola, ahol sokféle műfajt megtalálsz. Tánc és gimnasztika, technika és kreativitás, klasszikus- és modern zene. Kemény munka és kikapcsolódás, személyre szóló figyelem és közösségteremtés. Mindez sport és művészet határán. Úgy gondolod, hogy ezek nem férnek bele egy órába?`}</label>
          <label className="article size-16 extra-bold">
            Gyere, nézd meg, mi így működünk!
            <br />
            Megtalálsz minket hét budapesti{" "}
            <Link
              onClick={() => {
                dispatch(updatePageindex({ payload: activeDot }));
              }}
              to="/enrollment/#map"
            >
              helyszínen.
            </Link>
          </label>
          <div className="button-box">
            <Link
              onClick={() => {
                dispatch(updatePageindex({ payload: activeDot }));
              }}
              to="/courses"
            >
              <button className="btn btn-secondary">Kurzusaink</button>
            </Link>
            <Link
              onClick={() => dispatch(updatePageindex({ payload: activeDot }))}
              className="btn-programs"
              to="/programs"
            >
              <button className="btn btn-primary">Programjaink</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`right three ${activeDot === 3 ? "active" : ""}`}></div>
      {/* why 3? because they asked for... ^^ --> https://trello.com/c/S6EkYH6a/102-landing-oldal-csere */}
      <div
        className={`mobile-card seven ${activeCard === 3 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 3 ? setActiveCard(0) : setActiveCard(3);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Ami fontos számunkra</label>
      </div>
      {/* why 4? because they asked for... ^^ --> https://trello.com/c/S6EkYH6a/102-landing-oldal-csere */}
      <div className={`left eight ${activeDot === 4 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">Ami fontos nekünk</label>
          <div className="sepa-row">
            <Gymnast className="icon" />
            <label className="text size-32 extra-bold">Berczik technika</label>
          </div>
          <label className="article size-20">
            A{" "}
            <Link
              to={{
                pathname: "/blog_entry",
                state: FindByProp("blog", "cards", "index", "berczik"),
              }}
            >
              Berczik-technika
            </Link>{" "}
            a gyermekek természetes mozgásából kiindulva fejleszti a testtudatot
            és nevel tudatosságra. Mindig az életkornak megfelelő mozgásforma,
            amely biztos alapot ad a bármelyik táncstílushoz.
          </label>
          <div className="sepa-row">
            <MusicalNote className="icon" />
            <label className="text size-32 extra-bold">Zeneiség</label>
          </div>
          <label className="article size-20">
            A zene nálunk nem csak kísérő eleme a táncnak. Koreográfiáinkban
            szoros összhangban egymás hatását erősítik: segít a zene
            megértésében, és érzékenyít a táncra. Így hozzuk mi mozgásba a
            zenét.
          </label>
          <div className="sepa-row">
            <PaintBrush className="icon" />
            <label className="text size-32 extra-bold">Kreativitás</label>
          </div>
          <label className="article size-20">
            A koreográfia készítés az önkifejezés egy formája, a közös alkotás
            csoportból közösséget formál. Növendékeink a technikai tudás
            megszerzése mellett megtanulják a tánc nyelvén kifejezni magukat,
            kibontakoztathatják kreativitásukat.
          </label>
        </div>
      </div>
      <div className={`right eight ${activeDot === 4 ? "active" : ""}`}></div>
      <div
        className={`mobile-card four ${activeCard === 4 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 4 ? setActiveCard(0) : setActiveCard(4);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Milyen kurzusaink vannak?</label>
      </div>
      <div className={`left five ${activeDot === 5 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">
            {landing["list_courses"].title}
          </label>
          <CoursesList
            activeDot={activeDot}
            activeFiveSwitch={activeFiveSwitch}
            setActiveFiveSwitch={setActiveFiveSwitch}
            setZoom={setZoom}
          />
        </div>
      </div>
      <div
        className={`right five ${
          activeDot === 5 ? "active" : ""
        } ${activeFiveSwitch} ${zoom && "zoomed"}`}
      ></div>
      <div
        className={`mobile-card inverse five ${activeCard === 5 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 5 ? setActiveCard(0) : setActiveCard(5);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Mit csinálunk az órákon?</label>
      </div>
      <div className={`left six ${activeDot === 6 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">{`Mit csinálunk\naz órákon?`}</label>
          <label className="article size-16">
            Tréningezünk, kombinációkat és koreográfiákat tanulunk -
            korosztályos csoportokban, heti rendszerességgel. A tréning
            rugalmassá és erőssé tesz, miközben készség szinten sajátíthatjuk el
            az adott műfajnak megfelelő mozgásformát – művészi tornán a
            kéziszerek használatát is. Az órán tanult kombinációk készítik elő
            az évvégi előadáson szinpadra kerülő koreográfiákat.
          </label>
        </div>
      </div>
      <div className={`right six ${activeDot === 6 ? "active" : ""}`}>
        <div className="content-block">
          <iframe
            title="video"
            src={
              activeDot === 6
                ? landing["youtube_links"][activeLink].link
                : undefined
            }
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="link-block">
            <label
              onClick={() => setActiveLink(0)}
              className={`link size-15 ${activeLink === 0 && "active"}`}
            >
              {landing["youtube_links"][0].text}
            </label>
            <label
              onClick={() => setActiveLink(1)}
              className={`link size-15 ${activeLink === 1 && "active"}`}
            >
              {landing["youtube_links"][1].text}
            </label>
            <label
              onClick={() => setActiveLink(2)}
              className={`link size-15 ${activeLink === 2 && "active"}`}
            >
              {landing["youtube_links"][2].text}
            </label>
          </div>
        </div>
      </div>
      <div
        className={`mobile-card inverse six ${activeCard === 6 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 6 ? setActiveCard(0) : setActiveCard(6);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">És az órákon kívül...</label>
      </div>
      <div className={`left seven ${activeDot === 7 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">
            {landing["list_what_we_do"].title}
          </label>
          <WhatWeDo
            activeDot={activeDot}
            activeSevenSwitch={activeSevenSwitch}
            setActiveSevenSwitch={setActiveSevenSwitch}
            setZoom={setZoom}
          />
        </div>
      </div>
      <div
        className={`right seven ${
          activeDot === 7 ? "active" : ""
        } ${activeSevenSwitch} ${zoom && "zoomed"}`}
      ></div>
      {/* why 7? because I'm too lazy ^^ --> https://trello.com/c/S6EkYH6a/102-landing-oldal-csere */}
      <div
        className={`mobile-card three ${activeCard === 7 && "toggled"}`}
        onClick={(event) => {
          restoreScrollTop(event);
          activeCard === 7 ? setActiveCard(0) : setActiveCard(7);
        }}
      >
        <PlusSign className="plus-sign" />
        <MinusSign className="minus-sign" />
        <label className="text extra-bold">Hol vagyunk?</label>
      </div>
      {/* why 8? because I'm too lazy ^^ --> https://trello.com/c/S6EkYH6a/102-landing-oldal-csere */}
      <div className={`left four ${activeDot === 8 ? "active" : ""}`}>
        <div className="content-block">
          <label className="title extra-bold size-54">Hol vagyunk?</label>
          <div className="drop-down-list">
            <div
              className={`place ${activePlace.placeId === 1 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 1
                    ? { placeId: null, position: null }
                    : { placeId: 1, position: [47.54154, 19.03426], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                Óbudai Kulturális Központ
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  III. San Marco u. 81.
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I kedd I szerda I csütörtök I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Benis Katalin I Kovács Bea I Rácz-Lakatos Lilla I Taylor
                  Esther
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I kedd I szerda I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Benis Katalin I Kovács Bea I Pers Júlia I Rácz-Lakatos Lilla
                </label>
                <label className="place-program-row size-17 thin title">
                  Modern tánc
                </label>
                <label className="place-program-row size-17 thin">hétfő </label>
                <label className="place-program-row size-17 thin">
                  Solti Eszter
                </label>
                <label className="place-program-row size-17 thin title">
                  Jazztánc
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Kalocsai Edit
                </label>
                <label className="place-program-row size-17 thin title">
                  Klasszikus balett
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Kalocsai Edit
                </label>
                <label className="place-program-row size-17 thin title">
                  Pre ballet/EN
                </label>
                <label className="place-program-row size-17 thin">
                  péntek{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Taylor Esther
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 2 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 2
                    ? { placeId: null, position: null }
                    : { placeId: 2, position: [47.59798, 19.05255], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                Békásmegyeri Közösségi Ház
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  III. Csobánka tér 5
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I csütörtök I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Kovács Bea I Rácz-Lakatos Lilla{" "}
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I csütörtök I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Kovács Bea I Rácz-Lakatos Lilla{" "}
                </label>
                <label className="place-program-row size-17 thin title">
                  Modern tánc
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I szerda I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Csöngei Barbara
                </label>
                <label className="place-program-row size-17 thin title">
                  Klasszikus balett
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I szerda I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Csöngei Barbara
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 3 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 3
                    ? { placeId: null, position: null }
                    : { placeId: 3, position: [47.48967, 19.01836], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                MOM Kulturális Központ
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  XII. Csörsz u. 18
                </label>
                <label className="place-address size-15 extra-bold">
                  XII. Böszörményi út 24
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I kedd I csütörtök{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Benis Katalin I Solti Eszter
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Benis Katalin
                </label>
                <label className="place-program-row size-17 thin title">
                  Modern tánc
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Csöngei Barbara{" "}
                </label>
                <label className="place-program-row size-17 thin title">
                  Klasszikus balett
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I péntek
                </label>
                <label className="place-program-row size-17 thin">
                  Csöngei Barbara
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 4 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 4
                    ? { placeId: null, position: null }
                    : { placeId: 4, position: [47.51262, 18.99469], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                Virányosi Közösségi Ház
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  XII. Szarvas Gábor út 8/c
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I csütörtök
                </label>
                <label className="place-program-row size-17 thin">
                  Rózsa Réka
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  kedd I csütörtök{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Rózsa Réka
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 5 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 5
                    ? { placeId: null, position: null }
                    : { placeId: 5, position: [47.51262, 18.99469], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                Szarvas Gábor Közösségi Tér
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  XII. Szarvas Gábor út 22
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I kedd I szerda I csütörtök{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Mády Krisztina{" "}
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I kedd I szerda I csütörtök{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Mády Krisztina{" "}
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 7 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 7
                    ? { placeId: null, position: null }
                    : { placeId: 7, position: [47.48746, 19.07061], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                Józsefvárosi Galéria és Rendezvényközpont
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  VIII. József krt. 70
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I szerda
                </label>
                <label className="place-program-row size-17 thin">
                  Solti Eszter
                </label>
                <label className="place-program-row size-17 thin title">
                  Mozdulatművészet
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I szerda
                </label>
                <label className="place-program-row size-17 thin">
                  Solti Eszter
                </label>
              </div>
            </div>
            <div
              className={`place ${activePlace.placeId === 8 && "active"}`}
              onClick={() =>
                setActivePlace(
                  activePlace.placeId === 8
                    ? { placeId: null, position: null }
                    : { placeId: 8, position: [47.49992, 19.06815], zoom: 15 }
                )
              }
            >
              <PlusSign className="plus-sign" />
              <MinusSign className="minus-sign" />
              <label className="place-label size-24 extra-bold">
                VII. Kerületi Táncstúdió
              </label>
              <div className="place-informations">
                <label className="place-address size-15 extra-bold">
                  VII. Wesselényi u. 41
                </label>
                <label className="place-program-row size-17 thin title">
                  Művészi torna
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I szerda
                </label>
                <label className="place-program-row size-17 thin">
                  P.Ács Vali
                </label>
                <label className="place-program-row size-17 thin title">
                  Klasszikus balett
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I szerda
                </label>
                <label className="place-program-row size-17 thin">
                  P.Ács Vali
                </label>
                <label className="place-program-row size-17 thin title">
                  Klasszikus balett
                </label>
                <label className="place-program-row size-17 thin">
                  hétfő I szerda{" "}
                </label>
                <label className="place-program-row size-17 thin">
                  Csöngei Barbara
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`right four ${activeDot === 8 ? "active" : ""}`}>
        <LeafletMap props={activePlace} />
      </div>
      <div className="dots">
        <Dots
          setActiveDot={setActiveDot}
          dotChange={dotChange}
          activeDot={activeDot}
          stopAutoScroll={stopAutoScroll}
        />
      </div>
      <div className="mobile-footer">
        <div className="content-block">
          <div className="content-header">
            <LogoWithTitle className="logo" />
          </div>
          <label className="text size-20 extra-bold">Kapcsolat</label>
          <label className="article size-15">
            06-1-2000-138
            <br />
            06-20-9460-848
            <br />
            iroda@omisk.hu
            <br />
            Óbuda Mozgásművészeti Iskola
            <br />
            1021 Budapest, Széher út 77.
            <br />
            <br />
            <Link to="/contact/#gyik">Gyakran ismételt kérdések</Link>
            <br />
          </label>
          <label className="text size-20 extra-bold">Kurzusaink</label>
          <label className="article size-15">
            Művészi torna, 4 éves kortól
            <br />
            Mozdulatművészet, 10 éves kortól
            <br />
            Modern tánc, 8 éves kortól
            <br />
            Jazztánc, 6 éves kortól
            <br />
            Klasszikus balett, 6 éves kortól
            <br />
            Pre ballet / EN, 4-6 eves korosztálynak
            <br />
          </label>
          <label className="text size-20 extra-bold">Helyszíneink</label>
          <label className="article size-15">
            Óbudai Kulturális Központ
            <br />
            Békásmegyeri Közösségi Ház
            <br />
            MOM Kulturális Központ
            <br />
            Virányosi Közösségi Ház
            <br />
            Szarvas Gábor Közösségi Tér
            <br />
            Józsefvárosi Galéria és Rendezvényközpont
            <br />
            VII. ker. Táncstúdió
            <br />
            <br />
            <Link to="/enrollment/#map">Térkép</Link>
          </label>
          <div className="sm-icons">
            <a
              href="https://www.instagram.com/o_m_i_s_k/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/omisk.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Facebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <Youtube />
            </a>
          </div>
          <div className="sepa"></div>
          <label className="article size-15">
            Design: Pers-Kovács Nóra
            <br />
            Fejlesztés: Csordás Attila, Tóth-Angyal János
          </label>
        </div>
      </div>
      <div className="social-media-bar">
        <a
          className="icon"
          href="https://www.facebook.com/omisk.hu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookTransparent />
        </a>
        <a
          className="icon"
          href="https://www.instagram.com/o_m_i_s_k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramTransparent />
        </a>
        <a
          className="icon"
          href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeTransparent />
        </a>
      </div>
      <MobileFloating scrollTop={useCurrentScrollTop()} />
    </div>
  );
}
