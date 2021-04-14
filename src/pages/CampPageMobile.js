import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";

export default function CampPageMobile({ props }) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`)
    .default;

  return (
    <div style={{ position: "relative" }}>
      <div className={style["header-wrapper"]}>
        <div
          className={style["header"]}
          style={{ backgroundImage: "url(" + backgroundImage + ")" }}
        ></div>
        <label className={`${style["state-location"]} size-13`}>
          <Link to="/programs">Vissza programjainkra</Link>
        </label>
        <label
          className={`${style["header-title"]} size-90 extra-bold`}
        >
          {props.opt.title}
        </label>
      </div>
      <div className={style["body"]}>
        <div className={style["info"]}>
          <div className={style["camp-row"]}>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp01.jpg`).default} alt=""/>
            <div className={style["camp-row-details"]}>
              <label className="size-54 bold">{ props.opt.content.first_block.title }</label>
              <label className="size-24" dangerouslySetInnerHTML={{ __html: props.opt.content.first_block.place }}></label>
              <label className="size-20">{ props.opt.content.first_block.programs }</label>
              <label className="size-20" dangerouslySetInnerHTML={{ __html: props.opt.content.first_block.price }}></label>
              <label className="size-20" dangerouslySetInnerHTML={{ __html: props.opt.content.first_block.block_desc }}></label>
              {/* TODO: add link */}
              <button className={`${style['btn']} ${style['primary']}`}>Jelentkezem</button>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <div className={style["camp-row-details"]}>
              <label className="size-54 bold">{ props.opt.content.second_block.title }</label>
              <label className="size-24" dangerouslySetInnerHTML={{ __html: props.opt.content.first_block.place }}></label>
              <label className="size-20">{ props.opt.content.second_block.programs }</label>
              <label className="size-20" dangerouslySetInnerHTML={{ __html: props.opt.content.second_block.price }}></label>
              {/* TODO: add link */}
              <button className={`${style['btn']} ${style['primary']}`}>Jelentkezem</button>
            </div>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp02.jpg`).default} alt=""/>
          </div>
          <div className={style["details"]}>
            <p
              className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} ${style["first-paragraph"]} size-20`}
            >
              {props.opt.detailsOne}
            </p>
          </div>
          <div className={`${style["camp-row"]} ${style["cover"]} ${style["bg03"]}`}>
            <div className={style["apply-box"]}>
              <div className={style["block"]}>
                <label className="size-54 bold">Jelentkezz most!</label>
                <label className="size-36 bold">4 féle táncstílus</label>
                <label className="size-36 bold">Tánc és gimnasztika</label>
                <label className="size-36 bold">Tánctermi és szabadtéri programok</label>
                <label className="size-36 bold">Táborzáró előadás</label>
              </div>
              <div className={style["block"]}>
                <label className="size-54 bold">Kapcsolat</label>
                <label className="size-36 bold">Solti Eszter</label>
                <label className="size-36 bold">omisktabor@gmail.com</label>
                <label className="size-36 bold">06-30-237-9233</label>
              </div>
            </div>
          </div>
          <div className={`${style["camp-row"]} ${style["cover"]} ${style["bg04"]}`}>
            <label className="size-54 bold">Programjaink</label>
            {/* TODO: add links */}
            <div className={style['button-box']}>
              <button className={`${style['btn']} ${style['secondary']}`}>Művészi torna</button>
              <button className={`${style['btn']} ${style['secondary']}`}>Mozdulatművészet</button>
            </div>
            <div className={style['button-box']}>
              <button className={`${style['btn']} ${style['secondary']}`}>Kéziszeres gimnasztika</button>
              <button className={`${style['btn']} ${style['secondary']}`}>Modern tánc</button>
            </div>
            <div className={style['button-box']}>
              <button className={`${style['btn']} ${style['secondary']}`}>Koreográfia</button>
              <button className={`${style['btn']} ${style['secondary']}`}>Kézműves</button>
              <button className={`${style['btn']} ${style['secondary']}`}>Szabad tánc</button>
            </div>
            <button className={`${style['btn']} ${style['secondary']}`}>Részletesen a  programokról</button>
          </div>
          <div className={`${style["camp-row"]} ${style["cover"]} ${style["bg05"]}`}>
            <div className={style["day-goes-by-box"]}>
              <label className="size-36 bold">Hogyan telik egy nap</label>
              <label className="size-20">
                Már reggel 8 órától várjuk a táborozókat, a programok pedig 9 órakor kezdődnek. <strong>Közös reggel tornával és csapatépítő játékkal</strong> indul a nap, ahol a felkészülünk a táncórákra és jobban megismerkedünk. 
              </label>
              <button className={`${style['btn']} ${style['secondary']}`}>Tovább olvasom</button>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp06.jpg`).default} alt=""/>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp07.jpg`).default} alt=""/>
          </div>
          <div className={`${style["camp-row"]} ${style["cover"]} ${style["bg08"]}`}>
            <div className={style["daycare-box"]}>
              <label className="size-36 bold">Jelentkezés</label>
              <label className="size-20">
                A napközis táborokba az alábbi linken található <strong>jelentkezési lap online kitöltésével lehet:</strong>
              </label>
              <Link to={'/programs/camp'} className={`${style['apply-link']} size-20 bold`}>Jelentkezési lap</Link>
              <button className={`${style['btn']} ${style['secondary']}`}>Tovább olvasom</button>
            </div>
          </div>
          <div className={style["camp-row"]}>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp09.jpg`).default} alt=""/>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp10.jpg`).default} alt=""/>
          </div>
          <div className={style["camp-row"]}>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp12.jpg`).default} alt=""/>
            <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp13.jpg`).default} alt=""/>
          </div>
          <div className={`${style["camp-row"]} ${style["cover"]} ${style["bg14"]}`}>
            <div className={style["faq-box"]}>
              <label className="size-36 bold">Gyakori kérdések</label>
              <label className="size-20 bold">
                Mikor kezdődik a tábori nap és meddig tart?
              </label>
              <label className="size-20">
                A táborba minden nap reggel 8 órától lehet érkezni, a programok  9 órakor kezdődnek. 8 órától biztosítjuk a tanMikor kezdődik a tábori nap és meddig tart?ári felügyeletet, így akinek reggel sietősebb, hozhatja kezdésre gyermekét, de akinek kényelmesebb, lehet csak a programok kezdetére érkezni.<br/>...
              </label>
              <button className={`${style['btn']} ${style['secondary']}`}>Tovább olvasom</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
