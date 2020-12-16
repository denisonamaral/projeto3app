import React from "react";
import "./Technologies.css";
import StackComp from "./stackcomponent/StackComp";

// const stacksArr = [
//   "Javascript",
//   "Golang",
//   "HTML",
//   "CSS",
//   "Apache",
//   "MySQL",
//   "MongoDB",
//   "ReactJS",
//   "Cobol",
//   "Python",
//   "C++",
//   "C#",
//   "MongoDB",
//   "ReactJS",
//   "Cobol",
//   "Python",
//   "C++",
//   "C#",
// ];

function Technologies(props) {
  return (
    <div className="stacks">
      <h3>Stacks</h3>
      <hr></hr>
      <div className="renderStacks">
        {props.stacks.map((elem, i) => {
          return <StackComp key={i} stack={elem} />;
        })}
      </div>
    </div>
  );
}

export default Technologies;
