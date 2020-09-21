import React from "react";
import style from "../assets/css/programs.module.css";

import ProgramCard from "../components/ProgramCard";
import pagesConfig from "../assets/pagesConfig";

const { programs } = pagesConfig;

const ProgramCardsFirstRow = function() {
  return programs.programCards.firstRow.map((card, index) => (
    <ProgramCard key={index} details={card} />
  ));
};

const ProgramCardsSecondRow = function() {
  return programs.programCards.secondRow.map((card, index) => (
    <ProgramCard key={index} details={card} />
  ));
};

const ProgramCardsThirdRow = function() {
  return programs.programCards.thirdRow.map((card, index) => (
    <ProgramCard key={index} details={card} />
  ));
};

function Programs() {
  return (
    <div className={style["programs-wrapper"]}>
      <div className={style["header"]}></div>
      <label className={`${style["header-text"]} size-90 extra-bold`}>
        Programjaink
      </label>
      <div className={style["cards-wrapper"]}>
        <ProgramCardsFirstRow />
        <ProgramCardsSecondRow />
        <ProgramCardsThirdRow />
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Szeretnél csatlakozni?
        </h4>
        <div className={style["footer-buttons-wrapper"]}>
          <button className={style["footer-button-details"]}>Érdeklődöm</button>
          <button className={style["footer-button-sign-up"]}>
            Jelentkezem
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programs;
