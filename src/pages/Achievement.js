import React from "react";
import style from "../assets/css/achievement.module.css";

import { Link } from "react-router-dom";

export default function Achievement(props) {
  return (
    <div>
      <div className={style["header"]}>
        <label className={`${style["state-location"]} size-13`}>
          <Link to="/programs">Prograimjaink</Link> > <Link to="/programs/competitions">Versenyek</Link> > Eredményeink
        </label>
        <label className={`${style["header-title"]} size-90 extra-bold`}>
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
              Magyar Látványtánc Sportszövetség Őszi Kupa
            </h4>
            <p className={`${style["last"]} size-15 thin`}>
              <span className={`${style["name"]} size-15 .thin`}>
                Éjszakai Szellő -
              </span>{" "}
              koreográfia Taylor Jennifer – művészi látványtánc kategória,
              mozdulatművészet formáció, B kategória – arany minősítés
            </p>
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
        </div>
      </div>
    </div>
  );
}
