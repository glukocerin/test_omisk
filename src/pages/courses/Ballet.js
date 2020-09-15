import React from "react";

import CoursesHeader from "./CoursesHeader";
import style from "../../assets/css/ballet.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const opt = {
    courseName: "Klasszikus balett",
    color: "pink",
    img: "balett"
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
                  <p className="size-12 thin"> 6 éves kortól</p>
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
          <h4 className="size-16 extra-bold">Helyszíneink:</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                Óbudai Kulturális Központ (hétfő, csütörtök)
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Békásmegyeri Közösségi Ház (hétfő, csütörtök)
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
              src={require(`../../assets/img/teachers/kalocsai_edit.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/empty.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Neked ajánljuk, ha...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                ...kecses, finom, légies mozgásformát keresel.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...nem ijedsz meg a kemény munkától.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...kitartó, szorgalmas és elszánt vagy.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...mindig is tudni akartad, milyen egy igazi balett óra.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mi a klasszikus balett:</h4>
            <p className="size-20 thin">
              A klasszikus balett a tánc akadémikus formanyelve. A táncművészeti
              ágazatok közül a leginkább kidolgozott, évszázadok folyamán
              kikristályosodott rendszer. Elemei a legtöbb tánc stílusban
              felbukkannak, ezért a balett tanulása nagy segítséget jelent
              bármilyen más műfaj elsajátításához is. A mozdulatok helyes
              elvégzését szigorú szabályrendszer írja le, amit megtanulni csak
              kitartó gyakorlással lehet.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/klasszikus_balett_01.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mikor tudom elkezdeni?</h4>
            <p className="size-20 thin">
              Iskolás kortól ajánljuk. A balettgyakorlatok nagy önfegyelmet és
              koncentrációt igényelnek, fizikai terhelhetőséget kívánnak. A
              művészi torna jó előkészítés óvodás korban, mert a gimnasztika
              különböző tehermentesített helyzetekben készíti elő a később
              állásban elvégzendő feladatokat. Iskolás kortól előképzettség
              nélkül is lehet jelentkezni.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/klasszikus_balett_02.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan épül fel az óra?</h4>
            <p className="size-20 thin">
              A balett metodikáját Vaganova, orosz balettmester írta le, a
              tréning során az ő rendszerét követjük. Óráinkon klasszikus
              kísérőzenét használunk. A rövid bemelegítést követően először
              rúd-, majd középgyakorlatok következnek, a második évtől kezdve
              már elmozdulunk a térben, ugrásokat és forgásokat is tanulunk. A
              tréning során fejlődik a koordinációs készség és javul a
              testtartás. A gyakorlatok precíz elvégzése önfegyelemre tanít. Az
              órák befejező részében kerül sor a rövid koreográfiák
              gyakorlására.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../../assets/img/klasszikus_balett_03.jpg`)}
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
