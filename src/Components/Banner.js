import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="banner py-3" style={{ background: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url("/images/banner.jpg")` }}>
			<div className="container-fluid">
				<Link to="/">
					<img className="logo" src="/images/logo.png" alt="Logo" />
				</Link>
				<div className="row h-100 align-items-center banner__row mx-0">
					<div className="col-md-6 px-lg-5">
						<h1>Stalwart Univeristy Portal</h1>
						<p>
							Welcome to Stalwart University Institute Portal All services on this portal are restricted, hence, only
							authenticated users can access them. Please login.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
