import React from "react";
import "./LinkComponent.css";
import api from "../../../apis/api";

function LinkComponent(props) {
  // const vaiAe = "test";
  // async function deleteDB() {
  //   try {
  //     const deleteLink = await api.delete(`/deletelink/${props.name}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function DeletarBancoDados() {
    const deletarBanco = await api.delete(`/deletelink/${props.name}`);
  }

  return (
    <div className="linkcomponent">
      <div className="h1">
        <h1>{props.name}</h1>
      </div>

      <a href={props.link}>ACESSAR LINK</a>
      <div className="p">
        <p>{props.description}</p>
      </div>

      <button className="delete" onClick={DeletarBancoDados}>
        Delete
      </button>
    </div>
  );
}

export default LinkComponent;
