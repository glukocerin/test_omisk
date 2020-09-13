import React, { useState } from "react";
import "../assets/css/operation.css";

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";
import { ReactComponent as DownloadIcon } from "../assets/img/icons/arrow_down.svg";

import pagesConfig from "../assets/pagesConfig";

const { operations, ...rest } = pagesConfig;

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
          Hasznos dokumentumok
        </label>
        <label className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Általános tájékoztató a jelentkezés menetéről és az Iskola rendjéről
          </label>
        </label>
        <label className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">Tanév rendje</label>
        </label>
        <label className="label-with-icon margin-bottom">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Jelentkezéssel kapcsolat hasznos információk
          </label>
        </label>
        <label className="download-title size-24 extra-bold">
          Jelentkezéshez szükséges dokumentumok
        </label>
        <label className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Jelentkezési lap a beiratkozáshoz
          </label>
        </label>
        <label className="label-with-icon">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Beleegyező nyilatkozat a beiratkozáshoz
          </label>
        </label>
        <label className="label-with-icon margin-bottom">
          <DownloadIcon className="download-icon" />
          <label className="download-text size-20 thin">
            Tájékoztató kezdő ovis növendékeink szüleinek
          </label>
        </label>
      </div>
    </div>
  );
}
