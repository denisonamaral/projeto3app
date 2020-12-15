import React from "react";
import * as s from "./Country.styles";

const Country = (props) => {
  const country = props.match.params.country;
  const countries = {
    amsterdam: {
      description: <a href="http://https://www.ironhack.com/en/amsterdam" />,
    },
    berlin: {
      description: "Conteúdo aqui",
    },
    madrid: {
      description: "Conteúdo aqui",
    },
    miami: {
      description: "Conteúdo aqui",
    },
    saopaulo: {
      description: "Conteúdo aqui",
    },
    barcelona: {
      description: "Conteúdo aqui",
    },
    lisbon: {
      description: "Conteúdo aqui",
    },
    mexico: {
      description: "Conteúdo aqui",
    },
    paris: {
      description: "Conteúdo aqui",
    },
  };
  return (
    <s.CountryContainer>
      <s.CountryImage img={countries[country]["img"]} />
      <s.CountryDescription>
        {countries[country]["description"]}
      </s.CountryDescription>
    </s.CountryContainer>
  );
};

export default Country;
