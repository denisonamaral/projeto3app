import React from "react";
import "./Projects.css";
import Project from "./project/Project";

function Projects() {
  return (
    <div className="projects">
      <Project
        name="Qualife"
        github="http://www.facebook.com"
        demo="http://www.qualife.com"
        number={1}
      />
      <Project
        name="Running to Oasis"
        github="http://www.facebook.com"
        demo="http://www.qualife.com"
        number={2}
      />
      <Project
        name="My Ironhack"
        github="http://www.facebook.com"
        demo="http://www.qualife.com"
        number={3}
      />
    </div>
  );
}

export default Projects;
