import React from "react";
import style from "../assets/css/courseDetailsCard.module.css";

const Items = props => {
  return props.textBody.map(el => {
    return (
      <li>
        <p className="size-14 thin">{el}</p>
      </li>
    );
  });
};

const TextBody = function(props) {
  if (props.details.isList) {
    return <p className="size-14 thin">{props.details.textBody}</p>;
  }
  return (
    <ul>
      <Items textBody={props.details.textBody} />
    </ul>
  );
};

export default function CourseDetailsCard(props) {
  return (
    <div className={`${style["card-wrapper"]} ${style["reverse"]}`}>
      <div className={`${style["text"]} ${style["reverse"]}`}>
        <h4 className="size-16 extra-bold">{props.details.title}</h4>
        <p className="size-14 thin">
          <TextBody
            details={{
              textBody: props.details.textBody,
              isList: props.details.isList
            }}
          />
          {props.details.textBody}
        </p>
      </div>
      <div className={style["pic"]}>
        <img src={require(`../assets/img/${props.details.image}.png`)} alt="" />
      </div>
    </div>
  );
}
