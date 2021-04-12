import React, { useState, useEffect } from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/blog.css";

import { Link } from "react-router-dom";
import Modal from "../components/Modal";

import { ReactComponent as Kupa } from "../assets/img/icons/kupa.svg";
import { ReactComponent as ArrowRight } from "../assets/img/icons/arrow_right.svg";

import pagesConfig from "../assets/pagesConfig";
const { teachers } = pagesConfig;

const TeacherCards = function () {
  let teachersCopy = Object.assign(teachers);

  teachersCopy.cards = teachersCopy.cards.filter((teacher) => {
    return ['Solti Eszter', 'Bozsókiné Taylor Jennifer', 'Benis Katalin', 'Dávid Luca', 'Csöngei Barbara', 'Kovács Bea', 'Markolt-Rózsa Réka', 'Taylor Esther'].includes(teacher.name);
  });


  return teachersCopy.cards.map((card, index) => (
    <Link to={{ pathname: "/teacher", state: card }} key={index}>
      <div className={style["card"]}>
        <img
          src={require(`../assets/img/teachers/${card.picture}`).default}
          alt=""
        />
        <span className={`${style["teacher-name"]} size-28 extra-bold`}>{card.name}  <ArrowRight className={style["arrow"]} /></span>
      </div>
    </Link>
  ));
};

const generateTeacherLinks = function(links) {
  return links.map((link, index) => {
    let card = teachers.cards.find((teachercard) => {
      return teachercard.name === link;
    });

    return <Link className={style['teacher-link']} to={{ pathname: "/teacher", state: card }} key={index}>{ link }</Link>
  })
}

const Images = function ({ gallery }) {
  const images = gallery.map((img, index) => {
    return require(`../assets/img/programs/${img}.jpg`).default;
  });

  let top = useCurrentScrollTop(),
    imageWrapper = document.querySelector('[class*="images"]'),
    imageWrapperTop = imageWrapper ? imageWrapper.offsetTop : 0,
    imageWrapperHeight = imageWrapper ? imageWrapper.offsetHeight : 0,
    topToApply =
      top > imageWrapperTop - imageWrapperHeight + imageWrapperHeight / 3
        ? (top - imageWrapperHeight - imageWrapperHeight / 3) / 5
        : 0;

  return images.map((img, index) => {
    return (
      <img
        className={style[`image-${index}`]}
        style={{ top: topToApply, bottom: topToApply }}
        key={index}
        src={img}
        alt=""
      />
    );
  });
};

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWitdh() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return width;
}

const getScrollTop = () => document.getElementById("root").scrollTop;

function useCurrentScrollTop() {
  // save current window width in the state object
  let [top, setTop] = useState(getScrollTop());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const scrollListener = () => {
      // change width from the state object
      setTop(document.querySelector(".App").scrollTop || getScrollTop());
    };
    // set resize listener
    window.addEventListener("scroll", scrollListener, true);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("scroll", scrollListener, true);
    };
  }, []);

  return top;
}

