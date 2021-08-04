import React from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";
import pagesConfig from "../assets/pagesConfig";

const { teachers } = pagesConfig;

export default function CampPageMobile({ props }) {
  var backgroundImage =
    require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`).default;

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
              <label className="size-32 extra-bold">
                {props.opt.content.first_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.first_block.place,
                }}
              ></label>
              <label className="size-32 extra-bold">
                {props.opt.content.second_block.title}
              </label>
              <label
                className="size-24"
                dangerouslySetInnerHTML={{
                  __html: props.opt.content.second_block.place,
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
                <span className="extra-bold">Részvételi díj: 42 000Ft</span>
                <br />
                <span>Iskolánk növendékeinek</span>
                <br />
                <span>
                  kedvezményesen: <strong>39.000 Ft</strong>
                </span>
                <br></br>
                <span>testvérkedvezmény: 3000 Ft/fő</span>
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
                <label className="size-32 extra-bold">Jelentkezz most!</label>
                <label className="size-20 extra-bold">4 féle táncstílus</label>
                <label className="size-20 extra-bold">
                  Tánc és gimnasztika
                </label>
                <label className="size-20 extra-bold">
                  Tánctermi és szabadtéri programok
                </label>
                <label className="size-20 extra-bold">Táborzáró előadás</label>
              </div>
              <div className={style["block"]}>
                <label className="size-32 extra-bold">Kapcsolat</label>
                <label className="size-20 extra-bold">Solti Eszter</label>
                <label className="size-20 extra-bold">
                  omisktabor@gmail.com
                </label>
                <label className="size-20 extra-bold">06-30-237-9233</label>
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
            <label className="size-32 extra-bold">Programjaink</label>
            <div className={style["button-box"]}>
              <Link to="/programs/summer_camp/programs/#muveszi-torna">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Művészi torna
                </button>
              </Link>
              <Link to="/programs/summer_camp/programs/#mozdulatmuveszet">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Mozdulatművészet
                </button>
              </Link>
            </div>
            <div className={style["button-box"]}>
              <Link to="/programs/summer_camp/programs/#keziszeresgimnasztika">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Kéziszeres gimnasztika
                </button>
              </Link>
              <Link to="/programs/summer_camp/programs/#moderntanc">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Modern tánc
                </button>
              </Link>
            </div>
            <div className={style["button-box"]}>
              <Link to="/programs/summer_camp/programs/#koreografia">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Koreográfia
                </button>
              </Link>
              <Link to="/programs/summer_camp/programs/#kezmuves">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Kézműves
                </button>
              </Link>
              <Link to="/programs/summer_camp/programs/#szabadtanc">
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Szabad tánc
                </button>
              </Link>
            </div>
            <Link to="/programs/summer_camp/programs" className={style["link"]}>
              <button className={`${style["btn"]} ${style["secondary"]}`}>
                Részletesen a programokról
              </button>
            </Link>
          </div>
          <div className={`${style["camp-row"]} ${style["teachers"]}`}>
            <label className="size-32 extra-bold">Tanáraink</label>
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
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[6],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Solti Eszter
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[8],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    B. Taylor Jennifer
                  </button>
                </Link>
              </div>

              <div className={style["button-box"]}>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[1],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Benis Katalin
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[11],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Dávid Luca
                  </button>
                </Link>
              </div>
              <div className={style["button-box"]}>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[5],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Csöngei Barbara
                  </button>
                </Link>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[4],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Kovács Bea
                  </button>
                </Link>
              </div>
              <div className={style["button-box"]}>
                <button className={`${style["btn"]} ${style["secondary"]}`}>
                  Markolt-Rózsa Réka
                </button>
                <Link
                  to={{
                    pathname: "/teacher",
                    state: teachers.cards[9],
                  }}
                >
                  <button className={`${style["btn"]} ${style["secondary"]}`}>
                    Taylor Esther
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <div className={style["day-goes-by-box"]}>
              <label className="size-32 extra-bold">Hogyan telik egy nap</label>
              <label className="size-20">
                Már reggel 8 órától várjuk a táborozókat, a programok pedig 9
                órakor kezdődnek.
                <span className="extra-bold">
                  Közös reggel tornával és csapatépítő játékkal
                </span>{" "}
                indul a nap, ahol a felkészülünk a táncórákra és jobban
                megismerkedünk.
              </label>
              <Link to="/programs/summer_camp/day">
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
              <label className="size-36 extra-bold">Jelentkezés</label>
              <label className="size-20">
                A napközis táborokba az alábbi linken található{" "}
                <strong>jelentkezési lap online kitöltésével lehet:</strong>
              </label>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/1hX3Hs2Ww_TuT49uu2H77qUaaZOTSO7h2OK1Ld8VWQUc/viewform?edit_requested=true"
                className={`${style["apply-link"]} size-20 extra-bold`}
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
          <div className={style["camp-row"]}>
            <div className={style["faq-box"]}>
              <label className="size-36 extra-bold">Gyakori kérdések</label>
              <label className="size-20 extra-bold">
                A barátnőjével, testvérével egy csoportba kerülhet gyerekem?
              </label>
              <label className="size-20">
                Természetesen az ilyen jellegű kéréseket teljesítjük.
                Testvéreknél is, ha nem túl nagy a korkülönbség, akkor
                természetesen megoldható - ha így szeretnék.
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
