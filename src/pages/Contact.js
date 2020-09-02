import React, {useState} from "react";
import '../assets/css/contact.css';

import pagesConfig from "../assets/pagesConfig";

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

const { contact, ...rest } = pagesConfig;

const Gyik = function() {
  const [activeFaq, setActiveFaq] = useState(null);

  return contact.gyik.map((item, index) => (
    <div className={`question ${ activeFaq === index && 'active' }`} onClick={() => setActiveFaq(activeFaq === index ? null : index) } key={index}>
        <PlusSign className="plus-sign"/>
        <MinusSign className="minus-sign"/>
        <label className="question-label size-24 extra-bold">{ item.question }</label>
        <div className="question-informations">
          <label className="answer size-20 thin">{ item.answer }</label>
        </div>
    </div>
));
}

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-columns">
          <div className="contact-box" >
            <img src={require(`../assets/img/kapcsolat.jpg`)} alt="" />
          </div>
          <div className="contact-box">
            <label className="content-title size-54 extra-bold">Kérdéseidre válaszolunk!</label>
            <label className="content-text size-20">
              Felmerülő kérdésedre Mikusik Márta, iskola titkárunk válaszol hétköznap 10-14 óra között hívhatod.
              <span className="contact-row">Telefon: <b>06-1-2000-138</b></span>
              <span className="contact-row">Mobil: <b>06-20-9460-848</b></span>
              <span className="contact-row">E-mail: <b><a href="mailto:iroda@omisk.hu">iroda@omisk.hu</a></b></span>
              <span className="contact-row">Posta: <b>1021. Budapest, Széher út 77.</b></span>
            </label>
          </div>
        </div>
      </div>
      <div className="faq">
        <label className="size-54 extra-bold">Gyakori kérdések</label>
        <div className="drop-down-list">
          <Gyik/>
        </div>
      </div>
    </div>
  );
}
