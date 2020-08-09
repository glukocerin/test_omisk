import React from "react";
import CoursesHeader from "./CoursesHeader";
import style from "../../assets/css/modern.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const opt = {
    courseName: "Modern tánc",
    color: "green",
    img: "modern"
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
                  <p className="size-12 thin">8 éves kortól</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Tandíj:</p>
                </div>
                <div>
                  <p className="size-12 thin">
                    Heti 2x60 perc: 11000-11300,- /hó
                  </p>
                  <p className="size-12 thin">Heti 3x60 perc: 15500,-/hó</p>
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
          <h4 className="size-16 extra-bold">Helyszínek:</h4>
          <ul>
            <li>
              <p className="size-12 thin">Óbudai Kulturális Központ (hétfő)</p>
            </li>
            <li>
              <p className="size-12 thin">
                Békásmegyeri Közösségi Ház (kedd, csütörtök)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                {" "}
                MOM Kulturális Központ (hétfő, péntek)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                VII. ker. Táncstúdió (VII. Wesselényi u. 41)
                (hétfő,szerda,péntek)
              </p>
            </li>
          </ul>
          <div className={`${style["teachers-wrapper"]}`}>
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/csongei_barbi.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/solti_eszter.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Neked ajánljuk, ha...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                ...elmúltál 10 éves, szereted a kihívásokat.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...van táncos előképzettséged, vagy eddig valahol huzamosabb
                ideig sportoltál.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...készen állsz a kemény munkára, amiért látványos fejlődésben
                lesz részed.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...olyan tudást szeretnél, amivel más tánckurzusokon is bátran
                az első sorban állhatsz.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mi a modern tánc?</h4>
            <p className="size-20 thin">
              Ellenerők keresése, dinamikai váltások, feszítettség és elengedés
              összhangja. – Ezáltal válik a modern tánc izgalmas és szemet
              gyönyörködtető műfajjá a színpadon, ezekre kell ráérezni
              tanítványainknak az órák során. Bár a klasszikus balett alapjaira
              épül, annak szabály rendszerével szembe megy: a természetes
              mozgáson alapul, használja a gravitációt, a mozdulatokat belülről
              indítja. Nem elsősorban a forma, hanem a mozdulat fizikai valósága
              által válik kifejezővé. A régebbi jazztánchoz képest a
              folyamatosságon, folyékonyságon, puhaságon van a hangsúly.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/modern_tánc_01.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mikor tudom elkezdeni?</h4>
            <p className="size-20 thin">
              A modern tánc elsajátítása magasabb szintű tudatosságot igényel,
              amelyre 10 éves koruk környékén érnek meg a gyerekek. Azoknak,
              akik még nem érték el ezt az életkort, de már alig várják, hogy el
              tudják kezdeni az órákat, 8 éves kortól előkészítő csoportot
              indítunk. Ez nem előfeltétele a későbbi jelentkezésnek, hiszen
              nagyon jó előképzettséget jelent a művész torna, a klasszikus
              balett, de nem kizáró tényező az sem, ha valamilyen sportról
              váltanál.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/modern_tánc_02.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan épül fel az óra?</h4>
            <p className="size-20 thin">
              Az óra alapos bemelegítéssel indul, majd ezt követi a tréning,
              melynek fő célja a formanyelv technikai elemeinek elsajátítása.
              Ennek a mozgásnak lényege a testközpontból és a törzsből
              elnyújtott hosszú mozdulatok és dinamikai váltások alkalmazása.
              Ennek elsajátítása elmélyült és kitartó gyakorlást igényel, hosszú
              távon növeli a testtudatot és önfegyelemre tanít. A tréning
              tetőtől talpig átmozgatja és formálja a testet. Az óra második
              felében a koreográfia gyakorlása következik, amely a tréning során
              megtanult kombinációkból épül fel.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/modern_tánc_03.jpg`)} alt="" />
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
