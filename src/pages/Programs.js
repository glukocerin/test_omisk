import React from "react";
import style from "../assets/css/programs.module.css";

import ProgramCard from "../components/ProgramCard";
import pagesConfig from "../assets/pagesConfig";

const { programs, ...rest } = pagesConfig;

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
    <div>
      <div className={style["header"]}></div>
      <h1 className={`${style["header-text"]} size-90 extra-bold`}>
        Programjaink
      </h1>
      <div className={style["wrapper"]}>
        <div className={style["cards-wrapper"]}>
          <ProgramCardsFirstRow />
        </div>
        <div className={style["cards-wrapper"]}>
          <ProgramCardsSecondRow />
        </div>
        <div className={style["cards-wrapper"]}>
          <ProgramCardsThirdRow />
        </div>
      </div>
    </div>
  );
}

export default Programs;
