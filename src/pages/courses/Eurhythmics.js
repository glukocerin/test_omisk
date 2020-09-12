import React, { useState } from "react";

import CoursesHeader from "./CoursesHeader";
import style from "../../assets/css/eurhythmics.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const [activeTab, setActiveTab] = useState("info");

  const opt = {
    courseName: "Művészi torna",
    color: "blue",
    img: "muveszetitorna"
  };
  const onTabHeaderClickHandler = activeTab => {
    setActiveTab(activeTab);
  };
  return (
    <div>
      <CoursesHeader opt={opt} />
      <div className={style["info-box"]}>
        <div className={`${style["info-box-header"]}`}>
          <h3
            onClick={e => onTabHeaderClickHandler("info")}
            className={` ${
              activeTab === "info" ? style["active-header-tab"] : ""
            }  size-36 extra-bold`}
          >
            Hasznos infók
          </h3>
          <h3
            onClick={e => onTabHeaderClickHandler("location")}
            className={` ${
              activeTab === "location" ? style["active-header-tab"] : ""
            }  size-36 extra-bold`}
          >
            Helyszíneink
          </h3>
        </div>
        <div
          className={` ${activeTab !== "info" ? style["inactive-tab"] : ""} ${
            style["info"]
          }`}
        >
          <div className={style["info-item"]}>
            <div className={style["column-first"]}>
              <p className="size-20 extra-bold">Tandíj</p>
            </div>
            <div className={style["column-second"]}>
              <p className="size-20 thin">Heti 2 x 45 perc</p>
              <p className="size-20 thin">Heti 2 x 60 perc</p>
            </div>
            <div className={style["column-third"]}>
              <p className="size-20 thin">9700-10000 Ft / hó</p>
              <p className="size-20 thin">10700-11000 Ft / hó</p>
            </div>
          </div>
          <div className={style["info-item"]}>
            <div className={style["column-first"]}>
              <p className="size-20 extra-bold">Kedvezmény</p>
            </div>
            <div className={style["column-second"]}>
              <p className="size-20 thin">2 testvér esetén</p>
              <p className="size-20 thin">3 testvér esetén</p>
            </div>
            <div className={style["column-third"]}>
              <p className="size-20 thin">2000.- /hó/fő</p>
              <p className="size-20 thin">3000.- /hó/fő</p>
            </div>
          </div>
          <div className={style["info-item"]}>
            <div className={style["column-first"]}>
              <p className="size-20 extra-bold">Korosztály</p>
            </div>
            <div className={style["column-second"]}>
              <p className="size-20 thin">4 - 10éves kortól</p>
              <p className="size-20 thin">korcsopotonként</p>
            </div>
            <div className={style["column-third"]}></div>
          </div>
        </div>
        <div
          className={` ${
            activeTab !== "location" ? style["inactive-tab"] : ""
          } ${style["places"]}`}
        >
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">Virányosi Közösségi Ház</p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                XII. ker. Szarvas Gábor út 8/c
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Szerda</p>
              <p className="size-20 thin">Kedd+Csütörtök</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">
                Óbudai Kulturális Központ
              </p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                III. San Marco út 81
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Szerda</p>
              <p className="size-20 thin">Kedd+Csütörtök</p>
              <p className="size-20 thin">Hétfő+Pentek</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">
                Budapest Művelődési Központ
              </p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                XI. Etele út 55/a
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Szerda</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">MOM Kulturális Központ </p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                XII. ker. Csörsz út 18
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Csütörtök</p>
              <p className="size-20 thin">Kedd+Csütörtök</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">
                Békásmegyeri Közösségi Ház
              </p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                III. Csobánka tér 5
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Kedd+Csütörtök</p>
              <p className="size-20 thin">Kedd+Péntek</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">
                Józsefvárosi Galéria és Rendezvény Központ
              </p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                VIII. József krt. 70
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Szerda</p>
            </div>
          </div>
          <div className={`${style["place-item-wrapper"]}`}>
            <div className={`${style["place-date"]}`}>
              <p className="extra-bold size-20 thin">VII. ker. Táncstúdió</p>
              <p className={`${style["address"]} extra-bold size-20 thin`}>
                VII. Wesselényi u. 41
              </p>
            </div>
            <div className={`${style["place-appointment"]}`}>
              <p className="size-20 thin">Hétfő+Szerda</p>
              <p className="size-20 thin">Péntek</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Kiknek ajánljuk?</h4>
            <p className="size-20 thin">
              Művészi torna tanfolyamunk alapja Berczik Sára esztétikus
              testképző és mozgásfejlesztő technikája. A módszer lényege a
              tudatos mozgásra nevelés, ami bármilyen későbbi mozgástanulást
              könnyebbé tesz. A legkisebbek számára is jól érthető és
              értelmezhető, így hosszabb távon is leköti a figyelmüket. A
              gyakorlatok összeállításának meghatározó szempontja az esztétikus
              rendezettség. A koreográfiákhoz használt klasszikus zene
              fogékonnyá teszi a gyerekeket a társművészetekre. Nem kell hozzá
              speciális adottság, a helyesen végzett, szép mozdulatok
              mindenkinek sikerélményt adnak
            </p>
          </div>
          <img
            className={`${style["pic"]}`}
            src={require(`../../assets/img/muveszi_torna_01.jpg`)}
            alt=""
          />
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mi a művészi torna?</h4>
            <p className="size-20 thin">
              Művészi torna tanfolyamunk alapja Berczik Sára esztétikus
              testképző és mozgásfejlesztő technikája. A módszer lényege a
              tudatos mozgásra nevelés, ami bármilyen későbbi mozgástanulást
              könnyebbé tesz. A legkisebbek számára is jól érthető és
              értelmezhető, így hosszabb távon is leköti a figyelmüket. A
              gyakorlatok összeállításának meghatározó szempontja az esztétikus
              rendezettség. A koreográfiákhoz használt klasszikus zene
              fogékonnyá teszi a gyerekeket a társművészetekre. Nem kell hozzá
              speciális adottság, a helyesen végzett, szép mozdulatok
              mindenkinek sikerélményt adnak
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/muveszi_torna_02.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mikor tudom elkezdeni?</h4>
            <p className="size-20 thin">
              Iskolánk képzési rendszere 4 éves korban kezdődik művészi
              tornával. A tudatos mozgás elsajátítása – ami folyamatos
              gondolkodásra és koncentrációra késztet – leghamarabb ebben az
              életkorban lehetséges. Később is el lehet kezdeni, mindenkit az
              életkorának megfelelő csoportba kerül, ahol a tanárok segítenek
              bekapcsolódni a tanulásba. A művészi torna szerves folytatása a
              mozdulatművészet, amelyben már nagyobb hangsúlyt kap a tánc és a
              kreativitás . Iskolás kortól más műfajok is választhatók, amikhez
              a művészi torna ugyanúgy kiváló alapot ad.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/muveszi_torna_03.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan épül fel az óra?</h4>
            <p className="size-20 thin">
              A Berczik-módszer a mozgást alapelemeire bontja, különböző
              testrészeink mozdulatait egymástól függetlenítve tanítja, majd
              illeszti össze. Az órák koncentrikusan épülnek egymásra,
              ismételve, elmélyítve és bővítve a megtanult mozgásanyagot.
              Rendszeresen használunk kéziszereket (például labda, karika,
              szalag), amik nemcsak változatossá teszik az órát, de segítik a
              mozgástanulást és ügyessé tesznek. Az óvodásoknál kiemelt szerepe
              van a tartásjavító gyakorlatoknak, mivel erre az életkorra esik a
              testtartás beidegződése. Fontosnak tartjuk az igényes zene
              választást, mind a koreográfiák, mind a tréning kisérőjeként.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/muveszi_torna_04.jpg`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Szeretnél csatlakozni?
        </h4>
        <div className={style["footer-buttons-wrapper"]}>
          <button className={style["footer-button-details"]}>Érdeklődöm</button>
          <button className={style["footer-button-sign-up"]}>
            Jelentkezem
          </button>
        </div>
      </div>
    </div>
  );
}
