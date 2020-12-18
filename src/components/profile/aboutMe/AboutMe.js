import React from "react";
import "./AboutMe.css";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import AboutMelinks from "./aboutmelinks/AboutMeLinks";

function AboutMe(props) {
  return (
    <div className="aboutme">
      <p>Sobre mim</p>
      <p>{props.about}</p>
      <div className="linksAboutMe">
        <AboutMelinks link={props.linkedin} icon={linkedin} name={"LinkedIn"} />
        <AboutMelinks link={props.github} icon={github} name={"GitHub"} />
      </div>
    </div>
  );
}

export default AboutMe;
