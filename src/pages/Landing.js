import React, { useState } from 'react'

import '../assets/css/landing.css';

export default function Landing() {
    const [activeDot, setActiveDot] = useState(1),
            scroller = function(e) {
                if (e.deltaY > 0 && activeDot < 9) {
                    setActiveDot(activeDot + 1);
                } else if (e.deltaY < 0 && activeDot > 1) {
                    setActiveDot(activeDot - 1);
                }
            },
            isIn = function(numbers, activeDot) {
                return numbers.includes(activeDot) ? true: false;
            }

    return(
        <div className="landing" onWheel = {(e) => scroller(e)}>
            <div className={`left one ${ isIn([1,4,7], activeDot) ? "active": "" }`}></div>
            <div className={`left two ${ isIn([2,5,8], activeDot) ? "active": "" }`}></div>
            <div className={`left three ${ isIn([3,6,9], activeDot) ? "active": "" }`}></div>
            <div className="dots">
                <div onClick={() => setActiveDot(1)} className={`dot ${ activeDot === 1 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(2)} className={`dot ${ activeDot === 2 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(3)} className={`dot ${ activeDot === 3 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(4)} className={`dot ${ activeDot === 4 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(5)} className={`dot ${ activeDot === 5 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(6)} className={`dot ${ activeDot === 6 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(7)} className={`dot ${ activeDot === 7 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(8)} className={`dot ${ activeDot === 8 ? "active":""}`}></div>
                <div onClick={() => setActiveDot(9)} className={`dot ${ activeDot === 9 ? "active":""}`}></div>
            </div>
            <div className={`right one ${ isIn([1,4,7], activeDot) ? "active": "" }`}></div>
            <div className={`right two ${ isIn([2,5,8], activeDot) ? "active": "" }`}></div>
            <div className={`right three ${ isIn([3,6,9], activeDot) ? "active": "" }`}></div>
        </div>
    )
}