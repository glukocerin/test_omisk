import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LeafletMap from '../components/LeafletMap'
import { useSelector, useDispatch } from "react-redux";

import {updatePageindex} from '../actions/navigation'

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
import { ReactComponent as Stamp } from "../assets/img/icons/stamp.svg";

import pagesConfig from "../assets/pagesConfig";

const { landing, ...rest } = pagesConfig;

const Dots = function({ setActiveDot, dotChange, activeDot }) {
    const dots = [];

    for(let i = 1; i < 9; i++){
        dots.push(<div key={i} onClick={() => { setActiveDot(i); dotChange(i); }} className={`dot ${ activeDot === i ? "active":""}`}></div>);
    }

    return dots;
}

const keyHelper = [
    'no-one',
    'no-two',
    'no-three',
    'no-four',
    'no-five',
    'no-fix',
];

const CoursesList = function(props) {
    const dispatch = useDispatch();

    return landing['list_courses'].list.map((item, index) => (
        <Link onClick={()=> dispatch(updatePageindex({payload: props.activeDot}))} onMouseEnter={() => props.setActiveFiveSwitch(keyHelper[index])} to={`/courses/${item.link}`} className={`list-item ${props.activeFiveSwitch === keyHelper[index] && 'active'}`} key={index}>
            <ArrowRight className="arrow"/>
            <span className="text size-36 extra-bold">{item.text}</span>
        </Link>
  ));
}

const WhatWeDo = function(props) {
    const dispatch = useDispatch();
    return landing['list_what_we_do'].list.map((item, index) => (
        <Link onClick={()=> dispatch(updatePageindex({payload: props.activeDot}))} onMouseEnter={() => props.setActiveSevenSwitch(keyHelper[index])} to={`/programs/${item.link}`} className={`list-item ${props.activeSevenSwitch === keyHelper[index] && 'active'}`} key={index}>
            <ArrowRight className="arrow"/>
            <span className="text size-36 extra-bold">{item.text}</span>
        </Link>
  ));
}

