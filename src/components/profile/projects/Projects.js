import React from "react";
import "./Projects.css";
import Project from "./project/Project";

function Projects(props) {
  console.log("props", props);
  return (
    <div className="projects">
      <Project
        name={props.projects.project1.name}
        github={props.projects.project1.github}
        demo={props.projects.project1.demo}
        number={1}
      />
      <Project
        name={props.projects.project2.name}
        github={props.projects.project2.github}
        demo={props.projects.project2.demo}
        number={2}
      />
      <Project
        name={props.projects.project3.name}
        github={props.projects.project3.github}
        demo={props.projects.project3.demo}
        number={3}
      />
    </div>
  );
}

export default Projects;
