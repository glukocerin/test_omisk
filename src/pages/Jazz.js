import React from "react";

import style from "../assets/css/jazz.module.css";
import styleCard from "../assets/css/courseDetailsCard.module.css";

export default function Courses(props) {
  return (
    <div>
      <div className={style["header-mobile"]}></div>
      <div className={style["header"]}>
        <div>
          <h1 className={`${style["header-text"]} size-90 extra-bold`}>
            Jazz tánc kurzus
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
                  <p className="size-12 extra-bold">Korosztaly</p>
                </div>
                <div className={style["age-group-value"]}>
                  <p className="size-12 thin">4 - 10éves kortól</p>
                  <p className="size-12 thin">korcsopotonként</p>
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
                    Heti 2 x 60 perc 10700-11000 Ft / hó
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
                  <p className="size-12 thin">
                    Heti 2 x 45 perc 9700-10000 Ft / hó
                  </p>
                  <p className="size-12 thin">
                    Heti 2 x 60 perc 10700-11000 Ft / hó
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
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
            <li>
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
            <li>
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
            <li>
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
            <li>
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
            <li>
              <p className="size-12 thin">Óbudai Kulturális</p>
            </li>
          </ul>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">Kiknek ajánljuk?</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem
                ipsum dolor sit
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem
                ipsum dolor sit
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem
                ipsum dolor sit
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, Lorem
                ipsum dolor sit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        {/* <div className={style["card-wrapper"]}>
          <div className={style["text"]}>
            <h4 className="size-16 extra-bold">Kiknek ajanljuk</h4>
            <ul>
              <li>
                <p className="size-14 thin">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
              </li>
              <li>
                <p className="size-14 thin">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
              </li>
              <li>
                <p className="size-14 thin">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
              </li>
              <li>
                <p className="size-14 thin">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                </p>
              </li>
            </ul>
          </div>
          <div className={style["pic"]}>
            <img src={require(`../assets/img/eurhythmics_1.png`)} alt="" />
          </div>
        </div> */}
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Kiknek ajanljuk</h4>
            <p className="size-20 thin">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../assets/img/jazz_tánc_01.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Kiknek ajanljuk</h4>
            <p className="size-20 thin">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../assets/img/jazz_tánc_02.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">Kiknek ajanljuk</h4>
            <p className="size-20 thin">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../assets/img/jazz_tánc_03.jpg`)} alt="" />
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
