import React from "react";

import style from "../assets/css/course.module.css";
import styleCard from "../assets/css/courseDetailsCard.module.css";

export default function Courses(props) {
  return (
    <div>
      <div className={style["wrapper"]}>
        <div className={style["title"]}>
          <h1>Muveszi torna</h1>
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
        <div className={styleCard["card-wrapper"]}>
          <div className={styleCard["text"]}>
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
          <div className={styleCard["pic"]}>
            <img src={require(`../assets/img/eurhythmics_1.png`)} alt="" />
          </div>
        </div>
        <div className={`${styleCard["card-wrapper"]} ${styleCard["reverse"]}`}>
          <div className={`${styleCard["text"]} ${styleCard["reverse"]}`}>
            <h4 className="size-16 extra-bold">Kiknek ajanljuk</h4>
            <p className="size-14 thin">
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
            <img src={require(`../assets/img/eurhythmics_1.png`)} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
