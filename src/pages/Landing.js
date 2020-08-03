import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeafletMap from '../components/LeafletMap'

import '../assets/css/landing.css';

import { ReactComponent as Gymnast } from "../assets/img/gymnast.svg";
import { ReactComponent as MusicalNote } from "../assets/img/musical-note.svg";
import { ReactComponent as PaintBrush } from "../assets/img/paint-brush.svg";
import { ReactComponent as LogoWithTitle } from "../assets/img/icons/logo_w_title.svg";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";
import { ReactComponent as FacebookTransparent } from "../assets/img/icons/facebook_transparent.svg";
import { ReactComponent as InstagramTransparent } from "../assets/img/icons/instagram_transparent.svg";
import { ReactComponent as YoutubeTransparent } from "../assets/img/icons/youtube_transparent.svg";
import { ReactComponent as DoubleArrowDown } from "../assets/img/icons/double_arrow_down.svg";
import { ReactComponent as ArrowRight } from "../assets/img/icons/arrow_right.svg";
import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

import pagesConfig from "../assets/pagesConfig";

const { landing, ...rest } = pagesConfig;

const Dots = function({ setActiveDot, dotChange, activeDot }) {
    const dots = [];

    for(let i = 1; i < 9; i++){
        dots.push(<div key={i} onClick={() => { setActiveDot(i); dotChange(i); }} className={`dot ${ activeDot === i ? "active":""}`}></div>);
    }

    return dots;
}

const CoursesList = function() {
    return landing['list_courses'].list.map((item, index) => (
        <Link to={`/courses/${item.link}`} className="list-item" key={index}>
            <ArrowRight className="arrow"/>
            <span className="text size-36 extra-bold">{item.text}</span>
        </Link>
  ));
}

const WhatWeDo = function() {
    return landing['list_what_we_do'].list.map((item, index) => (
        <div className="list-item" key={index}>
            <ArrowRight className="arrow"/>
            <span className="text size-36 extra-bold">{item}</span>
        </div>
  ));
}

export default function Landing({ dotChange }) {
    const [activeDot, setActiveDot] = useState(1),
            [activeLink, setActiveLink] = useState(0),
            [activePlace, setActivePlace] = useState({ placeId: 0, position: null , zoom: null }),
            scroller = function(e) {
                if (e.deltaY > 0 && activeDot < 8) {
                    setActiveDot(activeDot + 1);
                    dotChange(activeDot + 1);
                } else if (e.deltaY < 0 && activeDot > 1) {
                    setActiveDot(activeDot - 1);
                    dotChange(activeDot - 1);
                }
            };

    return(
        <div className="landing" onWheel = {(e) => scroller(e) }>
            <div className={`left one ${ activeDot === 1 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-83">Mozgásba hozzuk a zenét!</label>
                    <label className="sub-title extra-bold size-32">Óbuda Mozgásművészeti Iskola</label>
                    <DoubleArrowDown className="double-arrow-down" />
                </div>
            </div>
            <div className={`right one ${ activeDot === 1 ? "active": "" }`}></div>
            <div className={`left two ${ activeDot === 2 ? "active": "" }`}>
                <label className="text extra-bold size-70">1990 óta tudatos testképzés, kreativitás, közösség teremtés</label>
            </div>
            <div className={`right two ${ activeDot === 2 ? "active": "" }`}></div>
            <div className={`left three ${ activeDot === 3 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Kik vagyunk?</label>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                    <div className="button-box">
                        <Link to="/courses">
                            <button className="btn btn-secondary">Kurzusaink</button>
                        </Link>
                        <button className="btn btn-primary">Programjaink</button>
                    </div>
                </div>
            </div>
            <div className={`right three ${ activeDot === 3 ? "active": "" }`}></div>
            <div className={`left four ${ activeDot === 4 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Helyszíneink</label>
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
                </div>
            </div>
            <div className={`right four ${ activeDot === 4 ? "active": "" }`}>
                <LeafletMap props={activePlace}/>
            </div>            
            <div className={`left five ${ activeDot === 5 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">{landing['list_courses'].title}</label>
                    <CoursesList />
                </div>
            </div>
            <div className={`right five ${ activeDot === 5 ? "active": "" }`}></div>
            <div className={`left six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Mit csinálunk az órákon?</label>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                </div>
            </div>
            <div className={`right six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <iframe title="video" width="416" height="234" src={landing['youtube_links'][activeLink].link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="link-block">
                        <label onClick={() => setActiveLink(0)} className={`link size-15 ${ activeLink === 0 && 'active' }`}>{landing['youtube_links'][0].text}</label>
                        <label onClick={() => setActiveLink(1)} className={`link size-15 ${ activeLink === 1 && 'active' }`}>{landing['youtube_links'][1].text}</label>
                        <label onClick={() => setActiveLink(2)} className={`link size-15 ${ activeLink === 2 && 'active' }`}>{landing['youtube_links'][2].text}</label>
                    </div>
                </div>
            </div>
            <div className={`left seven ${ activeDot === 7 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">{landing['list_what_we_do'].title}</label>
                    <WhatWeDo />
                </div>
            </div>
            <div className={`right seven ${ activeDot === 7 ? "active": "" }`}></div>
            <div className={`left eight ${ activeDot === 8 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Ami fontos nekünk</label>
                    <div className="sepa-row">
                        <Gymnast className="icon" />
                        <label className="text size-24 extra-bold">Berczik módszer</label>
                        <hr />
                    </div>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <div className="sepa-row">
                        <MusicalNote className="icon" />
                        <label className="text size-24 extra-bold">Zeneiség</label>
                        <hr />
                    </div>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <div className="sepa-row">
                        <PaintBrush className="icon" />
                        <label className="text size-24 extra-bold">Alkotómunka</label>
                        <hr />
                    </div>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                </div>
            </div>
            <div className={`right eight ${ activeDot === 8 ? "active": "" }`}></div>
            <div className="dots">
                <Dots setActiveDot={setActiveDot} dotChange={dotChange} activeDot={activeDot}/>
            </div>
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
                        hétköznap 10-14 óra között hívhatod.<br/>
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
                        MOM Művelődési Központ<br/>
                        Budapest Művelődési központ<br/>
                        Vll. Kerületi Táncstúdió<br/>
                        Békásmegyeri Közösségi Ház<br/>
                        Virányosi Közösségi Ház<br/>
                        Józsefvárosi Galéria és Rendezvényközpont<br/>
                    </label>
                    <div className="sm-icons">
                        <div className="icon">
                            <Instagram/>
                        </div>
                        <div className="icon">
                            <Facebook/>
                        </div>
                        <div className="icon">
                            <Youtube/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media-bar">
                <FacebookTransparent className="icon" />
                <InstagramTransparent className="icon" />
                <YoutubeTransparent className="icon" />
            </div>
        </div>
    )
}