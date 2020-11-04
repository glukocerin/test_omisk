import React from "react";
import style from "../assets/css/achievement.module.css";

import { Link } from "react-router-dom";

export default function Achievement(props) {
  return (
    <div>
      <div className={style["header"]}></div>
      <div className={`${style["header-wrapper"]}`}>
        <label className={`${style["state-location"]} size-13`}>
          <Link to="/programs/competitions"> {"<"}Országos versenyeinkre</Link>{" "}
        </label>
        <label className={`${style["header-text"]} size-90 extra-bold`}>
          Eredményeink
        </label>
      </div>
      <div className={style["body"]}>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2019.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVIII. Országos Táncfesztiválok Elődöntője – Makó
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Töréspont -
              </span>{" "}
              koreográfia Lakatos Lilla – junior mozdulatművészet kategória – 3.
              díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kő, Papír, Olló -
              </span>{" "}
              koreográfia Solti Eszter – gyermek kortárstánc kategória – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVIII. Országos Junior Táncművészeti Fesztivál Döntő
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Töréspont -
              </span>{" "}
              koreográfia Lakatos Lilla – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A folyó éneke -
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVII. ORSZÁGOS BERCZIK SÁRA EMLÉKVERSENY
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A tánc geometriája -
              </span>{" "}
              koreográfia Benis Katalin – felnőtt mozdulatművészet – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Dűnék –</span>{" "}
              koreográfia Lakatos Lilla – ifjúsági mozdulatművészet – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Töréspont –
              </span>{" "}
              koreográfia Lakatos Lilla – ifjúsági mozdulatművészet – 2.
              helyezés
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Emlékül Fenyves Márknak –
              </span>{" "}
              koreogr. Mády Krisztina – ifjúsági mozdulatművészet – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Két szólamban –
              </span>{" "}
              koreogr. Mády Krisztina – junior kéziszer – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Hangulat –
              </span>{" "}
              koreogr. Paulné Zoltán Zsuzsa – junior kéziszer – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Művészi Gimnasztika Gála Országos Verseny – Törökbálint
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Harangjáték –
              </span>{" "}
              koreogr. Mády Krisztina – gyermek szabadgyakorlat – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Feketeleves –
              </span>{" "}
              koreogr. Mády Krisztina – junior szabadgyakorlat – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szólamok –
              </span>{" "}
              koreogr. Mády Krisztina – junior labdagyakorlat – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Emlékül Fenyves Márknak –
              </span>{" "}
              koreogr.Mády Krisztina – junior fátyolgyakorlat – 1.díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              IX. Tánckiállítás Verseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A folyó éneke –
              </span>{" "}
              koreográfia Pers Júlia – junior mozdulatművészet – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Álomfonalak –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Gyöngy élet –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2019.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2018.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVI. Országos Táncjáték Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egy idegen bolygón –
              </span>{" "}
              koreográfia Csöngei Barbara – moderntánc kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVII. Országos Felnőtt És Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Concerto –
              </span>{" "}
              koreográfia Pers Júlia – ifjúsági mozdulatművészet kategória – 2.
              díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Concerto –
              </span>{" "}
              koreográfia Pers Júlia – felnőtt mozdulatművészet kategória – 2.
              díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kapcsolatok és összefüggések –
              </span>{" "}
              koreogr. Benis Katalin – mozdulatműv. kategória – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVII. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Concerto –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Dűnék –</span>{" "}
              koreográfia Lakatos Lilla – mozdulatművészet kategória 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVII. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Örvénylő vizeken –
              </span>{" "}
              koreográfia Taylor Jennifer – mozdulatművészet kategória 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Örvénylő vizeken –
              </span>{" "}
              koreogr. Taylor Jennifer – gyermek mozdulatműv.kategória – 2.díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Presto –</span>{" "}
              koreográfia Mády Krisztina – junior kéziszer kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tűzmadár –
              </span>{" "}
              koreográfia Mády Krisztina – junior mozdulatművészet kategória –
              3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Orgonalila –
              </span>{" "}
              koreográfia Mády Krisztina – junior kéziszer kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Megállás nélkül –
              </span>{" "}
              koreográfia Mády Krisztina – ifjúsági kéziszer kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Rózsa –</span>{" "}
              koreográfia Mády Krisztina – felnőtt mozdulatművészet – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              VIII. Tánckiállítás Verseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Napsugarak –
              </span>{" "}
              koreográfia Csöngei Barbara – moderntánc kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Dűnék –</span>{" "}
              koreográfia Lakatos Lilla – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span
                className={`${style["last"]}${style["name"]} size-15 .thin`}
              >
                Megfakult emlék –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Művészi Gimnasztika Gála Országos Verseny – Törökbálint
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Presto –</span>{" "}
              koreográfia Mády Krisztina – junior kötélgyakorlat – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tűzmadár –
              </span>{" "}
              koreográfia Mády Krisztina – junior mozdulatművészet – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Orgonalila –
              </span>{" "}
              koreográfia Mády Krisztina – junior karikagyakorlat – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kisasszonyok –
              </span>{" "}
              koreográfia Mády Krisztina – gyermek karikagyakorlat – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Rózsa –</span>{" "}
              koreográfia Mády Krisztina – felnőtt mozdulatművészet – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vándormadarak –
              </span>{" "}
              koreográfia Mády Krisztina – ifjúsági mozdulatművészet – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Forte –</span>{" "}
              koreográfia Mády Krisztina – felnőtt buzogánygyakorlat – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Magyar Látványtánc Sportszövetség Őszi Kupa
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Éjszakai Szellő -
              </span>{" "}
              koreográfia Taylor Jennifer – művészi látványtánc kategória,
              mozdulatművészet formáció, B kategória – arany minősítés
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2018.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2017.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XV. Országos Táncjáték Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Lélekvándorlás –
              </span>{" "}
              koreográfia Csöngei Barbara – moderntánc kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Lélekvándorlás –
              </span>{" "}
              koreográfia Csöngei Barbara – moderntánc kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XV. Országos Berczik Sára Emlékverseny Gyermek Korosztály
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Suttogó szél –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 1. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XV. Országos Berczik Sára Emlékverseny Junior Korosztály
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vándormadarak –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVI. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Sarki fény –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVI. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vándormadarak –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 3. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXVI. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Izgő mozgó világítók –
              </span>{" "}
              koreográfia Taylor Jennifer – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Suttogó szél –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              VII. Országos Tánckiállítás Verseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Könnyek –
              </span>{" "}
              koreogr. Mády Krisztina – ifjúsági mozdulatműv. kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Suttogó szél –
              </span>{" "}
              koreogr. Mády Krisztina – junior mozdulatműv. kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vándormadarak –
              </span>{" "}
              koreogr. Mády Krisztina – junior mozdulatműv. kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Concerto 2. –
              </span>{" "}
              koreogr. Pers Júlia – ifjúsági mozdulatműv. kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szélcsengő –
              </span>{" "}
              koreogr. Pers Júlia – ifjúsági mozdulatműv. kategória – különdíj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Lélekvándorlás –
              </span>{" "}
              koreogr. Csöngei Barbara – ifjúsági moderntánc kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Titkos kert –
              </span>{" "}
              koreogr. Solti Eszter – gyermek mozdulatművészet kategória – 2.
              díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Titkos kert –
              </span>{" "}
              koreogr. Solti Eszter – gyermek mozdulatművészet kategória – 2.
              díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Művészi Gimnasztika Gála Országos Verseny – Törökbálint
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Vulkán –</span>{" "}
              koreográfia Mády Krisztina – felnőtt korosztály – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Örvény –</span>{" "}
              koreográfia Mády Krisztina – junior korosztály – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Suttogó szél –
              </span>{" "}
              koreográfia Mády Krisztina – gyermek korosztály – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pókháló –
              </span>{" "}
              koreográfia Benis Katalin – ifjúsági korosztály – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Sarki fény –
              </span>{" "}
              koreográfia Benis Katalin – ifjúsági korosztály – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ki lakik a borsóban –
              </span>{" "}
              koreográfia Benis Katalin – gyermek korosztály – 2. díj Benis
              Katalin, iskolánk tanára Különdíjban részesült A Legötletesebb
              Koreográfiákért.
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2017.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2016.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIV.Országos berczik sára emlékverseny ifjúsági korosztály
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szélcsengő –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Telihold –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kétszólamban -
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ritmusban -
              </span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Gyöngy élet -
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIV. Országos Berczik Sára Emlékverseny Felnőtt Korosztály
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Álmatlanság –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIV. Országos Berczik Sára Emlékverseny Gyermek Korosztály
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Esőcseppek –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Napkelte –
              </span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egymás után –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pendül a húr –
              </span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 1. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              VI. Tánckiállítás Verseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Zongorajáték –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet – különdíj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Csöppek –
              </span>{" "}
              koreogr. Mády Krisztina – gyermek mozdulatműv. kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pendül a húr –
              </span>{" "}
              koreogr. Mády Krisztina – junior mozdulatműv. kategória – különdíj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vízesés –
              </span>{" "}
              koreogr. Mády Krisztina – ifjúsági mozdulatműv. kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Látomás –
              </span>{" "}
              koreogr. Csöngei Barbara – ifjúsági mozdulatműv. kategória – 2.
              díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A lámpa körül –
              </span>{" "}
              koreogr. Lakatos Lilla – gyerek mozdulatműv. kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXV. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szélcsengő –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Vízesés –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Gyöngy élet –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Álomfonalak –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXV. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Csöppek –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Napkelte –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXV. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Zongorajáték –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egymás után –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet 3. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2016.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2015.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIII. Országos Berczik Sára Emlékverseny Gyermek Korosztály
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tűz és víz –
              </span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Olvadás –
              </span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Puzzle –</span>{" "}
              koreográfia Pers Júlia – karakter kategória – 2. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIII. Országos Berczik Sára Emlékverseny Ifjúsági Korosztály
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Sodrásban –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Elégia –</span>{" "}
              koreográfia Mády Krisztina – kéziszer kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Rondo –</span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIII. Országos Berczik Sára Emlékverseny Felnőtt Korosztály
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Staféta –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>

            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXIV. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Rondo –</span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Elégia –</span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 3. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Staféta –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 3. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Sodrásban –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pletykálkodók –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2015.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2014.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXIII. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ketyeg az óra –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXIII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Végtelen –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Perpetum mobile –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Denevérek éjszakája –
              </span>{" "}
              koreogr. Benis Katalin –karakter kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Primavera –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Erdőzsongás –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXIII. Országos Felnőtt Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Concerto –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XII. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Primavera –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Százlábú –
              </span>{" "}
              koreogr. Mády Krisztina – karakter kategória – ifjúsági 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Labdagyakorlat –
              </span>{" "}
              koreogr. Pers Júlia – kéziszer kategória – gyermek 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Denevérek éjszakája –
              </span>{" "}
              koreogr. Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szökőkút –
              </span>{" "}
              koreogr. Mády Krisztina – kéziszer kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Sirály Táncfesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Denevérek éjszakája –
              </span>{" "}
              koreogr. Benis Katalin – mozdulatművészet – ifjúsági különdíj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2014.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2013.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXII. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kaleidoszkóp –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egyszer fent, egyszer lent –
              </span>{" "}
              koreogr.Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szirmok –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A pók hálójában –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXII. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Harangjáték –
              </span>{" "}
              koreográfia Mády Krisztina – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ördöglakat –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Varázsceruzák –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXII. Országos Felnőtt Táncművészeti Fesztivál
            </h4>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pillangóhatás –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Echo –</span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              III. Tánckiállítás Kortárs- És Mozdulatművészeti Táncverseny
            </h4>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Bábuk éjszakája –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – felnőtt 5. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kaleidoszkóp –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – gyermek 5. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egyszer fent, egyszer lent –
              </span>{" "}
              koreogr. Pers Júlia –mozdulatművészet kat. –gyermek 4. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ördöglakat –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – ifjúsági 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Pillangóhatás –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – felnőtt 4. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Echo –</span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – felnőtt 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tekerjük a kockát –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – gyermek 6. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egy folyó éneke –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – ifjúsági 4. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Működésben –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória – felnőtt 3. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Harangjáték –
              </span>{" "}
              koreogr.Mády Krisztina – mozdulatművészet kategória – gyermek 3.
              díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Felhők –</span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – ifjúsági 1.
              díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ketyeg az óra –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 3. és
              különdíj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Akvárium –
              </span>{" "}
              koreogr. Benis Katalin – mozdulatművészet kategória – junior 1.
              díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XI. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szirmok –
              </span>{" "}
              koreogr. Benis Katalin – kéziszer kategória – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A pók hálójában –
              </span>{" "}
              koreogr. Benis Katalin – kéziszer kategória – 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Békakánon –
              </span>{" "}
              koreogr. Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Harangjáték –
              </span>{" "}
              koreogr. Mády Krisztina – mozdulatművészet kategória – 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Varázsceruzák –
              </span>{" "}
              koreogr. Mády Krisztina – kéziszer kategória – 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ketyeg az óra –
              </span>{" "}
              koreogr. Mády Krisztina – karakter kategória – 2. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Esély –</span>{" "}
              A Művészetre Országos Táncfesztivál Pécs
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Akvárium –
              </span>{" "}
              koreogr. Benis Katalin – szabad műfaj – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egyszer fent, egyszer lent –
              </span>{" "}
              koreogr. Pers Júlia – szabad műfaj – 3. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Echo –</span>{" "}
              koreogr. Pers Júlia – szabad műfaj – 1. díj
            </p>
            <p className={` size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tekerjük a kockát –
              </span>{" "}
              koreogr. Pers Júlia – szabad műfaj – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szárnypróba –
              </span>{" "}
              koreogr. Pers Júlia – szabad műfaj – 3. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2013.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2012.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXI. Országos Felnőtt Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Átalakulat –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXI. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Metronóm –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Működésben –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XXI. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Cseresznyevirágzás –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              X. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Átalakulat –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Metronóm –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – ifjúsági 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Működésben –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – felnőtt 1.
              díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kotta nélkül –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – gyermek 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kavargó hópelyhek –
              </span>{" "}
              koreogr. Pers Júlia – mozdulatművészet kategória –gyermek 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Villanó vonalak –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória -2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Cseresznyevirágzás –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória -2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Hullám etüd –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – gyermek
              3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Sirály Táncfesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Cseresznyevirágzás –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet – junior 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Esély A Művészetre Országos Táncfesztivál Pécs
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Keretek között –
              </span>{" "}
              koreográfia Pers Júlia – szabad műfaj – 1. dí
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Bábuk éjszakája –
              </span>{" "}
              koreográfia Pers Júlia – szabad műfaj – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Működésben –
              </span>{" "}
              koreográfia Pers Júlia – szabad műfaj – 1. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2012.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2011.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XX. Országos Ifjusági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egy folyó éneke –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Számháború –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XX. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Fordul a kocka –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Akvárium –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XX. Országos Felnőtt Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Bábuk éjszakája –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              IX. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Buzogány gyakorlat –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória – 2. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szalaggyakorlat –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória -1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Akvárium –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Sirály Táncfesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Akvárium –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 4. díj
            </p>
            2
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2011.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2010.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIX. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kínai tánc –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIX. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Felhangolva –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tavaszi hangulat –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIX. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szárnypróba –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Lépésről lépésre –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              VIII. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kötélgyakorlat –
              </span>{" "}
              koreográfia Pers Júlia – kéziszer kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tavaszi hangulat –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 1.díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2010.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2009.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVIII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Bourrée –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Keretek között –
              </span>{" "}
              koreográfia Pers Júlia – kortárstánc kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVIII. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Eső után –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória 2. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVIII. Országos gyermek táncművészeti fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Mézengúzok –
              </span>{" "}
              koreográfia Pers Júlia – karaktertánc kategória 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szivárványos –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Sirály Táncfesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}></span>{" "}
              Gyermek, junior és ifjúsági produkciókért az iskola különdíjban
              részesült
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              VII. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szivárványos
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Labdagyakorlat
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – különdíj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2009.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2008.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVII. Országos Gyermek Táncművészeti Fesztivál2
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tücsökzene –
              </span>{" "}
              koreográfia Pers Júlia – karaktertánc kategória – 1. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Libbenő kendők –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tűnő(i)dő –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVII. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Mars a marsra –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Helyedbe lépek –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 3. díj
            </p>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Karikagyakorlat –
              </span>{" "}
              koreográfia Benis Katalin – kéziszer kategória – 1. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Libbenő kendők –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – 2. díj
            </p>
          </div>
          {/* <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2008.jpg`)}
            />
          </div> */}
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2007.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              V. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kötélgyakorlat –
              </span>{" "}
              koreográfia Pers Júlia - mozdulatművészet kategória – különdíj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              Amatőr Moderntánc Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Majomparádé –
              </span>{" "}
              koreográfia – Pers Júlia – aranyfokozat
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XVI. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Ki szelet vet –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória 1. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2007.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2006.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              IV. Országos Berczik Sára Emlékverseny
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Egerek és macskák –
              </span>{" "}
              koreográfia Benis Katalin – mozdulatművészet kategória – különdíj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2006.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2005.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIV. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Szelek útján –
              </span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIV. Országos Junior Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>2X6 –</span>{" "}
              koreográfia Pers Júlia - mozdulatművészet kategória – 2. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2005.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2004.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIII. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Bohócok a színpadon –
              </span>{" "}
              koreográfia Pers Júlia - karakter kategória – 1. díj
            </p>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XIII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Tükörképek –
              </span>{" "}
              koreográfia Pers Júlia - mozdulatművészet kategória – 1. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2004.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2003.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XII. Országos Ifjúsági Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Kánon –</span>{" "}
              koreográfia Pers Júlia – mozdulatművészet kategória – 2. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2003.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2002.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              XI. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>Rondo –</span>{" "}
              koreográfia: Pers júlia – mozdulatművészeti kategória – 2. díj
            </p>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Kínai tánc –
              </span>{" "}
              koreográfia Pers Júlia – karakter kategória – 1. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2002.jpg`)}
            />
          </div>
        </div>
        <div className={style["wrapper"]}>
          <div>
            <h2 className={`${style["year"]} size-120 extra-bold`}>2001.</h2>
          </div>
          <div className={style["achievement"]}>
            <h4 className={`${style["title"]} size-24 extra-bold`}>
              X. Országos Gyermek Táncművészeti Fesztivál
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                A fedélzeten –
              </span>{" "}
              koreográfia: Pers júlia – karakter kategória – 2. díj
            </p>
          </div>
          <div className={style["img-wrapper"]}>
            <img
              alt="kep"
              src={require(`../assets/img/achievements/2001.jpg`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
