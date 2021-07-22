import React from "react";
import style from "../assets/css/beiratkozas.module.css";

function SiteContainer({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">{children}</div>
      </div>
    </div>
  );
}

export default function Beiratkozas() {
  return (
    <div>
      <div className={style[`header-wrapper`]}>
        <div className={style[`title-wrapper`]}>
          <h1>Beiratkozas 2021/22</h1>
        </div>
      </div>
      <SiteContainer>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h3>
              1990-be alapított tánc és mozgásművészeti iskolánkban 3 budapesti
              kerületben 7 helyszínen várjuk növendékeinket és az új
              jelentkezőket a 2021/22-es tanévben is.
            </h3>
            <button className={style[`enrollment-button`]}>
              Beiratkozási időpontok és helyszinek
            </button>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className={`row ${style[`content-wrapper`]}`}>
          <div className="col-lg-6">
            <div className={`${style[`image-wrapper`]}`}>
              <div className={`${style[`image-placeholder`]}`}></div>
              <img
                class="img-fluid"
                src={"https://source.unsplash.com/Hx_LcI9gYjk/733x568"}
                alt=""
              ></img>
            </div>
          </div>
          <div className={`col-lg-5 ${style[`details-tile`]}`}>
            <div className={`${style[`details-wrapper`]}`}>
              <h2>4 évestől felnött korodig</h2>
              <p>
                lehetsz csapatunk tagja és választhatsz az életkorodnak
                megfelelő különböző kurzusok közül. Rendszeresen tartunk
                bemutatókat, gálaműsorokat és járhatsz olyan csoportba is,
                amelyek táncversenyeken is megmérettetik magukat.
                Programjainkról itt olvashatsz részletesebben:{" "}
              </p>
              <button className={style[`green-button`]}>Programjaink</button>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div
          className={`row ${style[`content-wrapper`]} ${
            style[`content-wrapper-margin-top`]
          }`}
        >
          <div className="col-lg-1"></div>
          <div className={`col-lg-5 ${style[`details-tile`]}`}>
            <div className={`${style[`details-wrapper`]}`}>
              <h2>4 évestől felnött korodig</h2>
              <p>
                lehetsz csapatunk tagja és választhatsz az életkorodnak
                megfelelő különböző kurzusok közül. Rendszeresen tartunk
                bemutatókat, gálaműsorokat és járhatsz olyan csoportba is,
                amelyek táncversenyeken is megmérettetik magukat.
                Programjainkról itt olvashatsz részletesebben:{" "}
              </p>
              <button className={style[`green-button`]}>Programjaink</button>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className={`${style[`image-wrapper`]}`}>
              <div className={`${style[`image-placeholder-inverse`]}`}></div>
              <img
                class="img-fluid"
                src={"https://source.unsplash.com/Hx_LcI9gYjk/733x568"}
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className={`row ${style[`enrollment-details-wrapper`]}`}>
          <div className="col-lg-3"></div>
          <div className={`col-lg-6 ${style[`enrollment-details`]}`}>
            <h1 className={`${style[`enrollment-title`]}`}>A beiratkozáson</h1>
            <p>
              az új jelentkezők megismerkedhetnek leendő tanáraikkal és
              megbeszéljük, hogy milyen időbeosztás és melyik csoport volna a
              leginkább megfelelő.
            </p>
            <p>
              A pontos órarendet a beiratkozásokat követően állítjuk össze. A
              kurzusok helyszinek szerinti várható időpontjait és árainkat az
              alábbi gombra kattintva találod meg.
            </p>
            <button
              className={`${style[`enrollment-button`]} ${
                style[`enrollment-button-gray`]
              }`}
            >
              Kurzusaink
              <span
                className={`${style[`arrow`]}
              }`}
              >
                &#8594;
              </span>
            </button>
          </div>
          <div className="col-lg-3"></div>
        </div>
        <div className={`row ${style[`enrollment-dates-wrapper`]}`}>
          <div className="col-lg-3"></div>
          <div className={`col-lg-6 ${style[`enrollment-dates-details`]}`}>
            <h3>2021/2022-es Tanév beiratkozási időpontok</h3>
            <div className={`${style[`enrollment-dates-details-wrapper`]}`}>
              <p>Óbudai Kulturális Központ, III. San Marco u.81.</p>
              <ul>
                <li>Növendékeinknek: Augusztus 25, (szerda) 16.00-19.00</li>
                <li>Új jelentkezők: Szeptember 1, (szerda) 16.00-19.00</li>
              </ul>
              <p>Békásmegyeri Közösségi Ház, III. Csobánka tér 5.</p>
              <ul>
                <li>Növendékeinknek: Augusztus 26, (csütörtök) 16.00-19.00</li>
                <li>Új jelentkezők: Szeptember 2, (csütörtök) 16.00-19.00</li>
              </ul>
              <p>20-22 - Fitness, XII. Szarvas Gábor út 20-22</p>
              <ul>
                <li>Növendékeinknek: Augusztus 30, (hétfő) 16.00-19.00</li>
                <li>Új jelentkezők: Szeptember 3, (péntek) 16.00-19.00</li>
              </ul>
              <p>MOM Kulturális Központ, XII.  Csörsz u. 18.</p>
              <ul>
                <li>Növendékeinknek: Augusztus 31, (kedd) 16.00-19.00</li>
                <li>Új jelentkezők: Szeptember 6, (hétfő) 16.00-19.00</li>
              </ul>
              <p>VII. ker. Táncstúdió, VII. Wesselényi u. 41.</p>
              <ul>
                <li>
                  Növendékeinknek és Új jelentkezők: Szeptember 7, (kedd)
                  17.00-19.00
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </SiteContainer>
    </div>
  );
}
