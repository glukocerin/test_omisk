import React, { useState } from 'react'
import "../assets/css/cookies.css";
import Pdf from '../assets/docs/adatkezelesi_tajekoztato.pdf';

function setCookies() {
    window.localStorage.setItem("cookies", true);
}

export default function Cookies() {
    const localCookies = window.localStorage.getItem("cookies");
    const [closed, cloeCookies] = useState(false);

    return (
        <div className={`cookies-block ${(closed || localCookies) && 'hidden' }`}>
            <button className="btn close" onClick={()=> cloeCookies(true) }>&#215;</button>
            <label className="size-20 thin">A weboldal <strong>sütiket (cookie-kat)</strong> használ, hogy biztonságos böngészés mellett a legjobb felhasználói élményt nyújtsa.</label>
            <a href={Pdf} className="link" target="_blank" rel="noopener noreferrer">Részletes információ a sütikről.</a>
            <button className="btn accept" onClick={()=> { cloeCookies(true);setCookies()}}>Tudomásul vettem</button>
        </div>
    );
}