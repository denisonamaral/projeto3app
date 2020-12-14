import React from "react";
import "./AboutCards.css";

function AboutCards(props) {
  return (
    <div className="aboutCards">
      <img src={props.icon} width="20px" height="20px" alt="aboutcards-logo" />
      <p>{props.description}</p>
    </div>
  );
}
export default AboutCards;
