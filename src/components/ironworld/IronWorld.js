import React from "react";
import "./IronWorld.css";

function IronWorld(props) {
  console.log(props.match.params.lugar);

  return (
    <div className="overflow">
      <iframe
        className="iframe"
        src={`https://www.ironhack.com/en/${props.match.params.lugar}`}
      ></iframe>
    </div>
  );
}

export default IronWorld;
