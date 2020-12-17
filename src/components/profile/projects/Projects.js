import React from "react";
import "./Projects.css";
import Project from "./project/Project";

function Projects(props) {
  console.log("props DEPLOY", props);
  return (
    <div className="projects">
      <Project
        name={props.projects.project1name}
        github={props.projects.project1url}
        demo={props.projects.project1demo}
        number={1}
      />
      <Project
        name={props.projects.project2name}
        github={props.projects.project2url}
        demo={props.projects.project2demo}
        number={2}
      />
      <Project
        name={props.projects.project3name}
        github={props.projects.project3url}
        demo={props.projects.project3demo}
        number={3}
      />
    </div>
  );
}

export default Projects;
