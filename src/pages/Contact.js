import React, {useState} from "react";
import '../assets/css/contact.css';

import pagesConfig from "../assets/pagesConfig";

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

const { contact, ...rest } = pagesConfig;

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

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
          <div className={`question ${ activeFaq === 1 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 1 ? null : 1) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>
              <label className="question-label size-24 extra-bold">Mi a Berczik módszer?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 2 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 2 ? null : 2) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Mikor érdemes elkezdeni?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 3 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 3 ? null : 3) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Hova lehet eljutni?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 4 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 4 ? null : 4) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Kell hozzá valami speciális adottság?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 5 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 5 ? null : 5) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Milyen a zene?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 6 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 6 ? null : 6) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Lorem ipsum dolor sit amet, consetetur sadipscing ?</label>
              <div className="question-informations">

              </div>
          </div>
          <div className={`question ${ activeFaq === 7 && 'active' }`} onClick={() => setActiveFaq(activeFaq === 7 ? null : 7) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="question-label size-24 extra-bold">Lorem ipsum dolor sit amet, consetetur sadipscing ?</label>
              <div className="question-informations">

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
