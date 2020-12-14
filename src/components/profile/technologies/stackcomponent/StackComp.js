import React from "react";
import "./StackComp.css";

function StackComp(props) {
  return (
    <div className="stackcomp">
      <p>
        <strong>{props.stack}</strong>
      </p>
    </div>
  );
}

export default StackComp;
