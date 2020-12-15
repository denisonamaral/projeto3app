import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "../../contexts/authContext";
import "./Login.css";

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

			authContext.setLoggedInUser({ ...response.data });
			localStorage.setItem(
				"loggedInUser",
				JSON.stringify({ ...response.data })
			);
			setErrors({ password: "", email: "" });
			props.history.push("/book/all"); // arrumar essa linha
		} catch (err) {
			console.error(err.response);
			setErrors({ ...err.response.data.errors });
		}
	}

	return (
	 <div className="container">
		<form className="form" onSubmit={handleSubmit}>
			<h1 className="text-center">Login</h1>
			
			<div className="text-center form-group">
				<label htmlFor="signupFormEmail"></label>
				<input className="input"
					type="email"
					name="email"
					id="signupFormEmail"
					value={state.email}
					error={errors.email}
					onChange={handleChange}
					placeholder="E-mail Address"
				/>
			</div>

			<div className="text-center form-group">
				<label htmlFor="signupFormPassword"></label>
				<input className="input"
					type="password"
					name="password"
					id="signupFormPassword"
					value={state.password}
					error={errors.password}
					onChange={handleChange}
					placeholder="Password"

				/>
			</div>

			<div className="text-center form-group">
				<button type="submit" className="btn btn-primary">Login!</button>
			</div>
			<div className="text-center form-group">
				<Link to="/auth/signup">
					Don't have an account? Click here to signup!
				</Link>
			</div>
		</form>
		</div>
			
		
		);
}

export default Login;
