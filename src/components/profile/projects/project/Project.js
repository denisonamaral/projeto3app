import React from "react";
import "./Project.css";
function Project(props) {
  return (
    <div className="project">
      <h3>Project #{props.number}</h3>
      <h4>{props.name}</h4>
      <a href={props.demo}>Demo</a>
      <a href={props.github}>GitHub</a>
    </div>
  );
}

export default Project;
