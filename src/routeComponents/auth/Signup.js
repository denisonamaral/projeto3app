import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
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
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <Container className="text-black container--center">
      <form onSubmit={handleSubmit}>
        <Link to="/">
          <Image
            src="https://www.ironhack.com/assets/icons/ironhack_logos/logo.svg"
            height="200"
            width="100"
            fluid
          />
        </Link>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>

        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>

        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Password"
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center form-group">
          <Button className="btn btn-dark" type="submit">
            Signup!
          </Button>
        </div>
        <div className="text-center form-group">
          <Link to="/auth/login">
            Already have an account? Click here to login.
          </Link>
        </div>
      </form>
    </Container>
  );
}

export default Signup;
