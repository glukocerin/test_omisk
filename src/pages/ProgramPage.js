import React from "react";
import style from "../assets/css/programPage.module.css";
import "../assets/css/actuals.css";

import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

import { Link } from "react-router-dom";
import pagesConfig from "../assets/pagesConfig";

const { actuals, ...rest } = pagesConfig;

const Events = function(props) {
  return props.list.map((event, index) => (
    <div key={index} className={style["event-wrapper"]}>
      <div className={style["event-header"]}>
        <div className={style["event-date"]}>
          <p>{event.date}</p>
        </div>
        <div className={style["event-details"]}>
          <p>•••</p>
        </div>
      </div>
      <div className={style["event-title"]}>
        <h5>{event.title}</h5>
      </div>
      <div className={style["event-body"]}>
        <p>{event.body}</p>
      </div>
    </div>
  ));
};

const ImageGallery = function(props) {
  const images = props.list.map((img, inde) => {
    return require(`../assets/img/programs/${img}.jpg`);
  });

  return images.map((img, index) => {
    return <img key={index} src={img} alt="" />;
  });
};

const ActualCard = function() {
  // this filter black magic needed to only one card will appear in the blog post section
  return actuals.cards
    .filter((card, index) => index === 0)
    .map((card, index) => (
      <Link to={{ pathname: "/actual", state: card }} key={index}>
        <div className="card">
          <div className="picture-box">
            <img
              src={require(`../assets/img/actuals/${card.picture}`)}
              alt=""
            />
            <label className="picture-title size-28 extra-bold">
              {card.picture_title}
            </label>
          </div>
          <div className="text-box">
            <label className="actual-date size-15 extra-bold">
              {card.date}
            </label>
            <label className="dot-dot-dot size-36 extra-bold">...</label>
            <label className="actual-desc size-24 extra-bold">
              {card.title}
            </label>
            <label className="actual-text size-15 thin">{card.text}</label>
          </div>
        </div>
      </Link>
    ));
};

export default function ProgramPage(props) {
  var backgroundImage = require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`);

  return (
    <div style={{ position: "relative" }}>
      <div className={style["header-wrapper"]}>
        <div
          className={style["header"]}
          style={{ backgroundImage: "url(" + backgroundImage + ")" }}
        ></div>
        <label className={`${style["state-location"]} size-13`}>
          <Link to="/programs">Prograimjaink</Link> > {props.opt.title}
        </label>
        <label className={`${style["header-title"]} size-90 extra-bold`}>
          {props.opt.title}
        </label>
      </div>
      <div className={style["body"]}>
        <div className={style["info"]}>
          <div className={style["details"]}>
            <p className="size-20">{props.opt.detailsOne}</p>
            <p className="size-20">{props.opt.detailsTwo}</p>
            <p className="size-20">{props.opt.detailsThree || ""}</p>
            <p className="size-20">{props.opt.detailsFour || ""}</p>
          </div>
          <div className={style["events"]}>
            {/* <Events list={props.opt.events} /> */}
          </div>
        </div>
        <div className={style["main-pic-wrapper"]}>
          {props.opt.youtubeLink ? (
            <iframe
              title="video"
              width="832"
              height="468"
              src={`${props.opt.youtubeLink}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}
        </div>
        <div className={style["alt-text"]}>
          <p>{props.opt.videoAlt || ""}</p>
        </div>
      </div>
      <div className={style["images"]}>
        <div className={style["images-title"]}>
          <h5 className="size-36">Kövess minket</h5>
        </div>
        <div className={style["logos"]}>
          <a
            href="https://www.instagram.com/o_m_i_s_k/"
            target="_blank"
            rel="noopener noreferrer"
            className={style["icon"]}
          >
            <Instagram />
          </a>
          <a
            href="https://www.facebook.com/omisk.hu/"
            target="_blank"
            rel="noopener noreferrer"
            className={style["icon"]}
          >
            <Facebook />
          </a>
          <a
            href="https://www.youtube.com/channel/UCyG_fD6zAsXyDDuzShoznIA"
            target="_blank"
            rel="noopener noreferrer"
            className={style["icon"]}
          >
            <Youtube />
          </a>
        </div>
        <div className={style["gallery"]}>
          <ImageGallery list={props.opt.gallery} />
        </div>
      </div>
      <div className="actuals">
        <h2 class={`${style["actual-title"]} size-48`}>Eseményeink</h2>
        <div className="actual-cards">
          <ActualCard />
        </div>
      </div>
    </div>
  );
}
