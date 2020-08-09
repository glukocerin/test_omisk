import React from "react";
import style from "../assets/css/programPage.module.css";
import { ReactComponent as Facebook } from "../assets/img/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/img/icons/instagram.svg";
import { ReactComponent as Youtube } from "../assets/img/icons/youtube.svg";

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

const Images = function(props) {
  return props.list.map((img, index) => {
    var link = `../assets/img/programs/${img}.jpg`;

    return (
      <img
        key={index}
        src={require(`../assets/img/programs/${img}.jpg`)}
        alt=""
      />
    );
  });
};

export default function ProgramPage(props) {
  return (
    <div>
      <div className={style["header-image"]}>
        <img
          src={require(`../assets/img/programs/header/${props.opt.headerImg}.jpg`)}
          alt=""
        />
      </div>
      <h4 className={`${style["header-text"]} size-90 extra-bold`}>
        {props.opt.title}
      </h4>
      <div className={style["body"]}>
        <div className={style["info"]}>
          <div className={style["details"]}>
            <p>{props.opt.detailsOne}</p>
            <p>{props.opt.detailsTwo}</p>
            <p>{props.opt.detailsThree || ""}</p>
            <p>{props.opt.detailsFour || ""}</p>
          </div>
          <div className={style["events"]}>
            <Events list={props.opt.events} />
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
          <h5 className="size-36">Kovess minket</h5>
        </div>
        <div className={style["logos"]}>
          <div className="icon">
            <Instagram />
          </div>
          <div className="icon">
            <Facebook />
          </div>
          <div className="icon">
            <Youtube />
          </div>
        </div>
        <div className={style["gallery"]}>
          <Images list={props.opt.gallery} />
        </div>
      </div>
    </div>
  );
}
