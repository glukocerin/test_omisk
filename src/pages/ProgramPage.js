import React, { useState, useEffect } from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Modal from "../components/Modal";
import CampPageMobile from "./CampPageMobile";

import { ReactComponent as Kupa } from "../assets/img/icons/kupa.svg";
import { ReactComponent as ArrowRight } from "../assets/img/icons/arrow_right.svg";

import pagesConfig from "../assets/pagesConfig";
const { teachers } = pagesConfig;

const TeacherCards = function () {
  let teachersCopy = Object.assign(teachers);

  teachersCopy.cards = teachersCopy.cards.filter((teacher) => {
    return [
      "Solti Eszter",
      "Benis Katalin",
      "Mády Krisztina",
      "Bozsókiné Taylor Jennifer",
      "Erdész-Taylor Esther",
      "Markolt-Rózsa Réka",
    ].includes(teacher.name);
  });

  return teachersCopy.cards.map((card, index) => (
    <Link to={{ pathname: "/teacher", state: card }} key={index}>
      <div className={style["card"]}>
        <img
          src={require(`../assets/img/teachers/${card.picture}`).default}
          alt=""
        />
        <span className={`${style["teacher-name"]} size-28 extra-bold`}>
          {card.name} <ArrowRight className={style["arrow"]} />
        </span>
      </div>
    </Link>
  ));
};

const generateTeacherLinks = function (links) {
  return links.map((link, index) => {
    let card = teachers.cards.find((teachercard) => {
      return teachercard.name === link;
    });

    return (
      <span
        className={style["teacher-link"]}
        to={{ pathname: "/teacher", state: card }}
        key={index}
      >
        {link}
      </span>
    );
  });
};

