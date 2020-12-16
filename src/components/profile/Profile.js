import React from "react";
import Cover from "./cover/Cover";
import Avatar from "./avatar/Avatar";
import About from "./about/About";
import AboutMe from "./aboutMe/AboutMe";
import Projects from "./projects/Projects";
import Technologies from "./technologies/Technologies";
// import EditProfile from "../editprofile/EditProfile";
import "./Profile.css";
import api from "../../apis/api";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import Edit from "./edit/Edit";

function Profile() {
  const authContext = useContext(AuthContext);
  // console.log("aqui", authContext);

  const [profile, setProfile] = useState({
    cover: "",
    picture: "",
    city: "",
    cohort: "",
    institution: "",
    about: "",
    linkedin: "",
    github: "",
    projects: {
      project1: {
        name: "",
        demo: "",
        github: "",
      },
      project2: {
        name: "",
        demo: "",
        github: "",
      },
      project3: {
        name: "",
        demo: "",
        github: "",
      },
    },
    stacks: [],
  });

  // console.log("setprofile", profile);
  // console.log("props", profile.linkedin);

  useEffect(() => {
    async function requestProfileDB() {
      try {
        const responsePerfil = await api.get("/profile");
        console.log("responsePerfil", responsePerfil.data.user);
        setProfile({
          ...profile,
          cover: responsePerfil.data.user.cover,
          picture: responsePerfil.data.user.picture,
          city: responsePerfil.data.user.city,
          cohort: responsePerfil.data.user.cohort,
          institution: responsePerfil.data.user.institution,
          about: responsePerfil.data.user.about,
          linkedin: responsePerfil.data.user.linkedin,
          github: responsePerfil.data.user.github,
          projects: {
            project1: {
              name: responsePerfil.data.user.projects.project1.name,
              demo: responsePerfil.data.user.projects.project1.demo,
              github: responsePerfil.data.user.projects.project1.github,
            },
            project2: {
              name: responsePerfil.data.user.projects.project2.name,
              demo: responsePerfil.data.user.projects.project2.demo,
              github: responsePerfil.data.user.projects.project2.github,
            },
            project3: {
              name: responsePerfil.data.user.projects.project3.name,
              demo: responsePerfil.data.user.projects.project3.demo,
              github: responsePerfil.data.user.projects.project3.github,
            },
          },
          stacks: responsePerfil.data.user.stacks,
        });
      } catch (err) {
        console.log("catch profile.js", err);
      }
    }
    requestProfileDB();
  }, []);

  return (
    <div className="profile">
      <Cover cover={profile.cover} />
      <Avatar picture={profile.picture} />
      <About
        cohort={profile.cohort}
        institution={profile.institution}
        city={profile.city}
      />
      <AboutMe
        about={profile.about}
        linkedin={profile.linkedin}
        github={profile.github}
      />
      <Projects projects={profile.projects} />
      <Technologies stacks={profile.stacks} />
      <Edit />
    </div>
  );
}

export default Profile;
