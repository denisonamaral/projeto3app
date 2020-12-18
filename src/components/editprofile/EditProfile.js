import React from "react";
import "./EditProfile.css";
import Input from "./inputs/Input";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import api from "../../apis/api";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
const animatedComponents = makeAnimated();

function EditProfile(props) {
  const authContext = useContext(AuthContext);
  console.log("aqui", authContext);

  const [editProfile, setEditProfile] = useState({
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
  console.log("EDITPROFILE :", editProfile);
  useEffect(() => {
    async function getProfileDB() {
      try {
        const response = await api.get("/profile");
        console.log("response2", response.data.user);
        setEditProfile({
          ...editProfile,
          cover: response.data.user.cover,
          picture: response.data.user.picture,
          city: response.data.user.city,
          cohort: response.data.user.cohort,
          institution: response.data.user.institution,
          about: response.data.user.about,
          linkedin: response.data.user.linkedin,
          github: response.data.user.github,
          project1name: response.data.user.project1name,
          project1demo: response.data.user.project1demo,
          project1url: response.data.user.project1url,
          project2name: response.data.user.project2name,
          project2demo: response.data.user.project2demo,
          project2url: response.data.user.project2url,
          project3name: response.data.user.project3name,
          project3demo: response.data.user.project3demo,
          project3url: response.data.user.project3url,
          stacks: response.data.user.stacks,
        });
      } catch (err) {
        console.log(err);
      }
    }
    getProfileDB();
  }, []);

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "Golang", label: "Golang" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Amazon AWS", label: "Amazon AWS" },
    { value: "MySQL", label: "MySQL" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "ReactJS", label: "ReactJS" },
    { value: "Cobol", label: "Cobol" },
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
  ];

  // const [state, setState] = useState([]);
  // console.log(state);

  function handleChange(event) {
    console.log(event);
    const arrTest = [];
    event.map((elem) => arrTest.push(elem.value));
    // setState(arrTest);
    setEditProfile({
      ...editProfile,
      ["stacks"]: arrTest,
    });
  }

  function onChangeForm(event) {
    return setEditProfile({
      ...editProfile,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }
  async function handleSubmit() {
    try {
      const responseEdit = await api.patch(`/profile`, editProfile);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <container className='profile'>
    <div className="editprofile">
      <p>Edit my profile</p>
      <Input
        name="cover"
        value={editProfile.cover}
        onChange={onChangeForm}
        label="Foto de capa"
        placeholder="Envie aqui a URL da sua foto de capa"
      />
      <Input
        name="picture"
        value={editProfile.picture}
        onChange={onChangeForm}
        label="Foto de perfil"
        placeholder="Envie aqui a URL da sua foto de perfil"
      />
      <Input
        name="city"
        value={editProfile.city}
        onChange={onChangeForm}
        label="Cidade"
        placeholder="Digite a cidade em que mora"
      />
      <Input
        name="cohort"
        value={editProfile.cohort}
        onChange={onChangeForm}
        label="Turma"
        placeholder="Digite aqui sua turma da Ironhack"
      />
      <Input
        name="institution"
        value={editProfile.institution}
        onChange={onChangeForm}
        label="Instituição"
        placeholder="Sua instituição"
      />
      <div>
        <label for="exampleFormControlTextarea1">
          <strong>Editar Sobre mim</strong>
        </label>
        <textarea
          name="about"
          onChange={onChangeForm}
          value={editProfile.about}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <Input
        name="linkedin"
        onChange={onChangeForm}
        value={editProfile.linkedin}
        label="Linkedin Link"
        placeholder="URL linkedin"
      />
      <Input
        name="github"
        onChange={onChangeForm}
        value={editProfile.github}
        label="Github Link"
        placeholder="URL Github"
      />
      <Input
        name="project1name"
        onChange={onChangeForm}
        label="Projeto #1"
        placeholder="Name projeto 1"
      />
      <Input
        name="project1demo"
        onChange={onChangeForm}
        placeholder="Demo projeto 1"
      />
      <Input
        name="project1url"
        onChange={onChangeForm}
        placeholder="URL projeto 1"
      />
      <Input
        name="project2name"
        onChange={onChangeForm}
        label="Projeto #2"
        placeholder="Name projeto 2"
      />
      <Input
        name="project2demo"
        onChange={onChangeForm}
        placeholder="Demo projeto 2"
      />
      <Input
        name="project2url"
        onChange={onChangeForm}
        placeholder="URL projeto 2"
      />
      <Input
        name="project3name"
        onChange={onChangeForm}
        label="Projeto #3"
        placeholder="Name projeto 3"
      />
      <Input
        name="project3demo"
        onChange={onChangeForm}
        placeholder="Demo projeto 3"
      />
      <Input
        name="project3url"
        onChange={onChangeForm}
        placeholder="URL projeto 3"
      />
      <p>
        <strong>Edit Stacks</strong>
      </p>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        className="select"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>EDIÇÃO FINALIZADA</button>
    </div>
    </container>
  );
}

export default EditProfile;
