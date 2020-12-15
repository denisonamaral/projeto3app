import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/MainView/Home/Home";
import About from "./components/MainView/About/About";
import Destinations from "./components/MainView/Destinations/Destinations";
import Country from "./components/MainView/Destinations/Country/Country";
import Blog from "./components/MainView/Blog/Blog";
import Services from "./components/MainView/Services/Services";
import Contacts from "./components/MainView/Contacts/Contacts";

import Auth from "./routeComponents/auth/Login";
import Enroll from "./routeComponents/auth/Signup";

import Profile from "./components/profile/Profile";
import Login from "./routeComponents/auth/Login";
import Signup from "./routeComponents/auth/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/auth/login" component={Auth} />
      <Route exact path="/auth/signup" component={Enroll} />
      <Route exact path="/about" component={About} />
      <Route exact path="/destinations" component={Destinations} />
      <Route exact path="/destinations/:country" component={Country} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/meuperfil" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default Routes;
