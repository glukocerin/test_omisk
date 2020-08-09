import React from "react";

import CoursesHeader from "./CoursesHeader";
import style from "../../assets/css/eurhythmics.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const opt = {
    courseName: "Pre balett",
    color: "blue",
    img: "muveszetitorna"
  };
  return (
    <div>
      <CoursesHeader opt={opt} />
      <div className={style["info-box"]}>
        <div className={style["info"]}>
          <h4 className="size-16 extra-bold">Hasznos info</h4>
          <ul>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Korosztaly</p>
                </div>
                <div className={style["age-group-value"]}>
                  <p className="size-12 thin">4 éves kortól</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Tandij</p>
                </div>
                <div>
                  <p className="size-12 thin">
                    Heti 2 x 45 perc 9700-10000 Ft / hó
                  </p>
                  <p className="size-12 thin">
                    Heti 2 x 60 perc 11000-11300 Ft / hó
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Kedvezmeny</p>
                </div>
                <div>
                  <p className="size-12 thin">2 testvér esetén 2000,-/fő/hó</p>
                  <p className="size-12 thin">3 testvér esetén 3000,-/fő/hó</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={style["places"]}>
          <h4 className="size-16 extra-bold">Helyszinek, Tanárok</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                Óbudai Kulturális Központ (hétfő,kedd-szerda-péntek)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Békásmegyeri Közösségi Ház (kedd,csütörtök,péntek)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                {" "}
                MOM Kulturális Központ (hétfő,kedd,csütörtök)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Virányosi Közösségi Ház (hétfő,szerda, kedd,csütörtök)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Szarvas Gábor Közösségi Tér (hétfő, kedd, szerda , csütörtök)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Budapest Művelődési Központ (hétfő-szerda)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Józsefvárosi Galéria és Rendezvényközpont (hétfő-szerda)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                VII. ker. Táncstúdió (hétfő,szerda,péntek)
              </p>
            </li>
          </ul>
          <div className={`${style["teachers-wrapper"]}`}>
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/benis_katalin.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/taylor_jennifer.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/kovacs_bea.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/mady_krisztina.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/empty.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/pers_julia.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/lakatos_lilla.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/rozsa_reka.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/solti_eszter.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/taylor_eszti.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Neked ajánljuk, ha...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                …szeretnél szép testtartást, és ügyesebben mozogni.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                …olyan mozgást keresel, ami akkor is hasznodra válik, ha végül
                nem a táncnál, hanem az úszásnál kötsz ki.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                …óvodásként kiváncsi vagy, milyen lesz majd az iskolában egy 45
                perces tanóra.
              </p>
            </li>
            <li>
              <p className="size-12 thin">…szeretnél új barátokat szerezni.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
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
              src={require(`../../assets/img/muveszi_torna_01.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
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
              src={require(`../../assets/img/muveszi_torna_02.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
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
              src={require(`../../assets/img/muveszi_torna_03.jpg`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Évközben is tudsz jelentkezni
        </h4>
        <button className={style["footer-button"]}>Jelentkezem</button>
      </div>
    </div>
  );
}
