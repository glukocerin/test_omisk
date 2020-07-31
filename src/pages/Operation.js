import React, { useState } from "react";
import '../assets/css/operation.css';

import { ReactComponent as PlusSign } from "../assets/img/icons/plus.svg";
import { ReactComponent as MinusSign } from "../assets/img/icons/minus.svg";

import pagesConfig from "../assets/pagesConfig";

const { operations, ...rest } = pagesConfig;

const OperationElements = function(props) {
  return operations.map((operation, index) => (
    <div className={`info  ${ operation.role === 'primary' && 'primary' } ${ props.menuItem === index+1 && 'active' }`} onClick={() => props.setActive(index+1) } key={index}>
        <PlusSign className="plus-sign"/>
        <MinusSign className="minus-sign"/>
        <label className="info-label size-32 extra-bold">{operation.title}</label>
        <div className="info-informations">
            {operation.description && operation.description}
        </div>
    </div>
  ));
};

export default function Operations() {
  const [ActiveMenuItem, setActiveMenuItem] = useState(null);

  return (
    <div className="operation">
      <div className="operation-header"></div>
      <label className="title size-90 extra-bold">Működésünk</label>
      <div className="operation-content">
        <div className="drop-down-list">
            <OperationElements menuItem={ActiveMenuItem} setActive={setActiveMenuItem} />
        </div>
      </div>
    </div>
  );
}