export default function ProgramPage(props) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`)
    .default;

  const [isModalOpen, setModalOpen] = useState(false);

  let width = useCurrentWitdh();

  let bg = require(`../assets/img/programs/${props.opt.videoImg}.jpg`).default;
  return props.opt.title !== 'Nyári tánctábor' ? 
    (
      <div style={{ position: "relative" }}>
        <Modal
          isOpen={isModalOpen}
          setModalOpen={setModalOpen}
          videos={props.opt.videos}
        />
        <div className={style["header-wrapper"]}>
          <div
            className={style["header"]}
            style={{ backgroundImage: "url(" + backgroundImage + ")" }}
          ></div>
          <label className={`${style["state-location"]} size-13`}>
            <Link to="/programs">Vissza programjainkra</Link>
          </label>
          <label
            className={`${style["header-title"]} size-90 extra-bold ${
              props.opt.title === "Versenyek" && style["achievement"]
            }`}
          >
            {props.opt.title}
          </label>
          {props.opt.title === "Versenyek" ? (
            <div className={`${style["achievement-wrapper"]}`}>
              <Kupa />
              <Link
                className={`${style["achievement-button"]} size-12`}
                to="/programs/achievements"
              >
                Versenyeredményeink
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={style["body"]}>
          <div className={style["info"]}>
            <div className={style["details"]}>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} ${style["first-paragraph"]} size-20`}
              >
                {props.opt.detailsOne}
              </p>
              <div className={`${style["video-wrapper"]}`}>
                <button
                  className={`${style["open-video"]}`}
                  onClick={() => setModalOpen(true)}
                >
                  <label
                    className={`${style["open-video-label"]} size-36 extra-bold`}
                  >
                    {props.opt.title}
                  </label>
                  <span className="size-15 extra-bold">Videó lejátszása</span>
                </button>
                <img
                  className={`${style["video-bg"]}`}
                  src={bg}
                  alt="super meaningfull text"
                />
              </div>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${
                  !!props.opt.detailsThree ? "" : style["padding-bottom"]
                } size-20`}
              >
                {props.opt.detailsTwo}
              </p>
              {props.opt.detailsThree ? (
                <p
                  className={`${style["details-text"]} ${
                    !!props.opt.detailsFour ? "" : style["padding-bottom"]
                  } size-20`}
                >
                  {props.opt.detailsThree || ""}
                </p>
              ) : (
                ""
              )}
              {props.opt.detailsFour ? (
                <p
                  className={`${style["details-text"]} ${style["padding-bottom"]} size-20`}
                >
                  {props.opt.detailsFour || ""}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className={style["images"]} style={{ height: width / 2 }}>
          <Images gallery={props.opt.gallery} />
        </div>
      </div>
    )
    : 
    (
      <div style={{ position: "relative" }}>
        <Modal
          isOpen={isModalOpen}
          setModalOpen={setModalOpen}
          videos={props.opt.videos}
        />
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
            <div className={style["details"]}>
              <p
                className={`${style["details-text"]} ${style["padding-top"]} ${style["padding-bottom"]} ${style["first-paragraph"]} size-20`}
              >
                {props.opt.detailsOne}
              </p>
            </div>
            <div className={style["camp-row"]}>
              <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp01.jpg`).default} alt=""/>
              <div className={style["camp-row-details"]}>
                <label className="size-54 bold">{ props.opt.content.first_block.title }</label>
                <label className="size-24" dangerouslySetInnerHTML={{ __html: props.opt.content.first_block.place }}></label>
                <label className="size-20">{ props.opt.content.first_block.programs }</label>
                <label className="size-20"><span className="bold">Táborvezető: </span>{ generateTeacherLinks( [props.opt.content.first_block.leader] ) }</label>
                <label className="size-20"><span className="bold">Tanárok: </span>{ generateTeacherLinks(props.opt.content.first_block.teachers) }</label>
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
                <label className="size-20"><span className="bold">Táborvezető: </span>{ generateTeacherLinks( [props.opt.content.second_block.leader] ) }</label>
                <label className="size-20"><span className="bold">Tanárok: </span>{ generateTeacherLinks(props.opt.content.second_block.teachers) }</label>
                <label className="size-20" dangerouslySetInnerHTML={{ __html: props.opt.content.second_block.price }}></label>
                {/* TODO: add link */}
                <button className={`${style['btn']} ${style['primary']}`}>Jelentkezem</button>
              </div>
              <img className={style["camp-row-image"]} src={require(`../assets/img/programs/camp/camp02.jpg`).default} alt=""/>
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
            <div className={`${style["camp-row"]} ${style["teachers"]}`}>
              <label className="size-54 bold">Tábor tanárai</label>
              <div className={style['teacher-cards']}>
                <TeacherCards />
              </div>
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
            <div className={`${style["video-wrapper"]} ${style["camp"]}`}>
                <button
                  className={`${style["open-video"]}`}
                  onClick={() => setModalOpen(true)}
                >
                  <label
                    className={`${style["open-video-label"]} size-36 extra-bold`}
                  >
                  Tábori videók
                  </label>
                  <span className="size-15 extra-bold">Videó indítása</span>
                </button>
                <img
                  className={`${style["video-bg"]}`}
                  src={bg}
                  alt="super meaningfull text"
                />
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
                  A táborba minden nap reggel 8 órától lehet érkezni, a programok  9 órakor kezdődnek. 8 órától biztosítjuk a tanMikor kezdődik a tábori nap és meddig tart?ári felügyeletet, így akinek reggel sietősebb, hozhatja kezdésre gyermekét, de akinek kényelmesebb, lehet csak a programok kezdetére érkezni. Délután 16:30-kor végzünk a programmal, utána mehetnek a gyerekek átöltözni és összepakolni.
                </label>
                <button className={`${style['btn']} ${style['secondary']}`}>Tovább olvasom</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
