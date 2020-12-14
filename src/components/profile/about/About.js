import React from "react";
import "./About.css";
import AboutCards from "./aboutCards/AboutCards";

import geoIcon from "../icons/geo-alt-fill.svg";
import buildingIcon from "../icons/building.svg";
import ironhack from "../icons/ironhacklogo.svg";

function About() {
  return (
    <div>
      <div className="about">
        <AboutCards icon={geoIcon} description="Rio de Janeiro" />
        <AboutCards icon={ironhack} description="WDFT OCT2020" />
        <AboutCards icon={buildingIcon} description="Microsoft" />
      </div>
    </div>
  );
}

export default About;
