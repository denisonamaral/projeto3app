import React from "react";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div>
      <img className="avatarImg" src={props.picture} alt="avatar-logo" />
    </div>
  );
}

export default Avatar;
