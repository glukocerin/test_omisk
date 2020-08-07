import React, {useState} from "react";
import '../assets/css/contact.css';

import pagesConfig from "../assets/pagesConfig";

const { contact, ...rest } = pagesConfig;

export default function Contact() {

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-columns">
          <div className="contact-box" >
            <img src={require(`../assets/img/marti.png`)} alt="" />
          </div>
          <div className="contact-box">
            <label className="content-title size-54 extra-bold">Kérdéseidre válaszolunk!</label>
            <label className="content-text size-20">
              Felmerülő kérdésedre Mikusik Márta, iskola titkárunk válaszol hétköznap 10-14 óra között hívhatod.
              <br/>
              <br/>
              Telefon: <b>06-1-2000-138</b>
              <br/>
              <br/>
              Mobil: <b>06-20-9460-848</b>
              <br/>
              <br/>
              E-mail: <b><a href="mailto:iroda@omisk.hu">iroda@omisk.hu</a></b>
              <br/>
              <br/>
              Posta: <b>1021. Budapest, Széher út 77.</b>
            </label>
          </div>
        </div>
      </div>
      <div className="faq">
        <label className="size-54 extra-bold">Gyakori kérdések</label>
      </div>
    </div>
  );
}
