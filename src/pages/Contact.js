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

const sendMail = function(mail) {
  const mailTo = "bestrapboy@gmail.com", // modify this!
        mailSubject = 'Webes kapcsolatba lépés',
        message = "Név: " + mail.name +
                  "\nE-mail: " + mail.email +
                  "\nMobil: " + mail.phone +
                  "\nMegjegyzés: " + mail.comment,
        requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: mailTo,
            subject: mailSubject,
            msg: message
          })
        };

  fetch('/sendmail.php', requestOptions);
}


export default function Contact() {
  const [mail, setForm] = useState({ name: '', email: '', phone: '', comment: '', gdpr: false }),
    updateField = e => {
      setForm({
      ...mail,
      [e.target.name]: e.target.name === 'gdpr' ? e.target.checked : e.target.value
    });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-columns">
          <div className="contact-box" >
            <img src={require(`../assets/img/kapcsolat.jpg`)} alt="" />
            <label className="size-54 extra-bold">Lépj kapcsolatba Velünk</label>
            <form className="send-mail-form" onSubmit={(event)=> {event.preventDefault();sendMail(mail)}}>
              <input className="form-row-input size-20" name="name" type="text" required placeholder="Név" onInput={updateField} />
              <input className="form-row-input size-20" name="email" type="email" required placeholder="E-mail" onInput={updateField} />
              <input className="form-row-input size-20" name="phone" type="tel" placeholder="Mobil (opcionális)" onInput={updateField} />
              <input className="form-row-input size-20" name="comment" type="text" required placeholder="Megjegyzés" onInput={updateField} />
              <label className="checkbox-row">
                <input type="checkbox" required name="gdpr" onInput={updateField}/>
                <span className="size-16 thin">Ezennel hozzájárulok, hogy a fent megadott adataimat a omisk.hu-t üzemeltető Omisk a GDPR előírásaival összhangban kezelje <a className="extra-bold" href="http://omisk.hu">Adatvédelmi tájékoztató</a></span>
              </label>
              <button type="submit" className="btn btn-primary email-sender">Elküldöm</button>
            </form>
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
