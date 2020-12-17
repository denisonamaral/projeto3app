import React, { useState, useEffect } from "react";
import "./Link.css";
import LinkForm from "./linkform/LinkForm";
import LinkComponent from "./linkcomponent/LinkComponent";
import api from "../../apis/api";
import { useHistory } from "react-router-dom";

function Link() {
  const history = useHistory();
  const [state, setState] = useState([]);
  console.log("console state", state);

  useEffect(() => {
    async function pegarTodosLinksDB() {
      try {
        const pegarLinks = await api.get("/linksall");
        console.log(pegarLinks.data.pegaAllLinks);
        setState(pegarLinks.data.pegaAllLinks);
        // history.push("/linksuteis");
      } catch (err) {
        console.log("catch err links.js :", err);
      }
    }
    pegarTodosLinksDB();
  }, []);

  return (
    <div className="showlinks">
      <LinkForm setXXX={setState} />
      {state.map((elem) => {
        return (
          <LinkComponent
            name={elem.link}
            description={elem.description}
            link={elem.url}
          />
        );
      })}
    </div>
  );
}

export default Link;