export default function Landing({ dotChange }) {
    const pageIndex = useSelector(store => store.navigation.landingPageIndex);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log()
        if (pageIndex === 0 || !pageIndex) {
            setActiveDot(1)
        } else {
            setActiveDot(pageIndex)
        }
        return function() {
            // dispatch({ type: "SET_PREV_STEP", payload: stepName });
        };
    }, [pageIndex]);


    const [activeDot, setActiveDot] = useState(1),
            [activeLink, setActiveLink] = useState(0),
            [activePlace, setActivePlace] = useState({ placeId: 0, position: null , zoom: null }),
            [activeFiveSwitch, setActiveFiveSwitch] = useState('no-one'),
            [activeSevenSwitch, setActiveSevenSwitch] = useState('no-one'),
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
                    <label className="title extra-bold size-83">{`Mozgásba\nhozzuk\na zenét!`}</label>
                    <label className="sub-title extra-bold size-32">Óbuda Mozgásművészeti Iskola</label>
                    <div className="stamp-box">
                        <Stamp className="stamp"/>
                        <div className="mask"></div>
                    </div>
                    <DoubleArrowDown className="double-arrow-down" />
                    <label className="size-12 thin">Görgess lefelé</label>
                </div>
            </div>
            <div className={`right one ${ activeDot === 1 ? "active": "" }`}></div>
            <div className={`left two ${ activeDot === 2 ? "active": "" }`}>
                <label className="text extra-bold size-70">
                    {`Mozgásművészeti\nképzés\n1990 óta\nBudapest\nöt kerületében`}
                    <br/>
                    <label className="text size-24 thin">Pers Júlia</label>
                </label>
            </div>
            <div className={`right two ${ activeDot === 2 ? "active": "" }`}></div>
            <div className={`left three ${ activeDot === 3 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Kik vagyunk?</label>
                    <label className="article size-24">{`Mozgásművészeti iskola, ahol  sokféle műfajt megtalálsz. Képzéseinket  Berczik-technikával alapozzuk meg.\n\nTánc és gimnasztika, technika és kreativitás, klasszikus- és modern zene. Kemény munka és kikapcsolódás, dedikált figyelem és közösségteremtés. Mindez sport és művészet határán. Úgy gondolod, hogy ezek nem férnek bele egy órába?`}</label>
                    <label className="article size-24 extra-bold">Gyere, nézd meg, mi így működünk!</label>
                    <div className="button-box">
                        <Link onClick={()=> {dispatch(updatePageindex({payload: activeDot}))}} to="/courses">
                            <button className="btn btn-secondary">Kurzusaink</button>
                        </Link>
                        <Link onClick={()=> dispatch(updatePageindex({payload: activeDot}))} className="btn-programs" to="/programs">
                            <button className="btn btn-primary">Programjaink</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`right three ${ activeDot === 3 ? "active": "" }`}></div>
            <div className={`left four ${ activeDot === 4 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Hol vagyunk?</label>
                    <div className="drop-down-list">
                        <div className={`place ${ activePlace.placeId === 1 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 1 ? {placeId: null, position: null} : {placeId:1, position: [47.54154, 19.03426], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>
                            <label className="place-label size-24 extra-bold">Óbudai Kulturális Központ</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">III. San Marco u. 81.</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">hétfő I kedd I szerda I csütörtök I péntek</label>
                                <label className="place-program-row size-17 thin">Benis Katalin I Kovács Bea I Rácz-Lakatos Lilla I Taylor Esther</label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">hétfő I kedd I szerda I péntek</label>
                                <label className="place-program-row size-17 thin">Benis Katalin I Kovács Bea I Pers Júlia I Rácz-Lakatos Lilla</label>
                                <label className="place-program-row size-17 thin title">Modern tánc</label>
                                <label className="place-program-row size-17 thin">hétfő </label>
                                <label className="place-program-row size-17 thin">Solti Eszter</label>
                                <label className="place-program-row size-17 thin title">Jazztánc</label>
                                <label className="place-program-row size-17 thin">hétfő I csütörtök</label>
                                <label className="place-program-row size-17 thin">Kalocsai Edit</label>
                                <label className="place-program-row size-17 thin title">Klasszikus balett</label>
                                <label className="place-program-row size-17 thin">hétfő I csütörtök</label>
                                <label className="place-program-row size-17 thin">Kalocsai Edit</label>
                                <label className="place-program-row size-17 thin title">Pre ballet/EN</label>
                                <label className="place-program-row size-17 thin">péntek     </label>
                                <label className="place-program-row size-17 thin">Taylor Esther</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 2 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 2 ? {placeId: null, position: null} : {placeId:2, position: [47.59798, 19.05255], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">Békásmegyeri Közösségi Ház</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">III. Csobánka tér 5</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">kedd I csütörtök I péntek</label>
                                <label className="place-program-row size-17 thin">Kovács Bea I Rácz-Lakatos Lilla </label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">kedd I csütörtök I péntek</label>
                                <label className="place-program-row size-17 thin">Kovács Bea I Rácz-Lakatos Lilla </label>
                                <label className="place-program-row size-17 thin title">Modern tánc</label>
                                <label className="place-program-row size-17 thin">kedd I szerda I csütörtök</label>
                                <label className="place-program-row size-17 thin">Csöngei Barbara</label>
                                <label className="place-program-row size-17 thin title">Klasszikus balett</label>
                                <label className="place-program-row size-17 thin">kedd I szerda I csütörtök</label>
                                <label className="place-program-row size-17 thin">Csöngei Barbara</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 3 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 3 ? {placeId: null, position: null} : {placeId:3, position: [47.48967, 19.01836], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">MOM Kulturális Központ</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">XII. Csörsz u. 18</label>
                                <label className="place-address size-15 extra-bold">XII. Böszörményi  út 24</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">hétfő I kedd I  csütörtök </label>
                                <label className="place-program-row size-17 thin">Benis Katalin I Solti Eszter</label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">hétfő I csütörtök</label>
                                <label className="place-program-row size-17 thin">Benis Katalin</label>
                                <label className="place-program-row size-17 thin title">Modern tánc</label>
                                <label className="place-program-row size-17 thin">hétfő I péntek</label>
                                <label className="place-program-row size-17 thin">Csöngei Barbara </label>
                                <label className="place-program-row size-17 thin title">Klasszikus balett</label>
                                <label className="place-program-row size-17 thin">hétfő I péntek</label>
                                <label className="place-program-row size-17 thin">Csöngei Barbara</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 4 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 4 ? {placeId: null, position: null} : {placeId:4, position: [47.51262, 18.99469], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">Virányosi Közösségi Ház</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">XII. Szarvas Gábor út 8/c</label>
                                <label className="place-program-row size-17 thin title">Művészi torna</label>
                                <label className="place-program-row size-17 thin">kedd I csütörtök</label>
                                <label className="place-program-row size-17 thin">Rózsa Réka</label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">kedd I csütörtök </label>
                                <label className="place-program-row size-17 thin">Rózsa Réka</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 5 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 5 ? {placeId: null, position: null} : {placeId:5, position: [47.51262, 18.99469], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">Szarvas Gábor Közösségi Tér</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">XII. Szarvas Gábor út 22</label>
                                <label className="place-program-row size-17 thin title">Művészi torna</label>
                                <label className="place-program-row size-17 thin">hétfő I kedd I szerda I csütörtök </label>
                                <label className="place-program-row size-17 thin">Mády Krisztina </label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">hétfő I kedd I szerda I csütörtök </label>
                                <label className="place-program-row size-17 thin">Mády Krisztina </label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 6 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 6 ? {placeId: null, position: null} : {placeId:6, position: [47.50055, 19.04011], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">Budapest Művelődési Központ</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">XI. Etele út 55/a</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">Taylor Esther</label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">Taylor Esther</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 7 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 7 ? {placeId: null, position: null} : {placeId:7, position: [47.48746, 19.07061], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">Józsefvárosi Galéria és Rendezvényközpont</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">VIII. József krt. 70</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">Solti Eszter</label>
                                <label className="place-program-row size-17 thin title">Mozdulatművészet</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">Solti Eszter</label>
                            </div>
                        </div>
                        <div className={`place ${ activePlace.placeId === 8 && 'active' }`} onClick={() => setActivePlace(activePlace.placeId === 8 ? {placeId: null, position: null} : {placeId:8, position: [47.49992,19.068150], zoom: 15}) }>
                            <PlusSign className="plus-sign"/>
                            <MinusSign className="minus-sign"/>                            
                            <label className="place-label size-24 extra-bold">VII. Kerületi Táncstúdió</label>
                            <div className="place-informations">
                                <label className="place-address size-15 extra-bold">VII. Wesselényi u. 41</label>
                                <label className="place-program-row size-17 thin title">Művészi  torna</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">P.Ács Vali</label>
                                <label className="place-program-row size-17 thin title">Klasszikus balett</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda</label>
                                <label className="place-program-row size-17 thin">P.Ács Vali</label>
                                <label className="place-program-row size-17 thin title">Klasszikus balett</label>
                                <label className="place-program-row size-17 thin">hétfő I szerda </label>
                                <label className="place-program-row size-17 thin">Csöngei Barbara</label>
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
                    <CoursesList activeDot={activeDot} activeFiveSwitch={activeFiveSwitch} setActiveFiveSwitch={setActiveFiveSwitch}/>
                </div>
            </div>
            <div className={`right five ${ activeDot === 5 ? "active": "" } ${activeFiveSwitch}`}>
                <div className="image-switch">
                    <div onClick={() => setActiveFiveSwitch('no-one')} className={`switch ${ activeFiveSwitch === 'no-one' && "active" }`}></div>
                    <div onClick={() => setActiveFiveSwitch('no-two')} className={`switch ${ activeFiveSwitch === 'no-two' && "active" }`}></div>
                    <div onClick={() => setActiveFiveSwitch('no-three')} className={`switch ${ activeFiveSwitch === 'no-three' && "active" }`}></div>
                    <div onClick={() => setActiveFiveSwitch('no-four')} className={`switch ${ activeFiveSwitch === 'no-four' && "active" }`}></div>
                    <div onClick={() => setActiveFiveSwitch('no-five')} className={`switch ${ activeFiveSwitch === 'no-five' && "active" }`}></div>
                    <div onClick={() => setActiveFiveSwitch('no-fix')} className={`switch ${ activeFiveSwitch === 'no-fix' && "active" }`}></div>
                </div>
            </div>
            <div className={`left six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">{`Mit csinálunk\naz órákon?`}</label>
                    <label className="article size-20">Tréningezünk, kombinációkat  és koreográfiákat tanulunk - korosztályos csoportokban, heti rendszerességgel.  A tréning rugalmassá és erőssé tesz, miközben készség szinten sajátíthatjuk el az adott műfajnak megfelelő mozgásformát – művészi tornán a kéziszerek használatát is. Az órán tanult kombinációk készítik elő az évvégi előadáson szinpadra kerülő koreográfiákat.</label>
                </div>
            </div>
            <div className={`right six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <iframe title="video" src={activeDot === 6 ? landing['youtube_links'][activeLink].link: undefined} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <WhatWeDo activeDot={activeDot} activeSevenSwitch={activeSevenSwitch} setActiveSevenSwitch={setActiveSevenSwitch} />
                </div>
            </div>
            <div className={`right seven ${ activeDot === 7 ? "active": "" } ${activeSevenSwitch}`}>
                <div className="image-switch">
                    <div onClick={() => setActiveSevenSwitch('no-one')} className={`switch ${ activeSevenSwitch === 'no-one' && "active" }`}></div>
                    <div onClick={() => setActiveSevenSwitch('no-two')} className={`switch ${ activeSevenSwitch === 'no-two' && "active" }`}></div>
                    <div onClick={() => setActiveSevenSwitch('no-three')} className={`switch ${ activeSevenSwitch === 'no-three' && "active" }`}></div>
                    <div onClick={() => setActiveSevenSwitch('no-four')} className={`switch ${ activeSevenSwitch === 'no-four' && "active" }`}></div>
                    <div onClick={() => setActiveSevenSwitch('no-five')} className={`switch ${ activeSevenSwitch === 'no-five' && "active" }`}></div>
                    <div onClick={() => setActiveSevenSwitch('no-fix')} className={`switch ${ activeSevenSwitch === 'no-fix' && "active" }`}></div>
                </div>
            </div>
            <div className={`left eight ${ activeDot === 8 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Ami fontos nekünk</label>
                    <div className="sepa-row">
                        <Gymnast className="icon" />
                        <label className="text size-24 extra-bold">Berczik technika</label>
                    </div>
                    <label className="article size-20">A <u>Berczik-technika</u> a gyermekek természetes mozgásából kiindulva fejleszti a testtudatot és nevel tudatosságra. Mindig az életkornak megfelelő mozgásforma, amely biztos alapot ad a bármelyik táncstílushoz.</label>
                    <div className="sepa-row">
                        <MusicalNote className="icon" />
                        <label className="text size-24 extra-bold">Zeneiség</label>
                    </div>
                    <label className="article size-20">A zene nálunk nem csak kísérő eleme a táncnak. Koreográfiáinkban szoros összhangban egymás hatását erősítik: segít a zene megértésében, és érzékenyít a táncra. Így hozzuk mi mozgásba a zenét.</label>
                    <div className="sepa-row">
                        <PaintBrush className="icon" />
                        <label className="text size-24 extra-bold">Kreativitás</label>
                    </div>
                    <label className="article size-20">A koreográfia készítés az önkifejezés egy formája, a közös alkotás csoportból közösséget formál. Növendékeink a technikai tudás megszerzése mellett megtanulják a tánc nyelvén kifejezni magukat, kibontakoztathatják kreativitásukat.</label>
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
            <div className="social-media-bar">
                <a className="icon" href="https://www.facebook.com/omisk.hu/" target="_blank" rel="noopener noreferrer"><FacebookTransparent /></a>
                <a className="icon" href="https://www.instagram.com/o_m_i_s_k/" target="_blank" rel="noopener noreferrer"><InstagramTransparent /></a>
                <a className="icon" href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA" target="_blank" rel="noopener noreferrer"><YoutubeTransparent /></a>
            </div>
        </div>
    )
}