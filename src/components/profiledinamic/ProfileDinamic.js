import React from "react";
import Cover from "../profile/cover/Cover";
import Avatar from "../profile/avatar/Avatar";
import About from "../profile/about/About";
import AboutMe from "../profile/aboutMe/AboutMe";
import Projects from "../profile/projects/Projects";
import Technologies from "../profile/technologies/Technologies";
// import EditProfile from "../editprofile/EditProfile";
import "./ProfileDinamic.css";
import api from "../../apis/api";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import Edit from "../profile/edit/Edit";

function ProfileDinamic(props) {
  //   console.log("AQUI PROSP", props);
  const id = props.match.params.id;
  //   console.log("id", id);
  //   const authContext = useContext(AuthContext);
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
    project1name: "",
    project1demo: "",
    project1url: "",
    project2name: "",
    project2demo: "",
    project2url: "",
    project3name: "",
    project3demo: "",
    project3url: "",
    stacks: [],
  });

  // console.log("setprofile", profile);
  // console.log("props", profile.linkedin);

  useEffect(() => {
    async function requestProfileDB() {
      try {
        const responsePerfil = await api.get(`/perfil/${id}`);

        console.log(
          "responsePerfil",
          responsePerfil.data.PegarPerfilDinamicoBanco
        );
        setProfile({
          ...profile,
          cover: responsePerfil.data.PegarPerfilDinamicoBanco.cover,
          picture: responsePerfil.data.PegarPerfilDinamicoBanco.picture,
          city: responsePerfil.data.PegarPerfilDinamicoBanco.city,
          cohort: responsePerfil.data.PegarPerfilDinamicoBanco.cohort,
          institution: responsePerfil.data.PegarPerfilDinamicoBanco.institution,
          about: responsePerfil.data.PegarPerfilDinamicoBanco.about,
          linkedin: responsePerfil.data.PegarPerfilDinamicoBanco.linkedin,
          github: responsePerfil.data.PegarPerfilDinamicoBanco.github,
          project1name:
            responsePerfil.data.PegarPerfilDinamicoBanco.project1name,
          project1demo:
            responsePerfil.data.PegarPerfilDinamicoBanco.project1demo,
          project1url: responsePerfil.data.PegarPerfilDinamicoBanco.project1url,
          project2name:
            responsePerfil.data.PegarPerfilDinamicoBanco.project2name,
          project2demo:
            responsePerfil.data.PegarPerfilDinamicoBanco.project2demo,
          project2url: responsePerfil.data.PegarPerfilDinamicoBanco.project2url,
          project3name:
            responsePerfil.data.PegarPerfilDinamicoBanco.project3name,
          project3demo:
            responsePerfil.data.PegarPerfilDinamicoBanco.project3demo,
          project3url: responsePerfil.data.PegarPerfilDinamicoBanco.project3url,
          stacks: responsePerfil.data.PegarPerfilDinamicoBanco.stacks,
        });
      } catch (err) {
        console.log("catch profile.js", err);
      }
    }
    requestProfileDB();
  }, []);

  return (
    <div className="profileDinamic">
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
      <Projects projects={profile} />
      <Technologies stacks={profile.stacks} />
    </div>
  );
}

export default ProfileDinamic;
