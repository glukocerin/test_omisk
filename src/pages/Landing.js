import React from 'react'

import '../assets/css/landing.css';

export default function Landing() {
    return(
        <div className="landing">
            <div className="left one active"></div>
            <div className="left two"></div>
            <div className="dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="right one active"></div>
            <div className="right two"></div>
        </div>
    )
}