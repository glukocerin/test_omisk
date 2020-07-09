import React, { useState } from 'react'

import '../assets/css/landing.css';

export default function Landing() {
    const [activeDot, setActiveDot] = useState(1),
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
                <label className="title extra-bold size-83">Mozgásba hozzuk a zenét!</label>
                <label className="sub-title extra-bold size-32">Óbuda Mozgásművészeti Iskola</label>
                <label className="text extra-bold size-54">»</label>
            </div>
            <div className={`left two ${ activeDot === 2 ? "active": "" }`}></div>
            <div className={`left three ${ activeDot === 3 ? "active": "" }`}></div>
            <div className={`left four ${ activeDot === 4 ? "active": "" }`}></div>
            <div className={`left five ${ activeDot === 5 ? "active": "" }`}></div>
            <div className={`left six ${ activeDot === 6 ? "active": "" }`}></div>
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
            <div className={`right six ${ activeDot === 6 ? "active": "" }`}></div>
            <div className={`right seven ${ activeDot === 7 ? "active": "" }`}></div>
            <div className={`right eight ${ activeDot === 8 ? "active": "" }`}></div>
        </div>
    )
}