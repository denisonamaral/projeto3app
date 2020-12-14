import React from "react";
import Cover from "./cover/Cover";
import Avatar from "./avatar/Avatar";
import About from "./about/About";
import AboutMe from "./aboutMe/AboutMe";
import Projects from "./projects/Projects";
import Technologies from "./technologies/Technologies";
import Edit from "./edit/Edit";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <Cover />
      <Avatar />
      <About />
      <AboutMe />
      <Projects />
      <Technologies />
      <Edit />
    </div>
  );
}

export default Profile;
