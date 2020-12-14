import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="text-center">
			<h1>Projeto 3</h1>
			<p>HOMEPAGE</p>
			<div className="d-flex flex-column align-items-center">
				<Link className="btn btn-lg btn-primary" to="/auth/login">
					Login here!
				</Link>
			</div>
			<div className="d-flex flex-column align-items-center">
				<Link className="btn btn-lg btn-primary m-3" to="/auth/signup">
					Signup Here
				</Link>
			</div>
		</div>
	);
}

export default Home;
