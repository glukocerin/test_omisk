import React from "react";
import style from "../assets/css/footer.module.css";

export default function Footer() {
  return (
    <div className={style["wrapper"]}>
      <div></div>
      <div className={style["details-wrapper"]}>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Az Omiskrol</h5>
          <p className={`size-15 thin`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Kapcsolat</h5>
          <p className={`size-15 thin`}>
            Felmerülő kérdésedre Mikusik Márta, iskola titkárunk válaszol
            hétköznap 10-14 óra között hívhatod.
          </p>
          <p className={`size-15 thin`}>
            Telefon: 06-1-2000-138 <br />
            Mobil: 06-20-9460-848 <br />
            E-mail: iroda@omisk.hu Posta: 1021. <br />
            Budapest, Széher út 77.
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Kurzusaink</h5>
          <p className={`size-15 thin`}>
            Művészi torna <br />
            Mozdulatművészet <br />
            Modern tánc <br />
            Jazz <br />
            tánc <br />
            Pre balett <br />
            Klasszikus balett
          </p>
        </div>
        <div className={style["details-box"]}>
          <h5 className={`size-20 extra-bold`}>Helyszineink</h5>
          <p className={`size-15 thin`}>
            Óbudai Kulturális Központ <br />
            MOM Művelődési Központ <br />
            Budapest Művelődési központ <br />
            Vll. Kerületi Táncstúdió <br />
            Békásmegyeri Közösségi Ház <br />
            Virányosi Közösségi Ház Józsefvárosi Galéria és Rendezvényközpont
          </p>
        </div>
      </div>
    </div>
  );
}
