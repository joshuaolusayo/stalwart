import React from "react";

const Banner = () => {
	return (
		<div
			className="banner py-3"
			style={{ background: `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url("/images/banner.jpg")` }}
		>
			<div className="container h-100">
				<div className="main d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
					<img className="logo" src="/images/logo.png" alt="Logo" loading="lazy" />
					<a
						className="btn bg-red text-white px-md-5 py-md-3 shadow-lg mt-3 mt-md-0"
						href="http://stalwartuniversityinstitute.com/"
						rel="noreferrer"
						target="_blank"
					>
						Visit the main website
					</a>
				</div>

				<div className="row align-items-center banner__row mx-0">
					<div className="col-sm-10 col-lg-6 ">
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
