import React, { useState } from "react";
import { Link } from "react-router-dom";

import CoursesHeader from "./CoursesHeader";
import style from "../assets/css/course.module.css";
import styleCard from "../assets/css/courseDetailsCard.module.css";

function Paragraph({ opt }) {
  return opt.map((el, index) => (
    <p className="size-20 thin" key={`${el}-${index}`}>
      {el}
    </p>
  ));
}

function ForWhomList({ opt }) {
  return opt.map((el, index) => (
    <li key={index}>
      <p className="size-20 thin" key={`${el}-${index}`}>
        {el}
      </p>
    </li>
  ));
}

function Places({ opt }) {
  return opt.map((el, index) => {
    return (
      <div
        key={`${index}-${el.name}`}
        className={`${style["place-item-wrapper"]}`}
      >
        <div className={`${style["place-date"]}`}>
          <p className="extra-bold size-20 thin">{el.name}</p>
          <p className={`${style["address"]} extra-bold size-20 thin`}>
            {el.address}
          </p>
        </div>
        <div className={`${style["place-appointment"]}`}>
          <Paragraph opt={el.appointments} />
        </div>
      </div>
    );
  });
}

export default function Course({ pageConfig }) {
  const [activeTab, setActiveTab] = useState("info");
  const onTabHeaderClickHandler = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <div>
      {pageConfig.opt && <CoursesHeader opt={pageConfig.opt} />}
      {pageConfig.title && (
        <label className={`size-70 ${style["camp-title"]}`}>
          {pageConfig.title}
        </label>
      )}
      {pageConfig.info && (
        <div className={style["info-box"]}>
          <div className={`${style["info-box-header"]}`}>
            <h3
              onClick={(e) => onTabHeaderClickHandler("info")}
              className={` ${
                activeTab === "info" ? style["active-header-tab"] : ""
              }  size-36 extra-bold`}
            >
              Hasznos infók
            </h3>
            <h3
              onClick={(e) => onTabHeaderClickHandler("location")}
              className={` ${
                activeTab === "location" ? style["active-header-tab"] : ""
              }  size-36 extra-bold`}
            >
              Helyszíneink
            </h3>
          </div>
          <div
            className={` ${activeTab !== "info" ? style["inactive-tab"] : ""} ${
              style["info"]
            }`}
          >
            <div className={style["info-item"]}>
              <div className={style["column-first"]}>
                <p className="size-20 extra-bold">
                  {pageConfig.info.cost.name}
                </p>
              </div>
              <div className={style["column-second"]}>
                <Paragraph opt={pageConfig.info.cost.occasions} />
              </div>
              <div className={style["column-third"]}>
                <Paragraph opt={pageConfig.info.cost.prices} />
              </div>
            </div>
            {pageConfig.info.discount ? (
              <>
                <div className={style["info-item"]}>
                  <div className={style["column-first"]}>
                    <p className="size-20 extra-bold">
                      {pageConfig.info.discount.name}
                    </p>
                  </div>
                  <div className={style["column-second"]}>
                    <Paragraph opt={pageConfig.info.discount.sibling} />
                  </div>
                  <div className={style["column-third"]}>
                    <Paragraph opt={pageConfig.info.discount.prices} />
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            <div className={style["info-item"]}>
              <div className={style["column-first"]}>
                <p className="size-20 extra-bold">
                  {pageConfig.info.ages.name}
                </p>
              </div>
              <div className={style["column-second"]}>
                <Paragraph opt={pageConfig.info.ages.ageGroup} />
              </div>
              <div className={style["column-third"]}></div>
            </div>
          </div>
          <div
            className={` ${
              activeTab !== "location" ? style["inactive-tab"] : ""
            } ${style["places"]}`}
          >
            <Places opt={pageConfig.places} />
          </div>
        </div>
      )}
      <div className={style["details"]}>
        {pageConfig.forWhom && (
          <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
            <div className={`${style["text"]}`}>
              <h4 className="size-36 extra-bold">{pageConfig.forWhom.title}</h4>
              <ul>
                <ForWhomList opt={pageConfig.forWhom.description} />
              </ul>
            </div>
            <div className={styleCard["pic"]}>
              <img
                src={
                  require(`../assets/img/courses/${pageConfig.forWhom.img}`)
                    .default
                }
                alt=""
              />
            </div>
          </div>
        )}
        {pageConfig.aboutCourse && (
          <div className={`${style["card-wrapper"]}`}>
            <div className={`${style["text"]}`}>
              <h4 className="size-36 extra-bold">
                {pageConfig.aboutCourse.title}
              </h4>
              <p className="size-20 thin">
                {pageConfig.aboutCourse.description}
              </p>
            </div>
            <div className={styleCard["pic"]}>
              <img
                src={
                  require(`../assets/img/courses/${pageConfig.aboutCourse.img}`)
                    .default
                }
                alt=""
              />
            </div>
          </div>
        )}
        {pageConfig.whenStart && (
          <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
            <div className={`${style["text"]}`}>
              <h4 className="size-36 extra-bold">
                {pageConfig.whenStart.title}
              </h4>
              <p className="size-20 thin">{pageConfig.whenStart.description}</p>
            </div>
            <div className={styleCard["pic"]}>
              <img
                src={
                  require(`../assets/img/courses/${pageConfig.whenStart.img}`)
                    .default
                }
                alt=""
              />
            </div>
          </div>
        )}
        {pageConfig.structure && (
          <div className={`${style["card-wrapper"]}`}>
            <div className={`${style["text"]}`}>
              <h4 className="size-36 extra-bold">
                {pageConfig.structure.title}
              </h4>
              <p className="size-20 thin">{pageConfig.structure.description}</p>
            </div>
            <div className={styleCard["pic"]}>
              <img
                src={
                  require(`../assets/img/courses/${pageConfig.structure.img}`)
                    .default
                }
                alt=""
              />
            </div>
          </div>
        )}
        {pageConfig.sections &&
          pageConfig.sections.map((section, index) => (
            <div
              className={`${style["card-wrapper"]} ${
                index % 2 === 0 ? style["reverse"] : ""
              } `}
              key={index}
              id={section.id}
            >
              <div className={`${style["text"]}`}>
                <h4 className={`size-36 extra-bold ${style["camp-subtitle"]}`}>
                  {section.title}
                </h4>
                <p className="size-20 thin">{section.description}</p>
              </div>
              <div className={styleCard["pic"]}>
                <img
                  src={require(`../assets/img/courses/${section.img}`).default}
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
      {pageConfig.footer && (
        <div className={`${style["page-footer"]}`}>
          <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
            Szeretnél csatlakozni?
          </h4>
          <div className={style["footer-buttons-wrapper"]}>
            <Link
              className={`${style["footer-button-details"]} size-15`}
              to="/contact"
            >
              Érdeklődöm
            </Link>
            <Link className={style["footer-button-sign-up"]} to="/beiratkozas">
              Jelentkezem
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
