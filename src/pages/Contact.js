import React, { useState } from "react";
import "../assets/css/contact.css";

import pagesConfig from "../assets/pagesConfig";
import Pdf from "../assets/docs/adatkezelesi_tajekoztato.pdf";

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

const { contact } = pagesConfig;

const Gyik = function () {
  const [activeFaq, setActiveFaq] = useState(null);

  return contact.gyik.map((item, index) => (
    <div
      className={`question ${activeFaq === index && "active"}`}
      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
      key={index}
    >
      <PlusSign className="plus-sign" />
      <MinusSign className="minus-sign" />
      <label className="question-label size-24 extra-bold">
        {item.question}
      </label>
      <div className="question-informations">
        <label className="answer size-20 thin">{item.answer}</label>
      </div>
    </div>
  ));
};

const sendMail = function (mail) {
  const mailTo = "iroda@omisk.hu",
    mailSubject = "Webes kapcsolatba lépés",
    message =
      "Név: " +
      mail.name +
      "\nE-mail: " +
      mail.email +
      "\nMobil: " +
      mail.phone +
      "\nMegjegyzés: " +
      mail.comment,
    requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: mailTo,
        subject: mailSubject,
        msg: message,
      }),
    };

  document.querySelector(".App").scrollTop = 0;

  fetch("/sendmail.php", requestOptions).then(() => {
    setMailSent();
  });
};

const setMailSent = function () {
  window.sessionStorage.setItem("mail", true);
};

export default function Contact() {
  const [mail, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      comment: "",
      gdpr: false,
    }),
    updateField = (e) => {
      setForm({
        ...mail,
        [e.target.name]:
          e.target.name === "gdpr" ? e.target.checked : e.target.value,
      });
    },
    sessionMailSent = window.localStorage.getItem("mail"),
    [mailSent, setMailSentState] = useState(false);

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-columns">
          <div className="contact-box">
            <img 
            src={`${process.env.PUBLIC_URL}/assets/img/mikus-marta.jpg`}
            alt="Mikus Márta" />
            <h1 className="size-54 extra-bold">{`${
              sessionMailSent || mailSent
                ? "Üzenetét elküldtük ✔"
                : "Lépj kapcsolatba velünk!"
            }`}</h1>
            <form
              className={`send-mail-form ${
                (sessionMailSent || mailSent) && "hidden"
              }`}
              onSubmit={(event) => {
                event.preventDefault();
                setMailSentState(true);
                sendMail(mail);
              }}
            >
              <input
                className="form-row-input size-20"
                name="name"
                type="text"
                required
                placeholder="Név"
                onInput={updateField}
              />
              <input
                className="form-row-input size-20"
                name="email"
                type="email"
                required
                placeholder="E-mail"
                onInput={updateField}
              />
              <input
                className="form-row-input size-20"
                name="phone"
                type="tel"
                placeholder="Mobil (opcionális)"
                onInput={updateField}
              />
              <input
                className="form-row-input size-20"
                name="comment"
                type="text"
                required
                placeholder="Üzenet"
                onInput={updateField}
              />
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  required
                  name="gdpr"
                  onInput={updateField}
                />
                <span className="size-16 thin">
                  Ezennel hozzájárulok, hogy a fent megadott adataimat a
                  omisk.hu-t üzemeltető Omisk a GDPR előírásaival összhangban
                  kezelje{" "}
                  <a
                    href={Pdf}
                    className="extra-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adatvédelmi tájékoztató
                  </a>
                </span>
              </label>
              <button type="submit" className="btn btn-primary email-sender">
                Elküldöm
              </button>
            </form>
          </div>
          <div className="contact-box">
            <h1 className="content-title size-54 extra-bold">
              Kérdéseidre válaszolunk!
            </h1>
            <label className="content-text size-20">
              Felmerülő kérdéseidre Mikusik Márta iskolatitkárunk válaszol.
              Hétköznap 10-14 óra között hívhatod.
              <span className="contact-row">
                Telefon: <b>06-1-2000-138</b>
              </span>
              <span className="contact-row">
                Mobil: <b>06-20-9460-848</b>
              </span>
              <span className="contact-row">
                E-mail:{" "}
                <b>
                  <a href="mailto:iroda@omisk.hu">iroda@omisk.hu</a>
                </b>
              </span>
              <span className="contact-row">
                Posta: <b>1021 Budapest, Széher út 77.</b>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="faq" id={"gyik"}>
        <h1 className="size-54 extra-bold">Gyakori kérdések</h1>
        <div className="drop-down-list">
          <Gyik />
        </div>
      </div>
    </div>
  );
}
