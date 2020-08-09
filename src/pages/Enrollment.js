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
      <label className="page-title size-90 extra-bold">Beiratkozás</label>
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
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">hétfő I kedd I szerda I csütörtök I péntek</label>
                <label className="place-program-row size-15 thin">Benis Katalin I Kovács Bea I Rácz-Lakatos Lilla I Taylor Esther</label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">hétfő I kedd I szerda I péntek</label>
                <label className="place-program-row size-15 thin">Benis Katalin I Kovács Bea I Pers Júlia I Rácz-Lakatos Lilla</label>
                <label className="place-program-row size-15 thin title">Modern tánc</label>
                <label className="place-program-row size-15 thin">hétfő </label>
                <label className="place-program-row size-15 thin">Solti Eszter</label>
                <label className="place-program-row size-15 thin title">Jazztánc</label>
                <label className="place-program-row size-15 thin">hétfő I csütörtök</label>
                <label className="place-program-row size-15 thin">Kalocsai Edit</label>
                <label className="place-program-row size-15 thin title">Klasszikus balett</label>
                <label className="place-program-row size-15 thin">hétfő I csütörtök</label>
                <label className="place-program-row size-15 thin">Kalocsai Edit</label>
                <label className="place-program-row size-15 thin title">Pre ballet/EN</label>
                <label className="place-program-row size-15 thin">péntek     </label>
                <label className="place-program-row size-15 thin">Taylor Esther</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 2 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 2 ? {placeId: null, position: null} : {placeId:2, position: [47.59798, 19.05255], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">Békásmegyeri Közösségi Ház</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">III. Csobánka tér 5</label>
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">kedd I csütörtök I péntek</label>
                <label className="place-program-row size-15 thin">Kovács Bea I Rácz-Lakatos Lilla </label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">kedd I csütörtök I péntek</label>
                <label className="place-program-row size-15 thin">Kovács Bea I Rácz-Lakatos Lilla </label>
                <label className="place-program-row size-15 thin title">Modern tánc</label>
                <label className="place-program-row size-15 thin">kedd I szerda I csütörtök</label>
                <label className="place-program-row size-15 thin">Csöngei Barbara</label>
                <label className="place-program-row size-15 thin title">Klasszikus balett</label>
                <label className="place-program-row size-15 thin">kedd I szerda I csütörtök</label>
                <label className="place-program-row size-15 thin">Csöngei Barbara</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 3 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 3 ? {placeId: null, position: null} : {placeId:3, position: [47.48967, 19.01836], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">MOM Kulturális Központ</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">XII. Csörsz u. 18</label>
                <label className="place-address size-15 extra-bold">XII. Böszörményi  út 24</label>
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">hétfő I kedd I  csütörtök </label>
                <label className="place-program-row size-15 thin">Benis Katalin I Solti Eszter</label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">hétfő I csütörtök</label>
                <label className="place-program-row size-15 thin">Benis Katalin</label>
                <label className="place-program-row size-15 thin title">Modern tánc</label>
                <label className="place-program-row size-15 thin">hétfő I péntek</label>
                <label className="place-program-row size-15 thin">Csöngei Barbara </label>
                <label className="place-program-row size-15 thin title">Klasszikus balett</label>
                <label className="place-program-row size-15 thin">hétfő I péntek</label>
                <label className="place-program-row size-15 thin">Csöngei Barbara</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 4 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 4 ? {placeId: null, position: null} : {placeId:4, position: [47.51262, 18.99469], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">Virányosi Közösségi Ház</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">XII. Szarvas Gábor út 8/c</label>
                <label className="place-program-row size-15 thin">Művészi torna</label>
                <label className="place-program-row size-15 thin">kedd I csütörtök</label>
                <label className="place-program-row size-15 thin">Rózsa Réka</label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">kedd I csütörtök </label>
                <label className="place-program-row size-15 thin">Rózsa Réka</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 5 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 5 ? {placeId: null, position: null} : {placeId:5, position: [47.51262, 18.99469], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">Szarvas Gábor Közösségi Tér</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">XII. Szarvas Gábor út 22</label>
                <label className="place-program-row size-15 thin">hétfő I kedd I szerda I csütörtök </label>
                <label className="place-program-row size-15 thin">Mády Krisztina </label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">hétfő I kedd I szerda I csütörtök </label>
                <label className="place-program-row size-15 thin">Mády Krisztina </label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 6 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 6 ? {placeId: null, position: null} : {placeId:6, position: [47.50055, 19.04011], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">Budapest Művelődési Központ</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">XI. Etele út 55/a</label>
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">Taylor Esther</label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">Taylor Esther</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 7 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 7 ? {placeId: null, position: null} : {placeId:7, position: [47.48746, 19.07061], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">Józsefvárosi Galéria és Rendezvényközpont</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">VIII. József krt. 70</label>
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">Solti Eszter</label>
                <label className="place-program-row size-15 thin title">Mozdulatművészet</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">Solti Eszter</label>
            </div>
        </div>
        <div className={`place ${ activePlace.placeId === 8 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 8 ? {placeId: null, position: null} : {placeId:8, position: [47.49992,19.068150], zoom: 18}) }>
            <PlusSign className="plus-sign"/>
            <MinusSign className="minus-sign"/>                            
            <label className="place-label size-24 extra-bold">VII. Kerületi Táncstúdió</label>
            <div className="place-informations">
                <label className="place-address size-15 extra-bold">VII. Wesselényi u. 41</label>
                <label className="place-program-row size-15 thin">Művészi  torna</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">P.Ács Vali</label>
                <label className="place-program-row size-15 thin title">Klasszikus balett</label>
                <label className="place-program-row size-15 thin">hétfő I szerda</label>
                <label className="place-program-row size-15 thin">P.Ács Vali</label>
                <label className="place-program-row size-15 thin title">Klasszikus balett</label>
                <label className="place-program-row size-15 thin">hétfő I szerda </label>
                <label className="place-program-row size-15 thin">Csöngei Barbara</label>
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
