import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoWithTitle } from "../assets/img/icons/logo_w_title.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

export default function Footer() {
  return (
    <div className="mobile-footer">
      <div className="content-block">
        <div className="content-header">
          <LogoWithTitle className="logo" />
        </div>
        <label className="text size-20 extra-bold">Kapcsolat</label>
        <label className="article size-15">
          06-1-2000-138
          <br />
          06-20-9460-848
          <br />
          iroda@omisk.hu
          <br />
          Óbuda Mozgásművészeti Iskola
          <br />
          1021 Budapest, Széher út 77.
          <br />
          <br />
          <Link to="/contact/#gyik">Gyakran ismételt kérdések</Link>
          <br />
        </label>
        <label className="text size-20 extra-bold">Kurzusaink</label>
        <label className="article size-15">
          Művészi torna, 4 éves kortól
          <br />
          Mozdulatművészet, 10 éves kortól
          <br />
          Modern tánc, 8 éves kortól
          <br />
          Jazztánc, 6 éves kortól
          <br />
          Klasszikus balett, 6 éves kortól
          <br />
          Pre ballet / EN, 4-6 eves korosztálynak
          <br />
        </label>
        <label className="text size-20 extra-bold">Helyszíneink</label>
        <label className="article size-15">
          Óbudai Kulturális Központ
          <br />
          Békásmegyeri Közösségi Ház
          <br />
          MOM Kulturális Központ
          <br />
          VII. ker. Táncstúdió
          <br />
          <br />
          <Link to="/enrollment/#map">Térkép</Link>
        </label>
        <div className="sm-icons">
          <a
            href="https://www.instagram.com/o_m_i_s_k/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/omisk.hu/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <Youtube />
          </a>
        </div>
        {/* <div className="sepa"></div>
            <label className="article size-15">
                Design: Pers-Kovács Nóra<br/>
                Fejlesztés: Csordás Attila, Tóth-Angyal János
            </label> */}
      </div>
    </div>
  );
}
