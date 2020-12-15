import React from "react";
import "./AboutMe.css";
import linkedin from "../icons/linkedin.svg";
import github from "../icons/github.svg";
import AboutMelinks from "./aboutmelinks/AboutMeLinks";

function AboutMe() {

  return (
    <div className="aboutme">
      <h3>Sobre mim</h3>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos.
      </p>
      <div className="linksAboutMe">
        <AboutMelinks icon={linkedin} name={"LinkedIn"} />
        <AboutMelinks icon={github} name={"GitHub"} />
      </div>
    </div>
  );
}

export default AboutMe;
