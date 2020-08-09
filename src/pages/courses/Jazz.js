import React from "react";
import CoursesHeader from "./CoursesHeader";
import style from "../../assets/css/jazz.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const opt = {
    courseName: "Jazztánc",
    color: "green",
    img: "jazz"
  };
  return (
    <div>
      <CoursesHeader opt={opt} />
      <div className={style["info-box"]}>
        <div className={style["info"]}>
          <h4 className="size-16 extra-bold">Hasznos infók:</h4>
          <ul>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Korosztály:</p>
                </div>
                <div className={style["age-group-value"]}>
                  <p className="size-12 thin">6 éves kortól</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Tandíj:</p>
                </div>
                <div>
                  <p className="size-12 thin">Heti 2x60 perc: 11300,- /hó</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Kedvezmények:</p>
                </div>
                <div>
                  <p className="size-12 thin">
                    2 testvér esetén 2000,-Ft/fő/hó
                  </p>
                  <p className="size-12 thin">
                    3 testvér esetén 3000,- Ft/fő/hó
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={style["places"]}>
          <h4 className="size-16 extra-bold">Helyszineink</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                Óbudai Kulturális Központ (hétfő, csütörtök)
              </p>
            </li>
          </ul>
          <div className={`${style["teachers-wrapper"]}`}>
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/kalocsai_edit.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Neked ajánljuk, ha...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                ...egy könnyed, laza, látványos műfajt keresel.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...szereted a modern, pörgős zenéket.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...suli után jó társaságban, tánccal szeretnéd leadni a
                felgyülemlett stresszt.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...szeretnéd jobban megismerni a tested határait.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mi a jazztánc?</h4>
            <p className="size-20 thin">
              A jazztánc az Amerikai Egyesült Államokból, New Orleansból
              származik, az afro-amerikaiak autentikus táncában gyökerezik. A
              jazz zenével együtt fejlődött, kiegészült a balett és a modern
              tánc elemeivel. Jellegzetessége az izolációs technika, ami az
              egyes testrészek egymástól független mozgatását jelenti. A
              mozgásközpontjai: fej-nyak, vállak, mellkas, medence, a kezek és a
              lábak. A mozgás lényege a “policentrikusság”, ez azt jelenti, hogy
              legalább kettő – a fentebb említett – mozgásközpont egymástól
              függetlenül mozog. Felszabadult, látványos táncstílus.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/jazz_tanc_01.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mikor tudom elkezdeni?</h4>
            <p className="size-20 thin">
              Iskolás kortól javasoljuk, mivel a szükséges koordinációs képesség
              csak ekkor alakul ki. A művészi torna ehhez a stílushoz is kiváló
              alapot ad, de a jelentkezéshez az is elég, ha valamilyen műfajban
              táncoltál vagy sportoltál már. Aki hobbiból űzi ezt a tánc
              stílust, az a ritmikus gimnasztika és a táncsport nagyszerű
              elegyére lel benne. Népszerűsége annak is köszönhető, hogy
              teljesen nyitott minden mozgás beépítésére, ami stílusában
              megfelelő.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/jazz_tanc_02.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan épül fel az óra?</h4>
            <p className="size-20 thin">
              Az órák első felében tréningezünk mai, divatos zenére. Egymást
              követik az izolációs, erősítő és koordinációt fejlesztő
              gyakorlatok. Kezdőknél a tréning még csak izolációs majd
              koordinációs gyakorlatokat tartalmaz. Haladóknál a modern balett
              elemei is bekerülnek a tananyagba. Majdnem minden típusú mozgás
              engedélyezett. Hosszú, nyújtott testvonalat, diagonális
              feszességet és hosszú egyensúlyi helyzeteket használ, és a
              felsőtestet teszi mindannak köz éppontjává, ami a testtel
              történik. Az óra második része a már megtanult technikai elemeket
              tartalmazó koreográfiák tanulásával telik.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/jazz_tanc_03.jpg`)} alt="" />
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
