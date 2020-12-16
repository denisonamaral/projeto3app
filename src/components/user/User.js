import React from "react";
import NoImg from "../../images/no-img.png";
import LocationOn from "@material-ui/icons/LocationOn";
//import LinkIcon from "@material-ui/icons/Link";
import Mail from "@material-ui/icons/MailOutline";
import { useState } from "react";
import "./user.css";
import PermIdentity from "@material-ui/icons/PermIdentity";

function User() {
  const [state, setState] = useState([
    {
      name: "Denis' son",
      location: "Dublin",
      email: "Jony@gmail.com",
    },
    {
      name: "Denoso",
      location: "Amazonas",
      email: "Caetano@gmail.com",
    },
    {
      name: "Denilson",
      location: "Suiça",
      email: "Denison@gmail.com",
    },
    {
      name: "Denison",
      location: "Dublin",
      email: "Matheus@gmail.com",
    },
    {
      name: "Deni",
      location: "São paulo",
      email: "denise@gmail.com",
    },
    {
      name: "Denis",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Dengo",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
    {
      name: "Demilton",
      location: "Rio de Janeiro",
      email: "denilson@gmail.com",
    },
  ]);

  return (
    <div className="profile-container">
      {state.map((person) => (
        <div className="person-profile">
          <div>
            <img src={NoImg} alt="profile" className="profile-image" />
          </div>
          <PermIdentity color="primary" />
          <p>{person.name}</p>
          <LocationOn color="primary" />
          <p>{person.location}</p>
          <Mail color="primary" />
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
