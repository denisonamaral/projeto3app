import React from "react";
import "./AboutMeLinks.css";

function AboutMeLinks(props) {
  return (
    <div className="aboutlinks">
      <a href={props.link}>
        <img src={props.icon} width="25px" height="25px" alt="cards-logo" />
      </a>

      <p>{props.name}</p>
    </div>
  );
}

export default AboutMeLinks;
