import React from "react";

import { ReactComponent as LogoWithTitle } from "../assets/img/icons/logo_w_title.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

export default function Footer() {
  return (
    <div className="mobile-footer">
      <div className="content-block">
          <div className="content-header">
              <LogoWithTitle className="logo"/>
          </div>
          <label className="text size-24 extra-bold">Az omiskról</label>
          <label className="article size-12">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
          <label className="text size-24 extra-bold">Kapcsolat</label>
          <label className="article size-12">
              Felmerülő kérdésedre Mikusik Márta, iskola titkárunk válaszol<br/>
              hétköznap 10-14 óra között hívhatod.<br/><br/>
              Telefon: 06-1-2000-138<br/>
              Mobil: 06-20-9460-848<br/>
              E-mail: iroda@omisk.hu<br/>
              Posta: 1021. Budapest, Széher út 77.<br/>
          </label>
          <label className="text size-24 extra-bold">Kurzusaink</label>
          <label className="article size-12">
              Művészi torna<br/>
              Mozdulatművészet<br/>
              Modern tánc<br/>
              Jazz tánc<br/>
              Pre balett<br/>
              Klasszikus balett
          </label>
          <label className="text size-24 extra-bold">Helyszíneink</label>
          <label className="article size-12">
              Óbudai Kulturális Központ<br/>
              MOM Kulturális Központ<br/>
              Budapest Művelődési központ<br/>
              Vll. Kerületi Táncstúdió<br/>
              Békásmegyeri Közösségi Ház<br/>
              Virányosi Közösségi Ház<br/>
              Józsefvárosi Galéria és Rendezvényközpont<br/>
          </label>
          <div className="sm-icons">
              <a href="https://www.instagram.com/o_m_i_s_k/" target="_blank" rel="noopener noreferrer" className="icon">
                  <Instagram/>
              </a>
              <a href="https://www.facebook.com/omisk.hu/" target="_blank" rel="noopener noreferrer" className="icon">
                  <Facebook/>
              </a>
              <a href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA" target="_blank" rel="noopener noreferrer" className="icon">
                  <Youtube/>
              </a>
          </div>
      </div>
    </div>
  );
}
