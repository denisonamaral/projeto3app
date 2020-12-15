import React from "react";
import "./EditProfile.css";
import Input from "./inputs/Input";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";
const animatedComponents = makeAnimated();

function EditProfile() {
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

  const [state, setState] = useState([]);
  console.log(state);

  function handleChange(event) {
    console.log(event);
    const arrTest = [];
    event.map((elem) => arrTest.push(elem.value));
    setState(arrTest);
  }

  return (
    <div className="editprofile">
      <h1>Edit my profile</h1>
      <Input
        label="Foto de capa"
        placeholder="Envie aqui a URL da sua foto de capa"
      />
      <Input
        label="Foto de perfil"
        placeholder="Envie aqui a URL da sua foto de perfil"
      />
      <Input label="Cidade" placeholder="Digite a cidade em que mora" />
      <Input label="Turma" placeholder="Digite aqui sua turma da Ironhack" />
      <Input label="Instituição" placeholder="Sua instituição" />
      <div>
        <label for="exampleFormControlTextarea1">
          <strong>Editar Sobre mim</strong>
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <Input label="Linkedin Link" placeholder="URL linkedin" />
      <Input label="Github Link" placeholder="URL Github" />
      <Input label="Projeto #1" placeholder="URL projeto 1" />
      <Input label="Projeto #2" placeholder="URL projeto 2" />
      <Input label="Projeto #3" placeholder="URL projeto 3" />
      <h6>
        <strong>Edit Stacks</strong>
      </h6>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={options}
        className="select"
        onChange={handleChange}
      />
    </div>
  );
}

export default EditProfile;
