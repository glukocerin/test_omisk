import React from "react";

import style from "../assets/css/callisthenics.module.css";
import styleCard from "../assets/css/courseDetailsCard.module.css";

export default function Courses(props) {
  return (
    <div>
      <div className={style["header-mobile"]}></div>
      <div className={style["header"]}>
        <div>
          <h1 className={`${style["header-text"]} size-90 extra-bold`}>
            Mozdulatművészet kurzus
          </h1>
        </div>
        <div className={`${style["button-wrapper"]}`}>
          <button className={style["button"]}>Jelentkezem</button>
        </div>
      </div>
      <div className={style["info-box"]}>
        <div className={style["info"]}>
          <h4 className="size-16 extra-bold">Hasznos info</h4>
          <ul>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Korosztály: </p>
                </div>
                <div className={style["age-group-value"]}>
                  <p className="size-12 thin">10éves kortól</p>
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
                    Heti 2 x 60 perc: 11000-11300 Ft /hó
                  </p>
                  <p className="size-12 thin">
                    Heti 2 x 90 perc: 13100-14500 Ft /hó
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
                VII. ker. Táncstúdió (VII. Wesselényi u. 41)
                (hétfő,szerda,péntek)
              </p>
            </li>
          </ul>
          <div className={`${style["teachers-wrapper"]}`}>
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/benis_katalin.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/taylor_jennifer.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/kovacs_bea.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/mady_krisztina.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/empty.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/pers_julia.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/lakatos_lilla.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/rozsa_reka.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/solti_eszter.jpg`)}
              alt=""
            />
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../assets/img/teachers/taylor_eszti.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Neked ajánljuk, ha...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                ...a mozgást nem utánozni, hanem tanulni szeretnéd.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...nyitott vagy egy finom, harmonikus mozgásformára.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...szereted a klasszikus és kortárs zenét.
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...szeretsz másokkal közösen alkotni, szeretnél egy állandó
                közösség tagja lenni.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Mi a mozdulatművészet?</h4>
            <p className="size-20 thin">
              Az általunk tanított mozdulatművészet a gimnasztika precizitására
              épülő – de annál szabadabb –, a zenével szoros összhangban
              létrejövő táncstílus. Magában foglalja a klasszikus balett és a
              különböző modern technikák alapelemeit, megtartva azt az alapvető
              szellemiséget, amely a test természetes adottságaihoz illeszkedő
              esztétikus és kifejező mozgást keresi. A koreográfiát a zenével
              szoros összhangban készítjük el, így zene és tánc egymás hatását
              erősítik: még szebbnek látjuk a táncot és jobban megértjük a
              zenét.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../assets/img/mozdulatmuveszet_01.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan tudok csatlakozni?</h4>
            <p className="size-20 thin">
              Kurzusunk a művészi torna szerves folytatásának tekinthetők, így
              ebben a műfajban nincsenek teljesen kezdő tanfolyamaink. A
              kifejező mozgás egyre nagyobb hangsúlyt kap az ovisok és
              kisiskolások óráin, és 10 éves kor környékén már
              mozdulatművészetet tanul, aki korábban művészi tornára iratkozott
              be. Ennek ellenére menet közben is lehet csatlakozni. Előny, ha
              rendelkezel valamilyen táncos előképzettséggel, de ha nem, akkor
              is megpróbálhatod az életkorodnak megfelelő csoportban. Nem kell
              hozzá speciális adottság, a tanárok segítenek a felzárkózásban,
              nyugodtan csatlakozhatsz. Nem kell hozzá speciális adottság,
              tanáraink majd segítenek a felzárkózásban.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../assets/img/mozdulatmuveszet_02.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Hogyan épül fel az óra?</h4>
            <p className="size-20 thin">
              A legtöbb műfajhoz hasonlóan az óra tréningből és koreográfia
              tanulásból áll. A tréningezéssel elsajátítjuk a mozdulatművészet
              formanyelvét és megszerezzük azokat a készségelemeket, amik
              alkalmassá tesznek a koreográfiák előadásra. A mozdulatművészetre
              leginkább az jellemző, hogy kifejező mozdulatokból építkezik. A
              táncok elkészítése műhelymunka szerűen zajlik. Tanítványaink
              kreatívan vesznek részt az alkotómunka minden fázisában a
              koncepció kialakításától és a zenekiválasztásától a mozdulatok
              megalkotásán keresztül a produkció színpadra állításáig.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img
              src={require(`../assets/img/mozdulatmuveszet_03.jpg`)}
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