const Images = function ({ gallery, alt }) {
  const images = gallery.map((img, index) => {
    return `${process.env.PUBLIC_URL}/assets/img/programs/${img}.jpg`;
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
        alt={alt}
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

export default function ProgramPage(props, isSummerCamp) {
  var backgroundImage = `${process.env.PUBLIC_URL}/assets/img/programs/header/${props.opt.headerImg}.jpg`;

  const [isModalOpen, setModalOpen] = useState(false);

  let width = useCurrentWitdh();

  let bg = `${process.env.PUBLIC_URL}/assets/img/programs/${props.opt.videoImg}.jpg`;
  return props.opt.isSummerCamp !== true ? (
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
        <h1
          className={`${style["header-title"]} size-90 extra-bold ${
            props.opt.title === "Versenyek" && style["achievement"]
          }`}
        >
          {props.opt.title}
        </h1>
        {props.opt.title === "Versenyek" ? (
          <div className={`${style["achievement-wrapper"]}`}>
            <Kupa />
            <Link
              className={`${style["achievement-button"]} size-12`}
              to="/programok/eredmenyeink"
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
                alt={props.opt.alt}
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
        <Images gallery={props.opt.gallery} alt={props.opt.alt} />
      </div>
    </div>
  ) : isMobile ? (
    <CampPageMobile props={props} />
  ) : (
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
          Nyári tánctábor 2023
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
          <div className={style["camp-row"]}>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp01.jpg`).default}
              alt=""
            />
            <div className={style["camp-row-details"]}>
              <label className="size-54 extra-bold">
                {props.opt.content.first_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.place,
                }}
              ></label>
              <label className="size-20">
                {props.opt.content.first_block.programs}
              </label>
              <label className="size-20">
                <span className="extra-bold">Táborvezető: </span>
                {generateTeacherLinks([props.opt.content.first_block.leader])}
              </label>
              <label className="size-20">
                <span className="extra-bold">Tanárok: </span>
                {generateTeacherLinks(props.opt.content.first_block.teachers)}
              </label>
              <label
                className="size-20"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.price,
                }}
              ></label>
              <label
                className="size-20"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.block_desc,
                }}
              ></label>
              <a href="https://tinyurl.com/omisktabor">
                <button className={`${style["btn"]} ${style["primary"]}`}>
                  Jelentkezem
                </button>
              </a>
            </div>
          </div>
          {/* <div className={style["camp-row"]}>
            <div className={style["camp-row-details"]}>
              <label className="size-54 extra-bold">
                {props.opt.content.second_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.second_block.place,
                }}
              ></label>
              <label className="size-20">
                {props.opt.content.second_block.programs}
              </label>
              <label className="size-20">
                <span className="extra-bold">Táborvezető: </span>
                {generateTeacherLinks([props.opt.content.second_block.leader])}
              </label>
              <label className="size-20">
                <span className="extra-bold">Tanárok: </span>
                {generateTeacherLinks(props.opt.content.second_block.teachers)}
              </label>
              <label
                className="size-20"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.second_block.price,
                }}
              ></label>
              <a href="https://tinyurl.com/omisktabor">
                <button className={`${style["btn"]} ${style["primary"]}`}>
                  Jelentkezem
                </button>
              </a>
            </div>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp02.jpg`).default}
              alt=""
            />
          </div> */}
          <div
            className={`${style["camp-row"]} ${style["cover"]} ${style["bg03"]}`}
          >
            <div className={style["apply-box"]}>
              <div className={style["block"]}>
                <label className="size-54 extra-bold">Jelentkezz most!</label>
                <label className="size-36 extra-bold">4 féle táncstílus</label>
                <label className="size-36 extra-bold">
                  Tánc és gimnasztika
                </label>
                <label className="size-36 extra-bold">
                  Tánctermi és szabadtéri programok
                </label>
                <label className="size-36 extra-bold">Táborzáró előadás</label>
              </div>
              <div className={style["block"]}>
                <label className="size-54 extra-bold">Kapcsolat</label>
                <label className="size-36 extra-bold">Solti Eszter</label>
                <label className="size-36 extra-bold">
                  omisktabor@gmail.com
                </label>
                <label className="size-36 extra-bold">06-30-237-9233</label>
              </div>
            </div>
          </div>
          <div
            className={`${style["camp-row"]} ${style["cover"]} ${style["bg04"]}`}
          >
            <label className="size-54 extra-bold">Programjaink</label>
            <div className={style["button-box"]}>
              <Link to="/kurzusok/muveszi-torna">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Művészi torna
                </button>
              </Link>
              <Link to="/kurzusok/mozdulatmuveszet">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Mozdulatművészet
                </button>
              </Link>
            </div>
            <div className={style["button-box"]}>
              <Link to="/kurzusok/keziszeresgimnasztika">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Kéziszeres gimnasztika
                </button>
              </Link>
              <Link to="/kurzusok/modern-tanc">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Modern tánc
                </button>
              </Link>
            </div>
            <div className={style["button-box"]}>
              <Link to="/kurzusok/koreografia">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Koreográfia
                </button>
              </Link>
              <Link to="/kurzusok/kezmuves">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Kézműves
                </button>
              </Link>
              <Link to="/kurzusok/szabadtanc">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Szabad tánc
                </button>
              </Link>
            </div>
            <Link to="/programok/nyari-tabor">
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Részletesen a programokról
              </button>
            </Link>
          </div>
          <div className={`${style["camp-row"]} ${style["teachers"]}`}>
            <label className="size-54 extra-bold">Tábor tanárai</label>
            <div className={style["teacher-cards"]}>
              <TeacherCards />
            </div>
          </div>
          <div
            className={`${style["camp-row"]} ${style["cover"]} ${style["bg05"]}`}
          >
            <div className={style["day-goes-by-box"]}>
              <label className="size-36 extra-bold">Hogyan telik egy nap</label>
              <label className="size-20">
                Már reggel 8 órától várjuk a táborozókat, a programok pedig 9
                órakor kezdődnek.{" "}
                <strong>Közös reggel tornával és csapatépítő játékkal</strong>{" "}
                indul a nap, ahol a felkészülünk a táncórákra és jobban
                megismerkedünk.
              </label>
              <Link to="/programok/nyari-tabor/egy-nap">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Tovább olvasom
                </button>
              </Link>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp06.jpg`).default}
              alt=""
            />
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp07.jpg`).default}
              alt=""
            />
          </div>
          <div
            className={`${style["camp-row"]} ${style["cover"]} ${style["bg08"]}`}
          >
            <div className={style["daycare-box"]}>
              <label className="size-36 extra-bold">Jelentkezés</label>
              <label className="size-20">
                A napközis táborokba az alábbi linken található{" "}
                <strong>jelentkezési lap online kitöltésével lehet:</strong>
              </label>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/1nVpb9bhyClh0Qe_7IP-ogrjk76Eoi8o5boeITYAJTgg/viewform?edit_requested=true&fbzx=-662778040755689619&fbclid=IwAR2IQDseSsi1r4Rhv-XHQpvsLhXh_2cuUGlkfdNZ8Km0E3mKTVVYuW0bAmU"
                className={`${style["apply-link"]} size-20 extra-bold`}
              >
                Jelentkezési lap
              </a>
              <label className="size-20">
                A részvételi díjat természetesen visszatérítjük, ha a
                korlátozások miatt a táborokat nem tudjuk megtartani
              </label>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp09.jpg`).default}
              alt=""
            />
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp10.jpg`).default}
              alt=""
            />
          </div>
          <div className={`${style["video-wrapper"]} ${style["camp"]}`}>
            <button
              className={`${style["open-video"]}`}
              onClick={() => setModalOpen(true)}
            >
              <label
                className={`${style["open-video-label"]} size-36 extra-bold`}
              >
                Tábori videók
              </label>
              <span className="size-15 extra-bold">Videó indítása</span>
            </button>
            <img
              className={`${style["video-bg"]}`}
              src={bg}
              alt="super meaningfull text"
            />
          </div>
          <div className={style["camp-row"]}>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp12.jpg`).default}
              alt=""
            />
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp13.jpg`).default}
              alt=""
            />
          </div>
          <div
            className={`${style["camp-row"]} ${style["cover"]} ${style["bg14"]}`}
          >
            <div className={style["faq-box"]}>
              <label className="size-36 extra-bold">Gyakori kérdések</label>
              <label className="size-20 extra-bold">
                Mikor kezdődik a tábori nap és meddig tart?
              </label>
              <label className="size-20">
                A táborba minden nap reggel 8 órától lehet érkezni, a programok
                9 órakor kezdődnek. 8 órától biztosítjuk a tanMikor kezdődik a
                tábori nap és meddig tart?ári felügyeletet, így akinek reggel
                sietősebb, hozhatja kezdésre gyermekét, de akinek kényelmesebb,
                lehet csak a programok kezdetére érkezni.
              </label>
              <Link to="/programs/summer_camp/faq">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Tovább olvasom
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
