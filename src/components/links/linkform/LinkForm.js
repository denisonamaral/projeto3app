import React, { useState } from "react";
import "./LinkForm.css";
import api from "../../../apis/api";
import { useHistory } from "react-router-dom";

function LinkForm(props) {
  const history = useHistory();
  const [state, setState] = useState({
    link: "",
    url: "",
    description: "",
  });

  console.log(state);

  function handleChange(event) {
    return setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function enviarBancoDados() {
    try {
      const postBancoDeDados = await api.post("/linkcreate", state);
      // const pegarLinks = await api.get("/linksall");
      // console.log(pegarLinks.data.pegaAllLinks);
      // props.setXXX(pegarLinks.data.pegaAllLinks);
    } catch (err) {
      console.log("error LinkForm.js catch :", err);
    }
  }

  return (
    <div className="linkform">
      <input
        name="link"
        className="linkname form-control"
        placeholder="Digite o nome do seu link"
        onChange={handleChange}
      ></input>
      <input
        name="url"
        className="link form-control"
        placeholder="Cole a URL do seu link aqui"
        onChange={handleChange}
      ></input>
      <textarea
        name="description"
        className="linkdescription form-control"
        placeholder="Digite a descrição do seu link"
        onChange={handleChange}
      ></textarea>
      <button className="buttonlink btn btn-primary" onClick={enviarBancoDados}>
        Add link
      </button>
    </div>
  );
}

export default LinkForm;
