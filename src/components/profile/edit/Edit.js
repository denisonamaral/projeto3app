import React from "react";
import { Link } from "react-router-dom";
import "./Edit.css";

function Edit() {
  return (
    <div className="buttonEdit">
      <button>
        <Link to="/meuperfil/edit">Edit My Profile</Link>
      </button>
    </div>
  );
}

export default Edit;
