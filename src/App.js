import React from "react";
import * as s from "./App.styles";
import * as Palette from "./colors";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const backgroundImage = "images/mountain.jpg";
  const sidebarHeader = {
    fullName: (
      <img src="https://www.ironhack.com/assets/icons/ironhack_logos/logo.svg" />
    ),
    shortName: (
      <img src="https://www.ironhack.com/assets/icons/ironhack_logos/logo.svg" />
    ),
  };
  const menuItems = [
    { name: "Home", to: "/", icon: "/icons/home.svg", subMenuItems: [] },
    {
      name: "Community",
      to: "/about",
      icon: "/icons/about.svg",
      subMenuItems: [],
    },
    {
      name: "IronWorld",
      to: "/campus",
      icon: "/icons/destinations.svg",
      subMenuItems: [
        { name: "Amsterdam", to: "/amsterdam" },
        { name: "Berlin", to: "/berlin" },
        { name: "Madrid", to: "/madrid" },
        { name: "Miami", to: "/miami" },
        { name: "São Paulo", to: "/saopaulo" },
        { name: "Barcelona", to: "/barcelona" },
        { name: "Lisbon", to: "/lisbon" },
        { name: "Mexico", to: "/mexico" },
        { name: "Paris", to: "/paris" },
      ],
    },
    {
      name: "Links Úteis",
      to: "/linksuteis",
      icon: "/icons/blog.svg",
      subMenuItems: [],
    },
    {
      name: "Meu perfil",
      to: "/meuperfil",
      icon: "/icons/services.svg",
      subMenuItems: [],
    },
    {
      name: "IronTeam",
      to: "/Ironteam",
      icon: "/icons/contacts.svg",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Roboto Mono",
  };

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.silver}
      />
      <MainView />
    </s.App>
  );
};

export default App;
