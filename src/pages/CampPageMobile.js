import React from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";

export default function CampPageMobile({ props }) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`)
    .default;

  return (
    <div style={{ position: "relative" }}>
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
          <div className={style["camp-row"]}>
            <div className={style["camp-row-details"]}>
              <label className="size-32 bold">
                {props.opt.content.first_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.place,
                }}
              ></label>
              <label className="size-32 bold">
                {props.opt.content.second_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.place,
                }}
              ></label>
            </div>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp01.jpg`).default}
              alt=""
            />
          </div>
          <div className={style["camp-row"]}>
            <div className={style["camp-row-details"]}>
              <label className="size-20">
                <strong>
                  Korosztályok:{" "}
                  <span className={style["blue"]}>6-12 és 13-17</span>
                </strong>
              </label>
              <label className="size-20">
                <span className="bold">Részvételi díj: 42 000Ft</span>
                <br />
                <span>Iskolánk növendékeinek</span>
                <br />
                <span>
                  kedvezményesen: <strong>39.000 Ft</strong>
                </span>
              </label>
              <Link to="/programs/summer_camp/application">
                <button className={`${style["btn"]} ${style["primary"]}`}>
                  Jelentkezem
                </button>
              </Link>
            </div>
            <img
              className={style["camp-row-image"]}
              src={require(`../assets/img/programs/camp/camp02.jpg`).default}
              alt=""
            />
          </div>
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
              src={
                require(`../assets/img/programs/camp/camp03cover.jpg`).default
              }
              alt=""
            />
            <div className={style["apply-box"]}>
              <div className={style["block"]}>
                <label className="size-32 bold">Jelentkezz most!</label>
                <label className="size-20 bold">4 féle táncstílus</label>
                <label className="size-20 bold">Tánc és gimnasztika</label>
                <label className="size-20 bold">
                  Tánctermi és szabadtéri programok
                </label>
                <label className="size-20 bold">Táborzáró előadás</label>
              </div>
              <div className={style["block"]}>
                <label className="size-32 bold">Kapcsolat</label>
                <label className="size-20 bold">Solti Eszter</label>
                <label className="size-20 bold">omisktabor@gmail.com</label>
                <label className="size-20 bold">06-30-237-9233</label>
              </div>
            </div>
          </div>
          <div className={`${style["camp-row"]} ${style["programs"]}`}>
            <img
              className={style["camp-row-image"]}
              src={
                require(`../assets/img/programs/camp/camp04cover.jpg`).default
              }
              alt=""
            />
            <label className="size-32 bold">Programjaink</label>
            <div className={style["button-box"]}>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Művészi torna
              </button>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Mozdulatművészet
              </button>
            </div>
            <div className={style["button-box"]}>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Kéziszeres gimnasztika
              </button>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Modern tánc
              </button>
            </div>
            <div className={style["button-box"]}>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Koreográfia
              </button>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Kézműves
              </button>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Szabad tánc
              </button>
            </div>
            <Link to="/programs/summer_camp/programs">
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Részletesen a programokról
              </button>
            </Link>
          </div>
          <div className={`${style["camp-row"]} ${style["teachers"]}`}>
            <label className="size-32 bold">Tanáraink</label>
            <img
              className={style["camp-row-image"]}
              src={
                require(`../assets/img/programs/camp/campmobileteachers.jpg`)
                  .default
              }
              alt=""
            />
            <div className={style["teachers-box"]}>
              <div className={style["button-box"]}>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Solti Eszter
                </button>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  B. Taylor Jennifer
                </button>
              </div>
              <div className={style["button-box"]}>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Benis Katalin
                </button>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Dávid Luca
                </button>
              </div>
              <div className={style["button-box"]}>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Csöngei Barbara
                </button>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Kovács Bea
                </button>
              </div>
              <div className={style["button-box"]}>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Markolt-Rózsa Réka
                </button>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Taylor Esther
                </button>
              </div>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <div className={style["day-goes-by-box"]}>
              <label className="size-32 bold">Hogyan telik egy nap</label>
              <label className="size-20">
                Már reggel 8 órától várjuk a táborozókat, a programok pedig 9
                órakor kezdődnek.
                <span className="bold">
                  Közös reggel tornával és csapatépítő játékkal
                </span>{" "}
                indul a nap, ahol a felkészülünk a táncórákra és jobban
                megismerkedünk.
              </label>
              <Link to="/programs/summer_camp/programs">
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
          </div>
          <div className={style["camp-row"]}>
            <div className={style["daycare-box"]}>
              <label className="size-36 bold">Jelentkezés</label>
              <label className="size-20">
                A napközis táborokba az alábbi linken található{" "}
                <strong>jelentkezési lap online kitöltésével lehet:</strong>
              </label>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/1hX3Hs2Ww_TuT49uu2H77qUaaZOTSO7h2OK1Ld8VWQUc/viewform?edit_requested=true"
                className={`${style["apply-link"]} size-20 bold`}
              >
                Jelentkezési lap
              </a>
              <Link to="/programs/summer_camp/application">
                <button className={`${style["btn"]} ${style["primary"]}`}>
                  Jelentkezem
                </button>
              </Link>
              <label className="size-20">
                A részvételi díjat természetesen visszatérítjük, ha a
                korlátozások miatt a táborokat nem tudjuk megtartani
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
