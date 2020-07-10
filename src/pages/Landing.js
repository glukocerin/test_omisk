import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/landing.css';

export default function Landing() {
    const [activeDot, setActiveDot] = useState(1),
            [activeLink, setActiveLink] = useState(0),
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
            <div className={`left four ${ activeDot === 4 ? "active": "" }`}></div>
            <div className={`left five ${ activeDot === 5 ? "active": "" }`}></div>
            <div className={`left six ${ activeDot === 6 ? "active": "" }`}>
            <div className="content-block">
                    <label className="title extra-bold size-54">Mit csinálunk az órákon?</label>
                    <label className="article size-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                    <label className="article size-20">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</label>
                </div>
            </div>
            <div className={`left seven ${ activeDot === 7 ? "active": "" }`}></div>
            <div className={`left eight ${ activeDot === 8 ? "active": "" }`}></div>
            <div className="dots">
                <div onClick={() => setActiveDot(1)} className={`dot ${ activeDot === 1 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(2)} className={`dot ${ activeDot === 2 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(3)} className={`dot ${ activeDot === 3 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(4)} className={`dot ${ activeDot === 4 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(5)} className={`dot ${ activeDot === 5 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(6)} className={`dot ${ activeDot === 6 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(7)} className={`dot ${ activeDot === 7 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(8)} className={`dot ${ activeDot === 8 ? "active":""}`}></div>
            </div>
            <div className={`right one ${ activeDot === 1 ? "active": "" }`}></div>
            <div className={`right two ${ activeDot === 2 ? "active": "" }`}></div>
            <div className={`right three ${ activeDot === 3 ? "active": "" }`}></div>
            <div className={`right four ${ activeDot === 4 ? "active": "" }`}></div>
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