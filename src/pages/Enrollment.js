import React, {useState} from "react";
import '../assets/css/enrollment.css';
import LeafletMap from '../components/LeafletMap'

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

import pagesConfig from "../assets/pagesConfig";

const { enrollment, ...rest } = pagesConfig;

const EnrollmentColumns = function(props) {
  return enrollment.columns.map((item, index) => (
    <div className="enrollment-box" key={index}>
      <label className="enrollment-title size-36 extra-bold">{item.title}</label>
      <label className="enrollment-text size-20 thin">{item.text}</label>
      <button className="btn">{item.button_text}</button>
    </div>
  ));
};

export default function Enrollment() {
  const [activePlace, setActivePlace] = useState({ placeId: 0, position: [47.5342, 19.07] , zoom: 10 });

  return (
    <div className="enrollment">
      <div className="enrollment-header"></div>
      <label className="title size-90 extra-bold">Beiratkozás</label>
      <div className="enrollment-content">
        <div className="enrollment-columns">
          <EnrollmentColumns />
        </div>
      </div>
      <label className="sub-title extra-bold size-54">Helyszíneink</label>
      <div className="places-content">
        <div className="drop-down-list">
          <div className={`place ${ activePlace.placeId === 1 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 1 ? {placeId: null, position: null} : {placeId:1, position: [47.54154, 19.03426], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>
              <label className="place-label size-24 extra-bold">Óbudai kultúrális központ</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 2 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 2 ? {placeId: null, position: null} : {placeId:2, position: [47.59798, 19.05255], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Békásmegyeri Közösségi Ház</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 3 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 3 ? {placeId: null, position: null} : {placeId:3, position: [47.48967, 19.01836], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Mom Művelődési Központ</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 4 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 4 ? {placeId: null, position: null} : {placeId:4, position: [47.51262, 18.99469], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Virányosi Közösségi Ház</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 5 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 5 ? {placeId: null, position: null} : {placeId:5, position: [47.51262, 18.99469], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Szarvas Gábor Közösségi Tér</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 6 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 6 ? {placeId: null, position: null} : {placeId:6, position: [47.50055, 19.04011], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Budapest Művelődési Központ</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 7 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 7 ? {placeId: null, position: null} : {placeId:7, position: [47.48746, 19.07061], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">Józsefvárosi Galéria és Rendezvényközpont</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
          <div className={`place ${ activePlace.placeId === 8 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 8 ? {placeId: null, position: null} : {placeId:8, position: [47.49992,19.068150], zoom: 18}) }>
              <PlusSign className="plus-sign"/>
              <MinusSign className="minus-sign"/>                            
              <label className="place-label size-24 extra-bold">VII. Kerületi Táncstúdió</label>
              <div className="place-informations">
                  <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                  <label className="place-program-row size-15 thin">Művészi torna</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | csütörtök | péntek</label>
                  <label className="place-program-row size-15 thin">Benis Katalin | Pers Júlia | Taylor Esther | Rózsa Réka</label>
                  <label className="place-program-row size-15 thin">mozdulatművészet</label>
                  <label className="place-program-row size-15 thin">hétfő | kedd | szerda | péntek | Pers Júlia | Benis Katalin</label>
                  <label className="place-program-row size-15 thin">modern tánc</label>
                  <label className="place-program-row size-15 thin">hétfő | szerda | Solti Eszter</label>
                  <label className="place-program-row size-15 thin">balett</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök| Kalocsai Edit</label>
                  <label className="place-program-row size-15 thin">jazztánc</label>
                  <label className="place-program-row size-15 thin">hétfő | csütörtök | Kalocsai Edit</label>
              </div>
          </div>
        </div>
        <div className="map">
          <LeafletMap props={activePlace}/>
        </div>
      </div>
    </div>
  );
}
