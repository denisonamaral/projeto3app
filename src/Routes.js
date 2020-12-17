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
import User from "./components/user/User";

import Auth from "./routeComponents/auth/Login";
import Enroll from "./routeComponents/auth/Signup";

import Profile from "./components/profile/Profile";
import Login from "./routeComponents/auth/Login";
import Signup from "./routeComponents/auth/Signup";
import EditProfile from "./components/editprofile/EditProfile";
import Link from "./components/links/Link";
import ProfileDinamic from "./components/profiledinamic/ProfileDinamic";
import IronWorld from "./components/ironworld/IronWorld";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/ironteam" component={User} />
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
      <Route exact path="/signup" component={Login} />
      <Route exact path="/login" component={Signup} />
      <Route exact path="/meuperfil/edit" component={EditProfile} />
      <Route exact path="/linksuteis" component={Link} />
      <Route exact path="/perfil/:id" component={ProfileDinamic} />
      <Route exact path="/campus/:lugar" component={IronWorld} />
    </Switch>
  );
};

export default Routes;
