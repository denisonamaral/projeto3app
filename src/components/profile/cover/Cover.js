import React from "react";
import "./Cover.css";

function Cover(props) {
  return <img className="coverImg" src={props.cover} alt="logo-cover" />;
}

export default Cover;
