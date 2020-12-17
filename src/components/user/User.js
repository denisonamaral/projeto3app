import React from "react";
import NoImg from "../../images/no-img.png";
import LocationOn from "@material-ui/icons/LocationOn";
import BookmarkIcon from "@material-ui/icons/Bookmark";
//import LinkIcon from "@material-ui/icons/Link";
import Mail from "@material-ui/icons/MailOutline";
import { useState, useEffect } from "react";
import "./user.css";
import PermIdentity from "@material-ui/icons/PermIdentity";
import api from "../../apis/api";
import { Link } from "react-router-dom";

function User() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function PuxaAllUsersDB() {
      try {
        const armazenarDadosDBAllUsers = await api.get("/allusers");
        console.log(
          "IMPRIMIU PORQUE DEU CERTO : ",
          armazenarDadosDBAllUsers.data.pegaAllUsersDB
        );
        setState(armazenarDadosDBAllUsers.data.pegaAllUsersDB);
      } catch (err) {
        console.log("catch user.js linha 16 :", err);
      }
    }
    PuxaAllUsersDB();
  }, []);

  return (
    <div className="profile-container">
      {state.map((person) => (
        <div className="person-profile">
          <div>
            <img src={person.picture} alt="profile" className="profile-image" />
          </div>
          <PermIdentity color="primary" />
          <Link to={`/perfil/${person.name}`}>
            <p>{person.name}</p>
          </Link>
          <LocationOn color="primary" />
          <p>{person.city}</p>
          <BookmarkIcon color="primary" />
          <p>{person.cohort}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
