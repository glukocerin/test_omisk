import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeafletMap from '../components/LeafletMap'

import '../assets/css/landing.css';

import { ReactComponent as Gymnast } from "../assets/img/gymnast.svg";
import { ReactComponent as MusicalNote } from "../assets/img/musical-note.svg";
import { ReactComponent as PaintBrush } from "../assets/img/paint-brush.svg";

export default function Landing() {
    const [activeDot, setActiveDot] = useState(1),
            [activeLink, setActiveLink] = useState(0),
            [activePlace, setActivePlace] = useState({ placeId: 0, position: null , zoom: null }),
            youtubeLinks = [
                'https://www.youtube-nocookie.com/embed/63BHFKUuZZg',
                'https://www.youtube-nocookie.com/embed/6vE9RN63bms',
                'https://www.youtube-nocookie.com/embed/Iga3_QcwvUQ',
            ],
            scroller = function(e) {
                if (e.deltaY > 0 && activeDot < 8) {
                    setActiveDot(activeDot + 1);
                } else if (e.deltaY < 0 && activeDot > 1) {
                    setActiveDot(activeDot - 1);
                }
            };

    return(
        <div className="landing" onWheel = {(e) => scroller(e)}>
            <div className={`left one ${ activeDot === 1 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-83">Mozgásba hozzuk a zenét!</label>
                    <label className="sub-title extra-bold size-32">Óbuda Mozgásművészeti Iskola</label>
                    <label className="text extra-bold size-54">»</label>
                </div>
            </div>
            <div className={`left two ${ activeDot === 2 ? "active": "" }`}>
                <label className="text extra-bold size-70">1990 óta tudatos testképzés, kreativitás, közösség teremtés</label>
            </div>
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
            <div className={`left four ${ activeDot === 4 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Helyszíneink</label>
                    <div className="drop-down-list">
                        <div className={`place ${ activePlace.placeId === 1 && 'active' }`} onClick={() => setActivePlace({placeId:1, position: [47.54154, 19.03426], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 2 && 'active' }`} onClick={() => setActivePlace({placeId:2, position: [47.59798, 19.05255], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 3 && 'active' }`} onClick={() => setActivePlace({placeId:3, position: [47.48967, 19.01836], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 4 && 'active' }`} onClick={() => setActivePlace({placeId:4, position: [47.51262, 18.99469], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 5 && 'active' }`} onClick={() => setActivePlace({placeId:5, position: [47.51262, 18.99469], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 6 && 'active' }`} onClick={() => setActivePlace({placeId:6, position: [47.50055, 19.04011], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 7 && 'active' }`} onClick={() => setActivePlace({placeId:7, position: [47.48746, 19.07061], zoom: 18}) }>
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
                        <div className={`place ${ activePlace.placeId === 8 && 'active' }`} onClick={() => setActivePlace({placeId:8, position: [47.49992,19.068150], zoom: 18}) }>
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
            <div className={`left five ${ activeDot === 5 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Milyen óráink vannak?</label>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Művészi torna</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Mozdualtművészet</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Modern tánc</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Jazz tánc</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Klasszikus balett</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Pre balett</span>
                   </div>
                </div>
            </div>
            <div className={`left six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Mit csinálunk az órákon?</label>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                </div>
            </div>
            <div className={`left seven ${ activeDot === 7 ? "active": "" }`}>
                <div className="content-block">
                    <label className="title extra-bold size-54">Mit csinálunk az órák mellett?</label>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Évzáró előadások</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Országos versenyek</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Nyilvános órák</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Omisk gála</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Mozdulatműhely</span>
                   </div>
                   <div className="list-item">
                       <span className="arrow size-36 extra-bold">🡢</span>
                       <span className="text size-36 extra-bold">Nyári táborok</span>
                   </div>
                </div>
            </div>
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
            <div className="dots">
                <div onClick={() => setActiveDot(1)} className={`dot ${ activeDot === 1 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(2)} className={`dot ${ activeDot === 2 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(3)} className={`dot ${ activeDot === 3 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(4)} className={`dot ${ activeDot === 4 ? "active":""}`}>
                 
                </div>
                <div onClick={() => setActiveDot(5)} className={`dot ${ activeDot === 5 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(6)} className={`dot ${ activeDot === 6 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(7)} className={`dot ${ activeDot === 7 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(8)} className={`dot ${ activeDot === 8 ? "active":""}`}></div>
            </div>
            <div className={`right one ${ activeDot === 1 ? "active": "" }`}></div>
            <div className={`right two ${ activeDot === 2 ? "active": "" }`}></div>
            <div className={`right three ${ activeDot === 3 ? "active": "" }`}></div>
            <div className={`right four ${ activeDot === 4 ? "active": "" }`}>
                <LeafletMap props={activePlace}/>
            </div>
            <div className={`right five ${ activeDot === 5 ? "active": "" }`}></div>
            <div className={`right six ${ activeDot === 6 ? "active": "" }`}>
                <div className="content-block">
                    <iframe title="video" width="416" height="234" src={youtubeLinks[activeLink]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="link-block">
                        <label onClick={() => setActiveLink(0)} className={`link size-15 ${ activeLink === 0 && 'active' }`}>Művészi torna</label>
                        <label onClick={() => setActiveLink(1)} className={`link size-15 ${ activeLink === 1 && 'active' }`}>Mozdulatművészet</label>
                        <label onClick={() => setActiveLink(2)} className={`link size-15 ${ activeLink === 2 && 'active' }`}>Modern tánc</label>
                    </div>
                </div>
            </div>
            <div className={`right seven ${ activeDot === 7 ? "active": "" }`}></div>
            <div className={`right eight ${ activeDot === 8 ? "active": "" }`}></div>
        </div>
    )
}