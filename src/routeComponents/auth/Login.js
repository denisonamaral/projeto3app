import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import { AuthContext } from "../../contexts/authContext";
import { Colorize } from "@material-ui/icons";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/login", state);
      console.log(response);
      console.log(authContext);
      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );

      setErrors({ password: "", email: "" });
      props.history.push("/book/all"); // arrumar essa linha
    } catch (err) {
      console.error(err);
      //   setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div className="bg--green">
      <Container className="text-white container--center">
        <Link to="/">
          <Image
            src="https://www.ironhack.com/assets/icons/ironhack_logos/logo.svg"
            height="200"
            width="100"
            fluid
          />
        </Link>

        <br />
        <div className="Login">
          <br />
          <h3 style={{ color: "black" }}> Log In into Your Account</h3>
          <br />
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                name="password"
                type="password"
                value={state.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn-dark" type="submit">
              Log In
            </Button>
          </Form>
          <br />
        </div>
      </Container>
    </div>
  );
}

export default Login;
