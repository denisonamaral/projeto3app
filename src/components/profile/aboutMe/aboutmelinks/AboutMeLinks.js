import React from "react";
import "./AboutMeLinks.css";

function AboutMeLinks(props) {
  return (
    <div className="aboutlinks">
      <img src={props.icon} width="25px" height="25px" alt="cards-logo" />
      <h5>{props.name}</h5>
    </div>
  );
}

export default AboutMeLinks;
