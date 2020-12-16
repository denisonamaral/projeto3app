import React from "react";
import "./About.css";
import AboutCards from "./aboutCards/AboutCards";

import geoIcon from "../icons/geo-alt-fill.svg";
import buildingIcon from "../icons/building.svg";
import ironhack from "../icons/ironhacklogo.svg";

function About(props) {
  return (
    <div>
      <div className="about">
        <AboutCards icon={geoIcon} description={props.city} />
        <AboutCards icon={ironhack} description={props.cohort} />
        <AboutCards icon={buildingIcon} description={props.institution} />
      </div>
    </div>
  );
}

export default About;
