import React, { useState } from "react";
import "../assets/css/operation.css";

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";
import { ReactComponent as DownloadIcon } from "../assets/img/icons/arrow_down.svg";

import pagesConfig from "../assets/pagesConfig";

const { operations } = pagesConfig;

const OperationElements = function(props) {
  return operations.map((operation, index) => (
    <div
      className={`info  ${operation.role === "primary" && "primary"} ${(props
        .menuItem.child === index ||
        operation.id === props.menuItem.parent) &&
        "active"}`}
      onClick={() =>
        props.setActive({
          parent:
            props.menuItem.parent === operation.parentId &&
            operation.role === "primary"
              ? null
              : operation.parentId,
          child:
            props.menuItem.child === operation.id ||
            (props.menuItem.parent === operation.parentId &&
              operation.role === "primary")
              ? null
              : operation.id
        })
      }
      key={index}
    >
      <div className="info-title">
        <PlusSign className={`plus-sign ${operation.role === "secondary" && 'small'}`} />
        <MinusSign className={`minus-sign ${operation.role === "secondary" && 'small'}`} />
        <label className={`info-label extra-bold ${operation.role === "primary" ? 'size-32': 'size-24'}`}>{operation.title}</label>
      </div>
      <div
        className={`info-informations ${!operation.description &&
          "hidden"} size-20 thin`}
      >
        {operation.description && operation.description}
      </div>
    </div>
  ));
};

export default function Operations() {
  const [ActiveMenuItem, setActiveMenuItem] = useState({
    parent: null,
    child: null
  });

  return (
    <div className="operation">
      <div className="operation-header"></div>
      <label className="title size-90 extra-bold">Működésünk</label>
      <div className="operation-content">
        <div className="drop-down-list">
          <OperationElements
            menuItem={ActiveMenuItem}
            setActive={setActiveMenuItem}
          />
        </div>
        <label className="downloads size-54 bold">Letöltések</label>
        <label className="download-title size-24 extra-bold">
          Letölthető dokumentumok
        </label>
        <a href="https://omisk.hu/documents/jelentkezesi_lap+beleegyezo_nyilatkozat.docx" target="_blank" rel="noopener noreferrer" className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Jelentkezési lap + Beleegyező nyilatkozat
          </label>
        </a>
        <a href="https://omisk.hu/documents/OMISK_Tajekoztato_a_legkisebbek_szuleinek.docx" target="_blank" rel="noopener noreferrer"  className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">Tájékoztató kezdő óvodás növendékeink szüleinek</label>
        </a>
        <a href="https://omisk.hu/documents/ruha_meretek.jpg" target="_blank" rel="noopener noreferrer"  className="label-with-icon margin-bottom">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Ruha méretek
          </label>
        </a>
      </div>
    </div>
  );
}
