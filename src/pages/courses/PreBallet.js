import React from "react";
import CoursesHeader from "./CoursesHeader";

import style from "../../assets/css/preBallet.module.css";
import styleCard from "../../assets/css/courseDetailsCard.module.css";

export default function Courses() {
  const opt = {
    courseName: "Pre balett",
    color: "pink",
    img: "prebalett"
  };
  return (
    <div>
      <CoursesHeader opt={opt} />
      <div className={style["info-box"]}>
        <div className={style["info"]}>
          <h4 className="size-16 extra-bold">Important information</h4>
          <ul>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Age group:</p>
                </div>
                <div className={style["age-group-value"]}>
                  <p className="size-12 thin">4-6 years</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Cost:</p>
                </div>
                <div>
                  <p className="size-12 thin">300,-/week 1x45min</p>
                </div>
              </div>
            </li>
            <li>
              <div className={style["info-item"]}>
                <div className={style["info-item-prop"]}>
                  <p className="size-12 extra-bold">Discounts:</p>
                </div>
                <div>
                  <p className="size-12 thin">
                    For 2 siblings: - 2000.-/month/person
                  </p>
                  <p className="size-12 thin">
                    For 3 siblings - 3000,-/month/person
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={style["places"]}>
          <h4 className="size-16 extra-bold">Location:</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                Óbudai Kulturális Központ (III. San Marco út 81)
              </p>
            </li>
          </ul>
          <div className={`${style["teachers-wrapper"]}`}>
            <img
              className={`${style["teacher-image"]}`}
              src={require(`../../assets/img/teachers/taylor_eszti.jpg`)}
              alt=""
            />
          </div>
        </div>
        <div className={style["people-for"]}>
          <h4 className="size-16 extra-bold">We suggest this for you...</h4>
          <ul>
            <li>
              <p className="size-12 thin">
                ...If you would like to learn dance playfully
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...If you would like to learn English this way as well
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...If it would be good to learn English and dance at the same
                time
              </p>
            </li>
            <li>
              <p className="size-12 thin">
                ...If you would like to make new friends
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={style["details"]}>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">What is Pre-ballet?</h4>
            <p className="size-20 thin">
              Pre-Ballet is an introduction to the very basics of dance,
              gymnastics and ballet. Usually in ballet the routines are done in
              standing position, we make it easier and start in a seated
              position. The repeated commands during the recurring training
              actions make easier to incorporate them into childres' vocabulary
              in a native way. We hope that children will discover creative
              expression, and experience the fun of dance during these classes!
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/pre_balett_01.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">At what age can you start?</h4>
            <p className="size-20 thin">
              The classes are for ages 4-6. Our teacher Esther, who speaks
              native English demonstrates everything to the students. So it is
              not a problem if your child is still new to English. After the age
              of six, you can continue in one of our gymnastics classes.
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/pre_balett_02.jpg`)} alt="" />
          </div>
        </div>
        <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
          <div className={`${style["text"]}`}>
            <h4 className="size-36 extra-bold">What do we do during class?</h4>
            <p className="size-20 thin">
              We start every class with a few walking exercises, skips, ect.
              Then we continue with our gymnastics routines, and some jumps.
              Finally we usually have a short game, and we finish our class with
              stretches. During the class we encourage children to only speak in
              English. We learn a few basic words in the beginning that they can
              use, and later on several dance related expressions. While we
              dance, the children repeat all the instructions given by the
              teacher, and this makes learning easy and fun!
            </p>
          </div>
          <div className={styleCard["pic"]}>
            <img src={require(`../../assets/img/pre_balett_03.jpg`)} alt="" />
          </div>
        </div>
      </div>
      <div className={`${style["page-footer"]}`}>
        <h4 className={`size-36 extra-bold ${style["footer-text"]}`}>
          Évközben is tudsz jelentkezni
        </h4>
        <button className={style["footer-button"]}>Jelentkezem</button>
      </div>
    </div>
  );
}
