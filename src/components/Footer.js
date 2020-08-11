import React from "react";
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
        <LogoWithTitle className='footer-logo' />
        <div className={style["social-media"]}>
          <a className='footer-icon' href="https://www.instagram.com/o_m_i_s_k/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          <a className='footer-icon' href="https://www.facebook.com/omisk.hu/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a className='footer-icon' href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA" target="_blank" rel="noopener noreferrer"><Youtube/></a>
        </div>
      </div>
      <div className={style["details-wrapper"]}>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Az Omiskrol</h5>
          <p className={`size-15 thin`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Kapcsolat</h5>
          <p className={`size-15 thin`}>
            Felmerülő kérdésedre Mikusik Márta, iskola titkárunk válaszol
            hétköznap 10-14 óra között hívhatod.
          </p>
          <p className={`size-15 thin`}>
            Telefon: 06-1-2000-138 <br />
            Mobil: 06-20-9460-848 <br />
            E-mail: iroda@omisk.hu Posta: 1021. <br />
            Budapest, Széher út 77.
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`} onClick={()=>{egg()}}>Kurzusaink</h5>
          <p className={`size-15 thin`}>
            Művészi torna <br />
            Mozdulatművészet <br />
            Modern tánc <br />
            Jazz <br />
            tánc <br />
            Pre balett <br />
            Klasszikus balett
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Helyszineink</h5>
          <p className={`size-15 thin`}>
            Óbudai Kulturális Központ <br />
            MOM Kulturális Központ
            <br />
            Budapest Művelődési központ <br />
            Vll. Kerületi Táncstúdió <br />
            Békásmegyeri Közösségi Ház <br />
            Virányosi Közösségi Ház Józsefvárosi Galéria és Rendezvényközpont
          </p>
        </div>
      </div>
    </div>
  );
}

let k = 0;

function egg() {
  k++;

  if (k === 1) {
    console.warn('K');
  } else if (k === 2) {
    console.warn('I');
  } else if (k === 3) {
    console.warn('S');
  } else if (k === 4) {
    console.warn('F');
  } else if (k === 5) {
    console.warn('A');
  } else if (k === 6) {
    console.warn('S');
  } else if (k === 7) {
    console.warn('Z');
  } else if (k === 8) {
    console.warn('O');
  } else if (k === 9) {
    console.warn('M');
  }
}