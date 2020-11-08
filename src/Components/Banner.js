import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div
			className="banner py-3"
			style={{ background: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url("/images/banner.jpg")` }}
		>
			<div className="container-fluid">
				<div className="main d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center">
					<Link to="/">
						<img className="logo" src="/images/logo.png" alt="Logo" loading="lazy" />
					</Link>
					<a
						className="btn bg-red text-white px-md-5 py-md-2 shadow-lg mt-3 mt-md-auto"
						href="http://stalwartuniversityinstitute.com/"
						rel="noreferrer"
						target="_blank"
					>
						Visit the main website
					</a>
				</div>

				<div className="row align-items-center banner__row mx-0">
					<div className="col-sm-10 mx-auto col-lg-6 ml-md-0 px-lg-5">
						<h1 className="font-montserrat">SIS Portal</h1>
						<p>Welcome to Stalwart University Institute Portal.</p>
						<p className="font-italic">
							All services on this portal are restricted, hence, only authenticated users can access them.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
