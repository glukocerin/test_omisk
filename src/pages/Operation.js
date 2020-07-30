import React, { useState } from "react";
import '../assets/css/operation.css';

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

export default function Operations() {
  const [ActiveMenuItem, setActiveMenuItem] = useState(null);

  return (
    <div className="operation">
      <div className="operation-header"></div>
      <label className="title size-90 extra-bold">Működésünk</label>
      <div className="operation-content">
        <div className="drop-down-list">
            <div className={`info primary ${ ActiveMenuItem === 1 && 'active' }`} onClick={() => setActiveMenuItem(1) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>
                <label className="info-label size-32 extra-bold">Általános tájékoztató a jelentkezés menetéről és az Iskola rendjéről</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 2 && 'active' }`} onClick={() => setActiveMenuItem(2) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">csatlakozás év közben</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 3 && 'active' }`} onClick={() => setActiveMenuItem(3) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">tandíjak, befizetés</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 4 && 'active' }`} onClick={() => setActiveMenuItem(4) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">engedmények</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 5 && 'active' }`} onClick={() => setActiveMenuItem(5) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">hiányzás</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 6 && 'active' }`} onClick={() => setActiveMenuItem(6) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">öltözet</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info ${ ActiveMenuItem === 7 && 'active' }`} onClick={() => setActiveMenuItem(7) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-24 extra-bold">egyéb kiadások</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info primary ${ ActiveMenuItem === 8 && 'active' }`} onClick={() => setActiveMenuItem(8) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-32 extra-bold">Tanév rendje, 2020</label>
                <div className="info-informations">

                </div>
            </div>
            <div className={`info primary ${ ActiveMenuItem === 8 && 'active' }`} onClick={() => setActiveMenuItem(8) }>
                <PlusSign className="plus-sign"/>
                <MinusSign className="minus-sign"/>                            
                <label className="info-label size-32 extra-bold">Tájékoztató kezdő ovis növendékeink szüleinek</label>
                <div className="info-informations">

                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
