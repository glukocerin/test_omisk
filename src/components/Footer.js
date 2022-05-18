import React from "react";
import { Link } from 'react-router-dom'
import style from "../assets/css/footer.module.css";
import "../assets/css/footer.icons.css";

import { ReactComponent as LogoWithTitle } from "../assets/img/icons/logo_w_title.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

export default function Footer() {
  return (
    <div className={style["wrapper"]}>
      <div className={style["icons-wrapper"]}>
        <div className={style["details-box"]}></div>
        <div className={style["details-box"]}>
          <LogoWithTitle className="footer-logo" />
        </div>
        <div className={style["details-box"]}>
          <div className={style["social-media"]}>
            <a
              className="footer-icon"
              href="https://www.instagram.com/o_m_i_s_k/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              className="footer-icon"
              href="https://www.facebook.com/omisk.hu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              className="footer-icon"
              href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube />
            </a>
          </div>
        </div>
        <div className={style["details-box"]}></div>
      </div>
      <div className={style["details-wrapper"]}>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Kapcsolat</h5>
          <p className={`size-15 thin`}>
            06-1-2000-138 <br />
            06-20-9460-848 <br />
            iroda@omisk.hu<br />
            Óbuda Mozgásművészeti Iskola<br/>
            1021 Budapest, Széher út 77.<br/><br/>
            <Link to="/contact/#gyik">Gyakran ismételt kérdések</Link><br/>
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5
            className={`size-20 extra-bold`}
            onClick={() => {
              egg();
            }}
          >
            Kurzusaink
          </h5>
          <p className={`size-15 thin`}>
            Művészi torna, 4 éves kortól<br/>
            Mozdulatművészet, 10 éves kortól<br/>
            Modern tánc, 8 éves kortól<br/>
            Jazztánc, 6 éves kortól<br/>
            Klasszikus balett, 6 éves kortól<br/>
            Pre ballet / EN, 4-6 eves korosztálynak<br/>
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5
            className={`size-20 extra-bold`}
            onClick={() => {
              egg2();
            }}
          >
            Helyszineink
          </h5>
          <p className={`size-15 thin`}>
            Óbudai Kulturális Központ<br/>
            Békásmegyeri Közösségi Ház<br/>
            MOM Kulturális Központ<br/>
            Virányosi Közösségi Ház<br/>
            Szarvas Gábor Közösségi Tér<br/>
            Józsefvárosi Galéria és Rendezvényközpont<br/>
            VII. ker. Táncstúdió<br/><br/>
            <Link to="/enrollment/#map">Térkép</Link>
          </p>
        </div>
        <div className={style["details-box"]}>

        </div>
      </div>
      <div className={style["details-wrapper"]}>
        {/* <div>
          <div className={style["sepa"]}></div>
          <p className={`size-15 thin`}>
              Design: Pers-Kovács Nóra<br/>
              Fejlesztés: Csordás Attila, Tóth-Angyal János
          </p>
        </div> */}
      </div>
    </div>
  );
}

let k = 0;

function egg() {
  k++;

  if (k === 1) {
    console.warn("K");
  } else if (k === 2) {
    console.warn("I");
  } else if (k === 3) {
    console.warn("S");
  } else if (k === 4) {
    console.warn("F");
  } else if (k === 5) {
    console.warn("A");
  } else if (k === 6) {
    console.warn("S");
  } else if (k === 7) {
    console.warn("Z");
  } else if (k === 8) {
    console.warn("O");
  } else if (k === 9) {
    console.warn("M");
  }
}

let y = 0;

function egg2() {
  y++;

  if (y === 9) {
    console.log(
      "check this hot milf ;) ( ͡❛ ‿ ͡❛) <3 <3 http://bitly.com/98K8eH"
    );
  }
}
